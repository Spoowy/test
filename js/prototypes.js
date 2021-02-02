(function() {
    yo_forEach(document.querySelectorAll('[editor-onclick]'), function(element) {
        yo_addEventListener(element, 'click', function(el) {
            // execute function xyz_request_input
            eval(element.getAttribute('editor-onclick')); }); }); })();

// Request input fun
function request_input(el, form, callback) {
    var object = {};
    try {object = JSON.parse(decodeURIComponent(escape(atob(el.getAttribute("data-stored-input"))))); }
    catch(e) { object = JSON.parse(el.getAttribute("data-stored-input")); }
    if (object) form.values = object;
    window.form_document = form;
    window.form_callback = callback;
    window.form_el = el;
    ws.send(enc(tuple(atom('client'), tuple(bin(JSON.stringify(form)))))); }

function yo_execute_callback(data) {
    window.form_el.setAttribute("data-stored-input", btoa(unescape(encodeURIComponent(JSON.stringify(data)))));
    window.form_callback(data); }

function yo_forEach(elements, fn) {
    for (var i = 0; i < elements.length; i++)
        fn(elements[i], i); }

function yo_addEventListener(el, eventName, handlerName) {
    if (el.addEventListener) el.addEventListener(eventName, handlerName, false);
    else if (el.attachEvent) el.attachEvent("on" + eventName, handlerName);
    else el["on" + eventName] = handlerName; }
