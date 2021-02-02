// closest
(function (ElementProto) {
    if (typeof ElementProto.matches !== 'function') {
	ElementProto.matches = ElementProto.msMatchesSelector || ElementProto.mozMatchesSelector || ElementProto.webkitMatchesSelector || function matches(selector) {
	    var element = this;
	    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
	    var index = 0;
	    
	    while (elements[index] && elements[index] !== element) {
		++index;
	    }
	    
	    return Boolean(elements[index]);
	};
    }
    
    if (typeof ElementProto.closest !== 'function') {
	ElementProto.closest = function closest(selector) {
	    var element = this;
	    
	    while (element && element.nodeType === 1) {
		if (element.matches(selector)) {
		    return element;
		}
		
		element = element.parentNode;
	    }
	    
	    return null;
	};
    }
})(window.Element.prototype);

// neccessary to make events work with dynamically replaced <script>
function mws_evalScripts(el) {
    if (!el) return false;
    var scripts = el.getElementsByTagName("script");
    Array.prototype.forEach.call(scripts, function(el, i){
	if (mws_hasClass(el, 'has-loaded')) return false;
	if (el.getAttribute('src')) {
	    var script = document.createElement('script');
	    script.async = false;
	    script.src = el.getAttribute('src');
	    document.head.appendChild(script);
	} else
            eval(el.innerHTML);
	mws_addClass(el, 'has-loaded');
    });
}

function mws_clickOnEnter(el, event) {
    if (event.keyCode === 13) {
	event.preventDefault();
	el.click();
    }
}

function mws_hasClass (el, className) {
    if (el.classList)
	return el.classList.contains(className);
    else
	return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function siblings(el) {
    return Array.prototype.filter.call(el.parentNode.children, function(child){
        return child !== el;
    });
}

function forEach(array, fn) {
    for (var i = 0; i < array.length; i++)
        fn(array[i], i);
}

function mws_forEach (array, fn) {forEach(array, fn)};

function mws_forEachElement (selector, fn) {forEachElement(selector, fn)}

function forEachElement(selector, fn) {
    var elements = document.querySelectorAll(selector);
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i);
}

function mws_remove(el) {
    if (el.length > 1)
	mws_forEach(el, function(el1) {mws_remove(el1);})
    else
	el.parentNode.removeChild(el);
}

function mws_removeEventListener(el, eventName, handler) {
    if (el.removeEventListener)
	el.removeEventListener(eventName, handler);
    else
	el.detachEvent('on' + eventName, handler);
}

function mws_addEventListener(el, eventName, handler) {
    try {
	if (el instanceof Element) {
	    if (el.addEventListener)
		el.addEventListener(eventName, handler);
	    else
		el.attachEvent('on' + eventName, function(){
		    handler.call(el);
		});
	    return true;
	}
	else if (el.prototype && el.prototype.isPrototypeOf(nodes) && el.length <= 0)
	    return false;
	// nodelist
	return forEachElement(el, function(el1) {
	    mws_addEventListener(el1, eventName, handler);
	});

    } catch (error) {console.log(error, "addEventListener", el)}
}

function mws_ready(fn) {
    if (document.readyState != 'loading'){
	fn();
    } else if (document.addEventListener) {
	document.addEventListener('DOMContentLoaded', fn);
    } else {
	document.attachEvent('onreadystatechange', function() {
	    if (document.readyState != 'loading')
		fn();
	});
    }
}

function indexOf(array, item) {
    for (var i = 0; i < array.length; i++) {
	if (array[i] === item)
	    return i;
    }
    return -1;
}

isArray = Array.isArray || function(arr) {
    return Object.prototype.toString.call(arr) == '[object Array]';
};

function mws_map(arr, fn) {
    var results = [];
    for (var i = 0; i < arr.length; i++)
	results.push(fn(arr[i], i));
    return results;
}

function mws_toggleClass (el, className) {
    if (!(el instanceof Element)) return false;
    if (el.classList) {
	el.classList.toggle(className);
    } else {
	var classes = el.className.split(' ');
	var existingIndex = -1;
	for (var i = classes.length; i--;) {
	    if (classes[i] === className)
		existingIndex = i;
	}
	
	if (existingIndex >= 0)
	    classes.splice(existingIndex, 1);
	else
	    classes.push(className);
	
	el.className = classes.join(' ');
    }
};

function mws_toggleVisibility(el) {
    el.style.display = el.style.display == "none" ? "block" : "none";
}

function qsa (handle) {
    return document.querySelectorAll(handle);
}

function mws_removeClass (el, className) {
    try {
	if (el.classList)
	    el.classList.remove(className);
	else
	    el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');	
    } catch (err) {}
};

function rmc (el, className) {return mws_removeClass(el, className)};

function mws_addClass (el, className) {
    if (el.classList) {
	el.classList.add(className);
    } else {
	var current = el.className, found = false;
	var all = current.split(' ');
	for(var i=0; i<all.length, !found; i++) found = all[i] === className;
	if(!found) {
	    if(current === '') el.className = className;
	    else el.className += ' ' + className;
	}
    }
}

// observe dom

var mws_observeDOM = (function(){
    var MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

    return function( obj, callback ){
	if( !obj || !obj.nodeType === 1 ) return; // validation

	if( MutationObserver ){
	    // define a new observer
	    var obs = new MutationObserver(function(mutations, observer){
		callback(mutations);
	    })
	    // have the observer observe foo for changes in children
	    obs.observe( obj, { childList:true, subtree:true });
	}
	
	else if( window.addEventListener ){
	    obj.addEventListener('DOMNodeInserted', callback, false);
	    obj.addEventListener('DOMNodeRemoved', callback, false);
	}
    }
})();


function fallbackCopyTextToClipboard(text) {
  var textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.style.position="fixed";  //avoid scrolling to bottom
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Fallback: Copying text command was ' + msg);
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err);
  }

  document.body.removeChild(textArea);
}
function copy_text_to_clipboard(text, message) {
    if (!navigator.clipboard) {
	fallbackCopyTextToClipboard(text);
    return;
  }
    navigator.clipboard.writeText(text).then(function() {
	try {
	    notyf.success((message ? message : "Copied!"));
	}catch(error) { console.log("err", error);};
  }, function(err) {
    console.error('Async: Could not copy text: ', err);
  });
}

// crops unsplash and cloudinary images
function mws_crop_image(url, width, height) {
    width = (width ? width : 100);
    height = (height ? height : false);
    switch (false) {
    case !/images.unsplash.com/.test(url):
        url = url.split(/[?#]/)[0] + "?fm=webp&fit=crop";
        url += "&w=" + width + (height ? "&h=" + height : "");
        break;
    case !/res.cloudinary.com/.test(url):
        url = url.replace(/(.*)upload(.*)\/v(.*)/, "$1upload/w_" + width + (height ? ",h_" + height : "") + ",c_thumb/v$3");
        url = url.substr(0, url.lastIndexOf(".")) + ".webp";
        break;
    }
    return url;
}

function mws_new_window(Url) {
    window.open(Url, '_blank', "shilpijain", "modal=no");
    window.focus();
}
function mws_new_tab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}
