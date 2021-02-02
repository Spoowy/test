// Nitrogen Compatibility Layer

function unbase64(base64) {
    var binary_string = window.atob(base64);
    var len = binary_string.length;
    var bytes = new Uint8Array(len);
    for (var i = 0; i < len; i++) bytes[i] = binary_string.charCodeAt(i);
    return bytes.buffer;
}

// Nitrogen Compatibility Layer

function direct(term) { ws.send(enc(tuple(atom('direct'),term))); }
function validateSources(elements) {
    var ret = true;
    try {
	for (var i = 0; i < elements.length; i++)
	    if (querySourceRaw(elements[i]).length > 30000) {
		var className = 'is-loading';
		var el = qs('button[disabled].is-loading');
		if (el.classList) el.classList.remove(className);
		else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		el.disabled = false;
		toastr.error('Input '+ elements[i] +' exceeds max length of 30.000 chars.');
		ret = false;
	    }
    } catch (err) {}
    return ret; }
function querySourceRaw(Id) {
    var val, el = document.getElementById(Id);
    if (!el) {
       val = qs('input[name='+Id+']:checked'); val = val ? val.value : "";
    } else switch (el.tagName) {
        case 'FIELDSET':
            val = qs('[id="'+Id+'"]:checked'); val = val ? val.value : ""; break;
        case 'INPUT':
            switch (el.getAttribute("type")) {
                case 'radio': val = qs('input[name='+Id+']:checked'); val = val ? val.value : ""; break;
                case 'checkbox': val = qs('input[id='+Id+']:checked'); val = val ? val.value : ""; break;
                case 'date': val = Date.parse(el.value);  val = val && new Date(val) || ""; break;
                case 'calendar': val = pickers[el.id]._d || ""; break;
                case 'comboLookup':
                    var x = el.getAttribute('data-bind');
                    if (x) {
                        val = { 'text' : el.value, 'bind' : x};
                    } else {
                        val = el.value;
                    }
                    break;
                default: var edit = el.contentEditable;
                    if (edit && edit === 'true') val = el.innerHTML;
                    else val = el.value;
            }
            break;
        default:
            if (el.getAttribute('data-vector-input')) {
                val = querySourceRaw(el.children[1].id);
            } else if (el.getAttribute('data-sortable-list')) {
                val = getSortableValues('#' + el.id);
            } else if (el.contentEditable === 'true') {
                val = el.innerHTML;
            } else {
                val = el.value;
                switch (val) {
                    case "true": val = new Boolean(true); break;
                    case "false": val = new Boolean(false); break;
                }
            }
    }
    return val;
}

function querySourceConvert(qs) {
    if (qs && qs.text && qs.bind) {
        return dec(unbase64(qs.bind)); }
    else if (qs instanceof Date) {
        return tuple(number(qs.getFullYear()),
                     number(qs.getMonth() + 1),
                     number(qs.getDate())); }
    else if (qs instanceof Boolean) {
        return atom(qs.valueOf()); }
    else if (qs instanceof Array) {
        return list.apply(null, qs.map(querySourceConvert)); }
    else { return bin(qs); }
}

function querySource(Id) {
    var qs = querySourceRaw(Id);
    return querySourceConvert(qs);
}
