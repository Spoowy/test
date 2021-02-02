/* dev_inline_editor */
"use strict";

function init_file_list() {
    // var files_list is populated before load
    // initialize
    // TODO: WS.send file
    new autoComplete({
	selector: 'input[name="file"]',
	minChars: 2,
	source: function(term, suggest) {
            term = term.toLowerCase();
            var choices = files_list;
            var matches = [];
            for (i=0; i<choices.length; i++)
		if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
            suggest(matches);
	},
	onSelect: function(event, term, item) {
	    qi('select_file').click();
	    setTimeout(function() {
		window.editor.focus();
	    }, 400);
	}
    });
}

window.addEventListener("load", init_file_list);

// window.editor is accessible. 
function init_monaco_editor() {
    init_hotkeys();
    if (window.editor) {
	if (window.editor.getModel())
	    window.editor.getModel().dispose();
	window.editor.dispose();
    }
    window.editor = null;
    
    var content = (qi('file_contents') ? qi('file_contents').value : "content");
    var el = qi('monaco_editor');
    el.style.height = 'calc(100vh - 50px)';
    el.style.width = '500px';
    
    require(['vs/editor/editor.main'], function () {
	
	var modesIds = monaco.languages.getLanguages().map(function(lang) { return lang.id; });
	
	window.editor = monaco.editor.create(el, {
	    theme: 'vs-dark',
	    model: monaco.editor.createModel(content, get_language()),
	    background: '#344258'
	});
	
	window.editor.layout();
	
	// if (window.editor.model)
	window.editor.getModel().onDidChangeContent(function() {
	    console.log("change event");
	    onchange_monaco_editor();
	});
	
	window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_X, function() {});
	window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_F, function() {
	    focus_files_query(); return false;
	});
	window.editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.KEY_S, function() {
	    //save_monaco_editor();
	    search_monaco_editor(); return false;
	});
    });
};

window.addEventListener("load", init_monaco_editor);

// trigger save button click
function save_monaco_editor() {
    var content = window.editor.getValue();
    qi('file_contents').value = content;
    qi('save_file').click();
}

// updates css on change
function onchange_monaco_editor() {
    var file = qi('file').value;
    if (file.indexOf('.css') <= 0 && file.indexOf('.map') == -1)
	return false;
    
    var content = window.editor.getValue();
    
    if (!qi(file)) {
	var style = document.createElement('style');
	style.id = file;
	document.body.appendChild(style);
    }
    qi(file).innerHTML = content;
}

// minimize / show monaco editor
function toggle_monaco_editor() {
    qi('dev_inline_editor').classList.toggle('dev_hidden');
}

function search_monaco_editor() {
    window.editor.trigger('', 'actions.find');
}

// open editor and focus input to search files
function focus_files_query() {
    qi('dev_inline_editor').classList.remove('dev_hidden');
    qs('body').style['marginRight'] = '520px';
    qi('file').select();
}

// init the hotkeys for saving
function init_hotkeys() {
    hotkeys('ctrl+f,ctrl+x+k,ctrl+x+s,ctrl+s,ctrl+e,ctrl+a', function (event, handler){
	switch (handler.key) {
	    // search
	case 'ctrl+f':
	    focus_files_query();
	    break;
	case 'ctrl+x+k':
	    toggle_monaco_editor();
	    return false;
	    break;
	case 'down':
	    console.log(event.target);
	    break;
	case 'ctrl+o':
	    alert('you pressed ctrl+o!');
	    return false;
	    break;
	    // save
	case 'ctrl+x+s':
	    save_monaco_editor();
	    return false;
	    break;
	    // search
	case 'ctrl+s':
	    search_monaco_editor();
	    return false;
	    break;
	case 'ctrl+e':
	    return false;
	    break;
	case 'ctrl+a':
	    return false;
	    break;
	default: alert(event);
	}
    });
}

function extension(filename) {
    var re = /(?:\.([^.]+))?$/;
    return re.exec(filename)[1];
}

function language(file) {
    var fileTypes = {
	css: 'css',
	js: 'javascript',
	json: 'json',
	md: 'markdown',
	mjs: 'javascript',
	ts: 'typescript'};
    
    return fileTypes[extension(file)];
}

function get_language() {
    var selected_file = qi('file');
    if (!selected_file)
	return 'css';
    return language(selected_file.value);
}
