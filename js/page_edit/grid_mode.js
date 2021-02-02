var $handler = null;
$(document).ready(function() {
    // iframe and editor load and operate under this same file
    if (window.editor) return false;
    make_sections_resizable();
    $(document).on('click', '#edit > section:not([global_section]) *', margin_tool_handle_dom_click);
});

function toggle_grid_mode() {
    if (!window.grid_mode)
	enter_grid_mode();
    else
	exit_grid_mode()
}

function enter_grid_mode() {
    window.grid_mode = true;
    mws_addClass(qi('edit'), 'grid-mode');
    qi('grid-mode-icon').style.display = 'none';
    qi('grid-mode-active-icon').style.display = 'block';
    qi('grid-nav').style.display = 'block';
    qi('mws-section-controls').style.display = 'none';
    qi('mws-add-button-wrap').style.display = 'none';
    destroy_all_froala_instances();
    clean_sections_from_editor_tools();

    // create iframe
    var ifrmDom = qi('grid-view'),
	ifrm = (ifrmDom.contentWindow) ? ifrmDom.contentWindow : (ifrmDom.contentDocument.document) ? ifrmDom.contentDocument.document : ifrmDom.contentDocument,
	scripts = '',
	styles = '',
	scriptDoms = qsa('head script:not(#editor_var)'),
	styleDoms = qsa('head link');
    ifrmDom.style = 'width:100%; height: 100%; margin-left: auto; margin-right: auto; display: block; background: #fff;';
    ifrm.document.open();
    for (i=0;i<scriptDoms.length;i++) scripts += scriptDoms[i].outerHTML;
    for (i=0;i<styleDoms.length;i++) styles += styleDoms[i].outerHTML;
    var html = scripts + styles + '<div id="edit" class="grid-mode">' + qi('edit').innerHTML + '</div>';
    ifrm.document.write(html);
    ifrm.document.close();
    qi('edit').style.display = 'none';
}

function exit_grid_mode() {
    window.grid_mode = false;
    mws_removeClass(qi('edit'), 'grid-mode');
    qi('grid-mode-icon').style.display = 'block';
    qi('grid-mode-active-icon').style.display = 'none';
    qi('grid-nav').style.display = 'none';
    qi('mws-section-controls').style.display = '';
    qi('mws-add-button-wrap').style.display = '';
    var ifrmDom = qi('grid-view'),
	ifrm = (ifrmDom.contentWindow) ? ifrmDom.contentWindow : (ifrmDom.contentDocument.document) ? ifrmDom.contentDocument.document : ifrmDom.contentDocument;
    var html = ifrm.document.getElementById('edit').innerHTML;
    ifrm.document.close();
    ifrmDom.src = 'about:blank';
    qi('edit').innerHTML = html;
    qi('edit').style.display = '';
    ifrmDom.style.display = 'none';
    
    //make_sections_unresizable();
    reload_sections();
}

function change_grid_view(el, view) {
    window.view = view;
    mws_removeClass(qs('#grid-nav button.active'), 'active');
    mws_addClass(el, 'active');
    var width = (view == 'mobile' ? '400' : (view == 'tablet' ? '767' : '100%'));
    qi('grid-view').style.width = width;
}

/* section resizing */

// handle click on main dom element (not DOM that is part of margin tool)
function margin_tool_handle_dom_click (e) {
    if ($(e.target).hasClass('mws-margin-active')) return false;
    margin_tool_destroy('.mws-margin-active');
    // initiate
    // wrap in divs
    $(e.target).wrap('<div class="mws-margin-wrap"><div class="mws-margin-element"></div></div>');
    // add resizer div
    $(e.target).parent().parent().append('<div class="mws-margin-resizer"><div class="mtop"><i></i></div><div class="mbottom"><i></i></div><div class="mleft"><i></i></div><div class="mright"><i></i></div></div>');
    // init values
    $handler = $(e.target);
    $handler.data("start-margin-top", parseInt($(e.target).css('marginTop')));
    $handler.data("start-margin-bottom", parseInt($(e.target).css('marginBottom')));
    $handler.data("start-margin-left", parseInt($(e.target).css('marginLeft')));
    $handler.data("start-margin-right", parseInt($(e.target).css('marginRight')));
    $handler.data("start-x", parseInt(e.pageX));
    $handler.data("start-y", parseInt(e.pageY));
    margin_tool_size_indicator_update();
    // on click of resizer resize
    $(e.target).addClass('mws-margin-active');
    // set handlers to margin helpers
    var resizer = $('.mws-margin-resizer', $(e.target).parent().parent());
    $('i', resizer).on('mousedown', margin_tool_mouse_down_handler);
}

function margin_tool_mouse_down_handler (e) {
    // set i-element class (mtop, mbottom etc. to active)
    $handler.data("active", $(e.target).parent().attr('class'));
    $(document).on('mousemove', margin_tool_mouse_move_handler);
    $(document).on('mouseup', margin_tool_mouse_up_handler);
}

function margin_tool_mouse_up_handler(e) {
    // stop doing things
    try {
	$handler.data("start-margin-top", parseInt($(e.target).css('marginTop')));
	$handler.data("start-margin-bottom", parseInt($(e.target).css('marginBottom')));
	$handler.data("start-margin-left", parseInt($(e.target).css('marginLeft')));
	$handler.data("start-margin-right", parseInt($(e.target).css('marginRight')));
	$handler.data("active", false);
    } catch (err) {}
    margin_tool_destroy('.mws-margin-active');
    $handler = false;
}

function margin_tool_mouse_move_handler(e) {
    e.preventDefault();
    if ($handler && $handler.data("active")) {
	var active = $handler.data("active");
	var position = active.substr(1); // mtop, mbottom, mright, mleft
	var pos = (position == "top" || position == "bottom" ? "y" : "x");
	var margin = '';
	// THE ACT
	if (position == "right")
	    margin = $handler.data("start-margin-" + position) + ($handler.data("start-" + pos) - e["page" + pos.toUpperCase()]);
	else
	    margin = $handler.data("start-margin-" + position) - ($handler.data("start-" + pos) - e["page" + pos.toUpperCase()]);
	
	// set css for html (each as a style rule)
	var autoId = '';
	if ($handler.attr('mws-margin-auto-id')) 
	    autoId = $handler.attr('mws-margin-auto-id');
	else { 
	    autoId = margin_tool_make_id(32); 
	    $handler.attr('mws-margin-auto-id', autoId); 
	}
	var view = window.view;
	if (!view) view = (window.innerWidth < 600 ? 'mobile' : (window.innerWidth < 768 ? 'tablet' : 'desktop'));
	var styleId = autoId + '-' + position + '-' + view;
	if ($('style#' + styleId).length <= 0) $handler.parent().parent().after('<style id="' + styleId + '"></style>');
	var css = '';
	// prepend media query
	if (view == 'mobile') // mobile, tablet, desktop
	    css += "@media only screen and (max-width: 600px) {";
	else if (view == 'tablet')
	    css += "@media only screen and (min-width: 600px) and (max-width: 767px) {";
	else
	    css += "@media only screen and (min-width: 768px) {";
	css += '[mws-margin-auto-id="'+ autoId +'"] {margin-' + position + ':' + margin + 'px !important;}';
	css += '}';
	$('#' + styleId).html(css);
	margin_tool_size_indicator_update();
    }
}

// update the indicators (margin overlays)
function margin_tool_size_indicator_update () {
    var resizer = $('.mws-margin-resizer', $handler.parent().parent());
    // top
    $('.mtop i').text($handler.css("marginTop"));
    $('.mtop i').css({height: $handler.css("marginTop"), width: parseInt($handler.parent().width()) + 40 + "px", "margin-left": "-20px"});
    // bottom
    $('.mbottom i').text($handler.css("marginBottom"));
    $('.mbottom i').css({height: $handler.css("marginBottom"), width: parseInt($handler.parent().width() + 40 + "px"),"margin-left": "-20px"});
    // right
    $('.mright i').text($handler.css("marginRight"));
    if (parseInt($handler.css("marginRight")) < 0) $('.mright i', resizer).css({left: "0", right: "auto",width: - parseInt($handler.css("marginRight")) + 20 + "px"});
    else $('.mright i', resizer).css({left: "auto", right: "-20px",width: parseInt($handler.css("marginRight")) + 20 + "px"});
    // left
    $('.mleft i').text($handler.css("marginLeft")); 
    if (parseInt($handler.css("marginLeft")) < 0) $('.mleft i', resizer).css({left: "auto", right: "0",width: - parseInt($handler.css("marginLeft")) + 20 + "px"});
    else $('.mleft i', resizer).css({left: "-20px", right: "auto",width: parseInt($handler.css("marginLeft")) + 20 + "px"});
}

// destroys margin tool
function margin_tool_destroy(wrap) {
    if ($(wrap).length > 1) return $(wrap).each(function(el) { margin_tool_destroy(el);});
    if ($(wrap).hasClass('mws-margin-resizer')) wrap = $(wrap).parent();
    if ($(wrap).hasClass('mws-margin-active')) wrap = $(wrap).parent().parent();
    $('.mws-margin-resizer', wrap).remove();
    $('.mws-margin-active', wrap).unwrap().unwrap().removeClass('mws-margin-active');
}

function margin_tool_make_id (length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ )
	result += characters.charAt(Math.floor(Math.random() * charactersLength));
    return result;
}

function make_sections_resizable() {
    var sections = qsa('#edit > section:not([global_section])');
    for (i = 0; i < sections.length; i++) make_section_resizable(sections[i]);
}

function make_section_resizable(el) {
    // make resizeable
    $(el).resizable({
        handles: 's',
        resize: function(event, ui) {
            refreshPosition();
        },
        minHeight: $('> .mws-content', this).height(),
        stop: function(event, ui) {
            var padding = (ui.size.height - $('> .mws-content', ui.element).height()) / 2;
	    if (padding <= 0) padding = 0;
            $(ui.element).css({"height": "auto"});
            $('> .mws-content', ui.element).css({
                "height": "auto",
                "min-height": "auto",
                "padding-top": padding,
                "padding-bottom": padding
            });
            refreshPosition();
        }
    });
    // make sub-items resizable
    $('.mws-margin', el).on('mouseover', function(tg) {
	if ($(tg.target).hasClass("mws-margin"))
	    $(tg.target).resizable({
		handles: "n, e, s, w",
		resize: function(event, ui) {
		    $(tg.target).css({width: "auto",height: "auto",left: "auto",top: "auto" });
		    if ($(this).data('ui-resizable').axis == "o")
			$(tg.target).css({"padding-right": (ui.size.width - $(ui.element).width()) + "px"});
		    if ($(this).data('ui-resizable').axis == "s")
			$(tg.target).css({"padding-bottom": (ui.size.height - $(ui.element).height()) + "px"});
		    if ($(this).data('ui-resizable').axis == "w")
			$(tg.target).css({"padding-left": (ui.size.width - $(ui.element).width()) + "px"});
		    if ($(this).data('ui-resizable').axis == "n")
			$(tg.target).css({"padding-top": (ui.size.height - $(ui.element).height()) + "px"});
		},
		stop: function(event, ui) {
		    $(tg.target).css({width: "auto",height: "auto",left: "auto",top: "auto" });
		    if ($(this).data('ui-resizable').axis == "o")
			$(tg.target).css({"padding-right": (ui.size.width - $(ui.element).width()) + "px"});
		    if ($(this).data('ui-resizable').axis == "s")
			$(tg.target).css({"padding-bottom": (ui.size.height - $(ui.element).height()) + "px"});
		    if ($(this).data('ui-resizable').axis == "w")
			$(tg.target).css({"padding-left": (ui.size.width - $(ui.element).width()) + "px"});
		    if ($(this).data('ui-resizable').axis == "n")
			$(tg.target).css({"padding-top": (ui.size.height - $(ui.element).height()) + "px"});
		    $(tg.target).resizable("destroy");
		},
		classes: {"ui-resizable-se": ""}
	    });
    });
}

function make_sections_unresizable () {
    var sections = qsa('#edit > section.ui-resizable');
    for (i = 0; i < sections.length; i++) try {make_section_unresizable(sections[i])} catch (err) {console.log(err);};
}

function make_section_unresizable (section) {
    // destroy resizeable
    $(section).resizable("destroy");
}
