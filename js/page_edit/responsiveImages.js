function mws_getBreakpoint(width, steps = 100) {
    return steps * Math.ceil(width / steps);
};

function mws_findContainerWidth(element) {
    var containerWidth, style, width;

    if (element.getAttribute('mws-width')) return element.getAttribute('mws-width');
    else if (element.parentNode.getAttribute('mws-width')) return element.parentNode.getAttribute('mws-width');
    else if (element.getAttribute('data-background-src')) return element.offsetWidth + element.offsetWidth * 0.2;
    containerWidth = 0;
    while (((element = element != null ? element.parentNode : void 0) instanceof HTMLElement) && !containerWidth) {
        style = window.getComputedStyle(element);
        if (!/^inline/.test(style.display))
            containerWidth = element.offsetWidth;
    }
    return containerWidth;
};

function mws_maxWidth(requiredWidth, el) {
    var imageWidth;
    imageWidth = el.clientWidth || 0;
    if (requiredWidth > imageWidth) {
        imageWidth = requiredWidth;
	// todo: not sure why we need to set the width here...
	//if (el.nodeName == 'IMG')
        //    el.style.width = requiredWidth;
    }
    return (imageWidth < 1200 ? imageWidth : 1200);
};

function mws_findContainerHeight(element) {
    var ratio, width;

    if (element.getAttribute('mws-height')) return element.getAttribute('mws-height');
    if (element.parentNode.getAttribute('mws-height')) return element.parentNode.getAttribute('mws-height');

    if (element.getAttribute('mws-ratio')) ratio = element.getAttribute('mws-ratio');
    if (element.parentNode.getAttribute('mws-ratio')) ratio = element.parentNode.getAttribute('mws-ratio');

    if (ratio) {
        ratio = ratio.split(":");
        ratio = ratio[0] / ratio[1];
        width = mws_findContainerWidth(element);
        return width / ratio;
    }
    return false;
}

function mws_forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
}

var mws_getQueryString = function(field, url) {
    var href = url ? url : window.location.href;
    var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
    var string = reg.exec(href);
    return string ? string[1] : null;
};

function mws_runResponsiveImages() {
    var dataSrc, containerWidth, containerHeight, breakpoint, requiredWidth, requiredHeight;
    mws_forEachElement('img.cld-responsive, .cld-responsive img, [data-background-src]', function(el) {
        dataSrc = el.getAttribute('data-src') || el.getAttribute('data-background-src') || el.getAttribute('src'); if (!dataSrc) return;
        containerWidth = mws_findContainerWidth(el); if (containerWidth == 0) return;
        containerHeight = mws_findContainerHeight(el);
        breakpoint = (el instanceof HTMLImageElement ? mws_getBreakpoint(containerWidth) : 300);

        requiredWidth = mws_getBreakpoint(containerWidth);
        requiredWidth = mws_maxWidth(requiredWidth, el);
        requiredHeight = mws_getBreakpoint(containerHeight);

        dataSrc = crop_image(dataSrc, requiredWidth, requiredHeight);
        el.removeAttribute('width');
        // el.removeAttribute('height');

        if (el instanceof HTMLImageElement)
            el.setAttribute('src', dataSrc);
        else
            el.style.backgroundImage = 'url('+ dataSrc +')';
    });
}

function mws_getBackgroundImage(el) {
    var style = el.currentStyle || window.getComputedStyle(el, false);
    return style.backgroundImage.slice(4, -1).replace(/"/g, "");
}

function mws_addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

// sets image width to 3px for initial load
function mws_resetImage(el, is_background_image = false) {
    var dataSrc = (is_background_image ? mws_getBackgroundImage(el) : (el.getAttribute('data-src') || el.getAttribute('src'))),
        src;
    switch (false) {
        case !/images.unsplash.com(.*)(&w=).*?(&|$)/.test(dataSrc):
            dataSrc = dataSrc.replace(/(&w=).*?(&|$)/, '$1' + 3 + '$2');
            dataSrc = dataSrc.replace(/(&h=).*?(&|$)/, '$2');
            dataSrc = dataSrc.replace(/(&fm=).*?(&|$)/, '$1webp$2');
            src = dataSrc; // set src to 3px
            break;
        case !/images.unsplash.com/.test(dataSrc):
            dataSrc = dataSrc + "&w=3"; // set src to 3px// set src to 3px
            src = dataSrc;
            break;
        case !/w_auto:breakpoints/.test(dataSrc):
            dataSrc = dataSrc.replace(/(,|\/)h_([_0-9]*)?/, ``); // remove height
            dataSrc = dataSrc.replace(/w_auto:breakpoints([_0-9]*)(:[0-9]+)?/, `w_auto:breakpoints$1:3`);
            src = dataSrc;
            break;
        case !/\/image\/upload\/v/.test(dataSrc): // no width is set
            src = dataSrc.replace(/\/upload\//, `\/upload\/w_3\/`);
            dataSrc = dataSrc.replace(/\/upload\//, `\/upload\/w_auto\/`);
            break;
        case !(match = /w_(:(\d+))?/.exec(dataSrc)):
            dataSrc = dataSrc.replace(/(,|\/)h_([_0-9]*)?/, ``); // remove height
            dataSrc = dataSrc.replace(/.jpg$/, `.webp`); // set webp
            dataSrc = dataSrc.replace(/.png$/, `.webp`); // set webp
            dataSrc = dataSrc.replace(/(,|\/)w_(.*?)(,|\/)/, `$1w_auto$3`);
            src = dataSrc.replace(/w_auto/, `w_3`); // set src to 3px
    }
    if (!src) return;

    if (is_background_image) {
        el.setAttribute('data-background-src', dataSrc);
        el.style.backgroundImage = 'url(' + src + ')';
    } else {
        mws_addClass(el, 'cld-responsive');
        el.setAttribute('data-src', dataSrc);
        el.setAttribute('src', src);
    }
}

function mws_resetImages() {
    // Reset all responsive images
    mws_forEachElement('img', function(el) {
        mws_resetImage(el);
    });
    // Reset all background images
    var tags = document.getElementsByTagName('*'),
        el;
    for (var i = 0, len = tags.length; i < len; i++) {
        el = tags[i];
        if (el.currentStyle) {
            if (el.currentStyle['backgroundImage'] !== 'none')
                mws_resetImage(el, true);
        } else if (window.getComputedStyle) {
            if (document.defaultView.getComputedStyle(el, null).getPropertyValue('background-image') !== 'none')
                mws_resetImage(el, true);
        }
    }
}

// crops unsplash and cloudinary images
function crop_image(url, width, height) {
    width = (width ? width : 100);
    height = (height ? height : false);
    switch (false) {
    case !/images.unsplash.com/.test(url):
	var urlParts = url.split("?");
	var qsParts = (urlParts[1] ? urlParts[1].split("&") : []);
	qsParts = qsParts.filter(function(list_item) {
	    if (list_item.indexOf("w=") == 0) return false;
	    if (list_item.indexOf("h=") == 0) return false;
	    if (list_item.indexOf("fm=") == 0) return false;
	    if (list_item.indexOf("fit=") == 0) return false;
	    return true;
	});
	qsParts.push("w=" + width);
	if (height) qsParts.push("h=" + height);
	qsParts.push("fm=webp");
	qsParts.push("fit=crop");
	url = urlParts[0] + "?" + qsParts.join("&");
        break;
    case !/res.cloudinary.com/.test(url):
        url = url.replace(/(.*)upload(.*)\/v(.*)/, "$1upload/w_" + width + (height ? ",h_" + height : "") + ",c_thumb/v$3");
        url = url.substr(0, url.lastIndexOf(".")) + ".webp";
        break;
    }
    return url;
}


(function() {
    mws_runResponsiveImages();
    window.onresize = mws_runResponsiveImages;
})();
