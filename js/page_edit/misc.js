// MISC
function makeid() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 5; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
}

function addClass(el, className) {
    if (el.classList)
        el.classList.add(className);
    else
        el.className += ' ' + className;
}

function hasClass(el, className) {
    if (el.classList)
        return el.classList.contains(className);
    else
        return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
}

function removeClass(el, className) {
    if (el.classList)
        el.classList.remove(className);
    else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
}

function clearClasses(classes) {
    forEach(classes, function(className) {
        forEachElement('.' + className, function(el) {
            mws_removeClass(el, className);
        });
    });
}

function insertAfter(referenceNode, el) {
    referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);
}

function insertBefore(referenceNode, el) {
    referenceNode.parentNode.insertBefore(el, referenceNode);
}

function forEach(elements, fn) {
    if (elements !== undefined)
        for (var i = 0; i < elements.length; i++)
            fn(elements[i], i);
}

function mws_addEventListener(el, eventName, handlerName) {
    if (el.addEventListener) el.addEventListener(eventName, handlerName, false);
    else if (el.attachEvent) el.attachEvent("on" + eventName, handlerName);
    else el["on" + eventName] = handlerName;
}

function contains(el, selector) {
    if (isElement(selector))
        return el !== selector && el.contains(selector);
    return el.querySelector(selector) !== null;
}

function isElement(obj) {
    try {
        //Using W3 DOM2 (works for FF, Opera and Chrome)
        return obj instanceof HTMLElement;
    } catch (e) {
        //Browsers not supporting W3 DOM2 don't have HTMLElement and
        //an exception is thrown and we end up here. Testing some
        //properties that all elements have (works on IE7)
        return (typeof obj === "object") &&
            (obj.nodeType === 1) && (typeof obj.style === "object") &&
            (typeof obj.ownerDocument === "object");
    }
}

function arrayFilter(array, predicate) {
    var index = -1,
        length = array == null ? 0 : array.length,
        resIndex = 0,
        result = [];

    while (++index < length) {
        var value = array[index];
        if (predicate(value, index, array)) {
            result[resIndex++] = value;
        }
    }
    return result;
}

function arrayRemove(array, el) {
    var index = array.indexOf(el);
    if (index > -1)
        array.splice(index, 1);
    return array;
}

function deleteElements(list) {
    forEach(list, function(q) {
        var elements = document.querySelectorAll(q);
        forEach(elements, function(el) {
            el.parentNode.removeChild(el);
        });
    });
}

function replaceWithContents(list) {
    forEach(list, function(q) {
        var elements = document.querySelectorAll(q);
        //console.log("contents query", q);
        //console.log("elements", elements);
        forEach(elements, function(el) {
            el.parentNode.insertBefore(el.firstChild, el.nextSibling);
            el.parentNode.removeChild(el);
            // el.outerHTML = el.innerHTML;
        });
    });
}

// prevSibling can include text nodes
function previousElementSibling(el) {
    do { el = el.previousSibling; } while ( el && el.nodeType !== 1 );
    return el;
}

// nextSibling can include text nodes
function nextElementSibling(el) {
    do { el = el.nextSibling; } while ( el && el.nodeType !== 1 );
    return el;
}

function loading_gif() {
    return '<img src="https://res.cloudinary.com/dlgtwbxmg/image/upload/v1534521527/Ellipsis-1s-200px.gif" height="30" style="margin: 20px auto;">';
}

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    if (rgb) return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function isMwsSection(el) {
    return el.tagName === 'SECTION' && (el.getAttribute('section') != undefined || el.getAttribute('global_section') != undefined);
}
