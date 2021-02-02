/* ==========================================================================
Section-related JavaScript functions
========================================================================== */

/***
TABLE OF CONTENTS
=============================================================================
0. refreshPosition fun
1. Add / Move / Duplicate / Delete section
2. Section Settings
3. Update Section
=============================================================================
***/


/* ==========================================================================
0. Init fun
========================================================================== */

$(document).on('scroll', () => {
    $(document).trigger('section.scroll');
});

// init
$(document).on('mouseenter', '#edit > section', (e) => {
    if ($(e.currentTarget).not(".mws-placeholder-section") && !$(e.currentTarget).hasClass('mws-hover'))
        $(document).trigger('section.hover', e);
});

function clean_sections_from_editor_tools() {
    // Clean up sections
    try {
	var stage = document.getElementById('edit');
	forEach(stage.children, function(section) {
            // clean up global section
            if (section.getAttribute('global_section') != undefined && !window.global_section_editor) {
		section.removeAttribute("class");
		section.removeAttribute("style");
		section.querySelector("iframe").removeAttribute("height");
            }
	});
	clearClasses(['mws-initiated', 'mws-hover', 'mws-active', 'mws-settings-active', 'maypower-theme', 'fr-draggable', 'fr-box', 'fr-inline', 'ui-resizable']);
	deleteElements(['.mws-settings-panel', '[section=mws-placeholder]', '.ui-resizable-handle', '.fr-table-resizer', '.fr-image-resizer', '.fr-quick-insert', '.fr-floating-btn', '.fr-code', '.CodeMirror', '.fr-command']);
	replaceWithContents(['.fr-wrapper', '.fr-element']);
    } catch (error) {console.log(error)}
}

$(document).on('section.scroll', function() {
    if (window.grid_mode) return false;
    var target = ($('.mws-hover') ? $('.mws-hover') : $('#edit > section:first-of-type'));
    var targetTop = (target.position() ? target.position().top : 0);
    var controls = $('#mws-section-controls');

    // Set controls top position
    var top = targetTop - $(window).scrollTop();

    // Not sure if this is neccessary
    if (top < 0)
        top = 0;

    controls.css('top', top);

    // Position add section button
    $('.mws-add-button-wrap').css('top', (targetTop - $(window).scrollTop()) + target.height() - 20);

});

$(document).on('section.hover', function(event, e) {
    if (window.grid_mode) return false;
    var target = (e === undefined ? $('#edit > section:not(#mws-placeholder)').first() : $(e.currentTarget));
    var targetTop = (target.position() ? target.position().top : 0);
    var controls = $('#mws-section-controls');

    // Transition hover class
    $('.mws-hover').removeClass('mws-hover');
    target.addClass('mws-hover');

    // Hide buttons from global section
    if (!window.global_section_editor) {
	if (target.attr('global_section') != undefined) $('.mws-button.mws-settings').parent().hide();
	else $('.mws-button.mws-settings').parent().show();
    }

    // Show product url
    if (target.find('.mws-product-url').length) $('#mws-section-controls .mws-product').parent().show();
    else $('#mws-section-controls .mws-product').parent().hide();

    // Hide controls from placeholder
    if (target.is("#mws-placeholder") || $('#edit > section.mws-settings-active').length > 0) controls.hide();
    else controls.show();

    // Hide dropdowns
    section_settings_dropdown_hide();

    $(document).trigger('section.scroll');
});

$(document).on('section.active', function(event, target) {
    // transition active classe
    $('section.mws-active').removeClass('mws-active');
    $(target).addClass('mws-active');
    $('#mws-section-controls').show();
});

function refreshPosition() {
    if (window.grid_mode) return false;
    var target = $('.mws-active');
    var hoverSection = $('.mws-hover');
    // First section if there is no target
    if (!target.length) {
        $('#edit > section:first-of-type').addClass('mws-active');
        target = $('.mws-active');
    };
    if (!hoverSection.length) {
        hoverSection = $('#edit > section:first-of-type');
        hoverSection.addClass('mws-hover');
    }
    $(document).trigger('section.scroll');
    setTimeout(function() {
	$(document).trigger('section.scroll');
    }, 10);
    // if ($('#edit > section:first-of-type').hasClass('mws-active')) {
    //     controls.addClass('mws-first-element');
    // } else {
    //     controls.removeClass('mws-first-element');
    // }
    // settings panel
    // settingsActiveSection = $('.mws-settings-active');
    // if (settingsActiveSection.length > 0) {
    //     if (settingsActiveSection.position()) {
    //         settingsPanelTop = settingsActiveSection.position().top - $(window).scrollTop();
    //         if ((settingsPanelTop < defaultPosition) && ($(window).scrollTop() < (settingsActiveSection.position().top + settingsActiveSection.height() - 48))) {
    //             settingsPanelTop = defaultPosition; }
    //         return settingsPanel.css('top', settingsPanelTop); }
    // }
};

// TODO: Check if this handels nested instances
function get_active_editor_instance() {
    var editorInstance = undefined;
    var activeSection = document.querySelector('#edit > .mws-active');
    forEach(window.froalaInstances, function(instance) {
        if (instance.selection.inEditor())
            editorInstance = instance;
        else if (instance.image && instance.image.get())
            editorInstance = instance;
        else if (contains(activeSection, instance.el))
            editorInstance = instance;
    });
    return editorInstance;
}

function get_active_editor_instances() {
    var editorInstances = [];
    var activeSection = document.querySelector('#edit > .mws-active');
    forEach(window.froalaInstances, function(instance) {
        if (instance.selection.inEditor())
            editorInstances.push(instance);
        else if (instance.image && instance.image.get())
            editorInstances.push(instance);
        else if (contains(activeSection, instance.el))
            editorInstances.push(instance);
    });
    return editorInstances;
}

function get_editor_instances(section) {
    if (typeof section === 'string' || section instanceof String)
        section = document.querySelector('[section=' + section + ']');
    var editorInstances = [];
    forEach(window.froalaInstances, function(instance) {
        if (contains(section, instance.el))
            editorInstances.push(instance);
        // if is child of div id
    });
    return editorInstances;
}

/* ==========================================================================
1. Add / Move / Duplicate / Delete section
========================================================================== */

// Add
function open_add_section(e) {
    var Body,
        randomId;
    randomId = Math.random().toString(36).substring(7);
    Body = '<div class="mws-add-section" id="' + randomId + '">' +
        '<button onclick="close_add_section(this);">close</button>' +
        '<div>' + loading_gif() + '</div>' + '</div>';
    $('.mws-hover').after(Body);
    if (ws !== null) {
        return ws.send(enc(tuple(atom("client"), tuple(atom("open_add_section"), bin(randomId)))));
    }
};
function close_add_section(e) {
    $(e).remove();
    $('.mws-add-section').remove();
};
function close_add_section_window(e) {
    $('#' + e).remove();
    return $('#mws-add-button').show();
};
function open_add_section_category(e) {
    var categoryId,
        addSection,
        addSectionId;
    categoryId = $(e).attr('data-id');
    addSection = $(e).parent().parent().parent().parent();
    addSection.find(".columns").html('<div class="text-message">' + loading_gif() + '</div>');
    addSectionId = addSection.attr("id");
    $(e).parent().parent().find('.active').removeClass("active");
    $(e).parent().addClass("active");
    if (ws !== null) {
        return ws.send(enc(tuple(atom("client"), tuple(atom("open_add_section_category"), bin(categoryId), bin(addSectionId)))));
    }
};
function add_section(e) {
    var insertBeforeElement,
        randomId,
        sectionName;
    sectionName = e.id;
    randomId = "add-section-" + Math.random().toString(36).substring(7);
    insertBeforeElement = $(e).parent().parent().parent().attr('id', randomId);
    if (ws !== null) {
        return ws.send(enc(tuple(atom("client"), tuple(atom("add_section"), bin(sectionName), bin(randomId)))));
    }
};

function nextSection(el) {
    do { el = el.nextSibling; }
    while (el && (el.nodeType !== 1 || !(el.tagName === 'SECTION' && (el.getAttribute('section') != undefined || el.getAttribute('global_section') != undefined))));
    return el;
}

function previousSection(el) {
    do { el = el.previousSibling; }
    while (el && (el.nodeType !== 1 || !(el.tagName === 'SECTION' && (el.getAttribute('section') != undefined || el.getAttribute('global_section') != undefined))));
    return el;
}

// Move
function moveDownSection(e) {
    return moveSection(document.querySelector('#edit > .mws-active'), 'down');
};
function moveUpSection(e) {
    return moveSection(document.querySelector('#edit > .mws-active'), 'up');
};
function moveSection(target, direction) {
    var clone,
        next,
        prev,
        top;
    prev = previousSection(target);
    next = nextSection(target);
    if (!isMwsSection(target)) return false;
    if (direction == 'up' && !isMwsSection(prev)) return false;
    if (direction == 'down' && !isMwsSection(next)) return false;

    // 1. Get active section
    removeClass(target, "mws-initiated");
    var instances = get_editor_instances(target);
    // 2. Disable the editors
    forEach(instances, function(instance) {
        instance.destroy();
    });
    // 3. Clone and Re-init later
    clone = target.cloneNode(true);
    if (direction === 'up') insertBefore(prev, clone);
    if (direction === 'down') insertAfter(next, clone);
    // remove original section
    target.parentNode.removeChild(target);
    // reinit
    init_froala(clone);

    // scroll
    top = clone.getBoundingClientRect().top;
    if ((top - 10) > 0) top = top - 20;
    $("html, body").animate({
        scrollTop: top
    }, 600);
    return refreshPosition();
};

// Duplicate
function duplicateSection(e) {
    var stage = qi('stage');
    var clone = $('.mws-active').clone();
    var top = clone.position().top;

    clone.insertAfter(".mws-active");
    
    destroy_all_froala_instances();
    clean_sections_from_editor_tools();
    reload_sections();

    if ((top - 10) > 0) top = top - 20;
    $("html, body").animate({scrollTop: top}, 600);
};

// Delete
function deleteSection(e) {
    var result,
        target;
    target = $('#edit > .mws-active');
    console.log("target", target);
    result = confirm("Do you really want to delete this section?");
    if (result) {
        target.remove();
        reload_sections();
    }
};

// Make hovered section active
function activate_hovered_section() {
    $(document).trigger('section.active', $('section.mws-hover'));
}

/* ==========================================================================
2. Section Settings
========================================================================== */

// triggered onclick
function section_settings_open(e) {
    var target = $('.mws-active');
    if (!target.hasClass("mws-settings-active")) {
        // Close all other settings panels
        section_settings_close();
        section_settings_init(target);
    } else {
        return section_settings_close(e);
    }
};
function section_settings_close() {
    $('.mws-settings-active').removeClass('mws-settings-active');
    $('.mws-settings-panel').remove();
    // Show controls
    $('#mws-section-controls').show();
    if (!window.global_section_editor)
	$('.mws-add-button-wrap').show();
    // Reposition
    $(document).trigger('section.scroll');
};

// Init values on open
function section_settings_init(target) {
    // Get html dom
    var html = section_settings_panel_html(target);
    target.addClass("mws-settings-active");
    target.before(html);
    // Hide controls
    $('#mws-section-controls').hide();
    $('.mws-add-button-wrap').hide();
    // Text Color
    var elColor = document.getElementById('section-settings-color');
    console.log("color", rgb2hex(target.css('color')));
    console.log("bgcolor", rgb2hex($('.mws-overlay', target).css('backgroundColor')));
    if (rgb2hex(target.css('color')))
        $('#section-settings-color').val(rgb2hex(target.css('color')));
    // Background Color
    if (rgb2hex($('.mws-overlay', target).css('backgroundColor')))
        $('#section-settings-color-background').val(rgb2hex($('.mws-overlay', target).css('backgroundColor')));
    // Transparency
    var transparency = $('.mws-settings-active .mws-overlay').css('opacity') * 100;
    $("#section-settings-background-transparency").val(transparency);
    // Background image
    section_settings_image_icon_update();
    // Stretch
    /*if (target.attr("data-background-stretch") == "cover") {
        $('#section-background-image-stretch').attr('checked', 'checked');
    }*/
    // Blur
    if (target.css('background-image').indexOf("e_blur:") != -1 || target.css('background-image').indexOf("blur=") != -1) {
        $('#section-background-image-blur').attr('checked', 'checked');
        $('#section-background-image-blur').parent().parent().parent().show();
    }
    // Parallax
    if (target.attr("data-background-parallax") == "parallax") {
        $('#section-background-image-parallax').attr('checked', 'checked');
    }
    // Position
    if (target.attr('data-background-align')) {
        var pos = $('input[name=section-settings-background-position][value='+ target.attr('data-background-align') +']', '#mws-positioning-form').attr('checked', 'checked');
    }
    section_settings_update();
    // FadeIn
    $('.mws-settings-panel').fadeIn();
}

// Generate settings panel
function section_settings_panel_html(target) {
    return '<div class="mws-settings-panel" style="display: none;">' +
        '<div class="mws-settings-panel-inner">' +
        '<div class="mws-settings-panel-head">' +
        '<span onclick="section_settings_close();" id="mws-settings-close"><i class="fas fa-chevron-left" id="mws-settings-close-icon"></i></span> Section Style' +
        '</div>' +
        '<div class="mws-settings-panel-content">' +
        '<ul>' +
        '<li class="section-background-image">' +
        '<div id="mws-section-image-icon-holder">' +
        section_settings_panel_image_html(target) +
        '</div>' +
        'Background image' +
        '</li>' +
        /*'<li>' +
        '<div class="switch">' +
        '<label>' +
        '<input id="section-background-image-stretch" onchange="section_settings_update();" type="checkbox">' +
        '<span class="lever"></span>' +
        '</label>' +
        '</div>' +
        'Stretch to fill</li>' +*/
        '<li>' +
        '<div class="switch">' +
        '<label>' +
        '<input id="section-background-image-blur" onchange="section_settings_update();" type="checkbox">' +
        '<span class="lever"></span>' +
        '</label>' +
        '</div>' +
        'Blur</li>' +
        '<li>' +
        '<div class="switch">' +
        '<label>' +
        '<input id="section-settings-background-parallax" onchange="section_settings_update();" type="checkbox">' +
        '<span class="lever"></span>' +
        '</label>' +
        '</div>' +
        'Parallax</li>' +
        '</ul>' +
        /*'<ul id="mws-positioning" class="mws-positioning" style="display: none;">' +
        '<form id="mws-positioning-form" onchange="section_settings_update();">'+
        '<li>' +
        '<label class="mws-radio">' +
        '<input type="radio" name="section-settings-background-position" value="top">' +
        '<span>Top</span>' +
        '</label>' +
        '</li>' +
        '<li>' +
        '<label class="mws-radio">' +
        '<input type="radio" name="section-settings-background-position" value="bottom">' +
        '<span>Bottom</span>' +
        '</label>' +
        '</li>' +
        '<li>' +
        '<label class="mws-radio">' +
        '<input type="radio" name="section-settings-background-position" value="center">' +
        '<span>Center</span>' +
        '</label>' +
        '</li>' +
        '<li>' +
        '<label class="mws-radio">' +
        '<input type="radio" name="section-settings-background-position" value="left">' +
        '<span>Left</span>' +
        '</label>' +
        '</li>' +
        '<li>' +
        '<label class="mws-radio">' +
        '<input type="radio" name="section-settings-background-position" value="right">' +
        '<span>Right</span>' +
        '</label>' +
        '</li>' +
        '</form>'+
        '</ul>' +*/
        '<ul>' +
        '<li>' +
        '<input id="section-settings-color-background" type="color" onchange="section_settings_update();" class="color-input">' +
        'Overlay' +
        '<div class="slidecontainer">' +
        '<input id="section-settings-background-transparency"  value="0" oninput="section_settings_update();" type="range" min="0" max="100" value="50" class="slider">' +
        '</div>' +
        '</li>' +
        '<li>' +
        '<input id="section-settings-color" type="color" onchange="section_settings_update();" class="color-input">' +
        'Text Color</li>' +
        '</ul>' +
        '</div>' +
        '</div>' +
        '<div class="chevron-down">' +
        '<i class="fas fa-sort-down"></i>' +
        '<i class="fas fa-sort-down"></i>' +
        '</div>' +
        '</div>';
}
// Return image or icon
function section_settings_panel_image_html(target) {
    var image = section_settings_panel_image_url(target);
    if (!image) {
        return '<div id="section-settings-background-image-icon" onclick="open_image_library_bg();">' +
            '<i class="fas fa-image"></i>' +
            '</div>';
    } else {
        return '<img src="' + image + '" id="section-settings-background-image" onclick="$(\'#mws-background-dropdown\').show();" alt="">' +
            '<ul id="mws-background-dropdown" style="display: none;">' +
            '<li><button onclick="open_image_library_bg();">Change image</button></li>' +
            '<li><button onclick="section_settings_background_image_remove();">Remove image</button></li>' +
            '</ul>';
    }
}
// Return image url
function section_settings_panel_image_url(el, blurred) {
    var bgUrl = $(el).css('background-image');
    bgUrl = bgUrl.replace('url(', '').replace(')', '').replace(/\"/gi, "");
    if (bgUrl.substring(0, 43) == 'https://res.cloudinary.com/dlgtwbxmg/image/') {
        var filename = bgUrl.substring(bgUrl.lastIndexOf('/') + 1);
        if (blurred === undefined)
            return 'https://res.cloudinary.com/dlgtwbxmg/image/upload/w_38,h_30,c_thumb/v1551451174/mws/' + filename;
        else if (blurred === true)
            return 'https://res.cloudinary.com/dlgtwbxmg/image/upload/e_blur:400,w_auto/v1551451174/mws/' + filename;
        else
            return 'https://res.cloudinary.com/dlgtwbxmg/image/upload/w_auto/v1551451174/mws/' + filename;
    } else if (bgUrl.substring(0, 27) == 'https://images.unsplash.com') {
	var bgUrlParts = bgUrl.split("?");
	var qsParts = (bgUrlParts[1] ? bgUrlParts[1].split("&") : []);
	qsParts = qsParts.filter(function(list_item) {
	    if (list_item.indexOf("w=") == 0) return false;
	    if (list_item.indexOf("h=") == 0) return false;
	    if (list_item.indexOf("fm=") == 0) return false;
	    if (list_item.indexOf("fit=") == 0) return false;
	    if (list_item.indexOf("blur=") == 0) return false;
	    return true;
	});

	if (blurred === undefined) {
	    // is small preview thumb
	    qsParts.push("w=28");
	    qsParts.push("h=30");
	} else if (blurred === true) {
	    qsParts.push("w=1200");
	    qsParts.push("blur=100");
	} else {
	    qsParts.push("w=1200");
	}
	qsParts.push("fm=webp");
	qsParts.push("fit=crop");
	
	return bgUrlParts[0] + "?" + qsParts.join("&");
    } else {
        return undefined;
    }
};

// Update background image
function section_settings_image_icon_update() {
    // init all values, if image is set, show image remove button
    var section = $('.mws-settings-active');
    var html = section_settings_panel_image_html(section);
    $('#mws-section-image-icon-holder').html(html);
    // Update positions
    if (section_settings_panel_image_url(section)) {
        $('#mws-positioning').show();
    }
}

// Remove background image
function section_settings_background_image_remove() {
    $('.mws-settings-active').removeAttr("data-background-repeat");
    $('.mws-settings-active').removeAttr("data-background-align");
    $('.mws-settings-active').removeAttr("data-background-stretch");
    $('.mws-settings-active').removeAttr("data-background-src");
    $('.mws-settings-active').css("background-image", "");
    section_settings_image_icon_update();
}

// Dropdown for controls settings
function section_settings_dropdown_show() {
    // Make section active
    $(document).trigger('section.active', $('section.mws-hover'));
    $('#mws-settings-dropdown').show();
};
function section_settings_dropdown_hide() {
    // Make section active
    $('#mws-settings-dropdown').hide();
};

// Toggle code view
function section_settings_code_view_toggle(e) {
    var editor = window.get_active_editor_instance();
    if (editor.codeView)
        editor.codeView.toggle();
};

// Show controls
function section_settings_on_click(e) {
    if (!document.getElementById('mws-settings-button').contains(e.target)
        && e.target.id != 'mws-settings-close-icon') {
        $("#mws-settings-dropdown").hide();
    }
    if (e.target.id != 'section-settings-background-image-icon' &&
        e.target.id != 'section-settings-background-image') {
        // hide background dropdown
        $('#mws-background-dropdown').hide();
    }
};
function section_settings_show_controls_for_section_closest(e) {
    var closestSection = $(e.currentTarget).closest("section.mws-initiated");
    if (!closestSection.hasClass('mws-active')) {
        section_settings_show_controls_for_section(closestSection);
    }
};
function section_settings_show_controls_for_section(target) {
    $(document).trigger('section.active', target);
};

/* ==========================================================================
3. Update Section
========================================================================== */

function section_settings_update() {
    // TODO: Background color needs correct default value
    var section = $('.mws-settings-active');
    var overlay = $('.mws-overlay', section);
    overlay.css({
        // Transparency
        'opacity': $('#section-settings-background-transparency').val() / 100
    });
    // Text Color
    var elColor = document.getElementById('section-settings-color');
    if (!(elColor.value == "#000000" && !rgb2hex(section.css('color'))))
        section.css({
            'color': elColor.value,
            'background-repeat': 'no-repeat'
        });
    // Background
    elBackgroundColor = document.getElementById('section-settings-color-background');
    if (!(elBackgroundColor.value == "#000000" && !rgb2hex(section.css('backgroundColor')))) // if black and not previously set, ignore
        overlay.css({
            'background-color': elBackgroundColor.value
        });
    // Stretch
    section.attr("data-background-stretch", "cover");
    /*if ($('#section-background-image-stretch').is(':checked')) {
        section.attr("data-background-stretch", "cover");
    } else {
        section.removeAttr("data-background-stretch");
    }*/
    // Blur
    if ($('#section-background-image-blur').is(':checked')) {
        section.css('background-image', 'url('+ section_settings_panel_image_url(section, true) +')');
    } else {
        section.css('background-image', 'url('+ section_settings_panel_image_url(section, false) +')');
    }
    // Parallax
    if ($('#section-settings-background-parallax').is(':checked')) {
        section.attr("data-background-parallax", "parallax");
    } else {
        section.removeAttr("data-background-parallax");
    }
    // Position
    var position = $('input[name=section-settings-background-position]:checked', '#mws-positioning-form').val();
    section.attr('data-background-align', position);
    // Repeat
    // $('.mws-settings-active').attr("data-background-repeat", val);
    // Align
    // $('.mws-settings-active').attr('data-background-align', val);
    window.contentChanged = true;
}

function section_js_lib_load(lib) {
    section_load_js_file(lib);
}

function section_js_load(section_name, libs, js) {
    $(libs).each(function() {
        section_load_js_file(this);
    });
    // ~somewhat wait until all scripts are loaded
    setTimeout(function() {
        if ($("#" + section_name + "_js").length <= 0)
            $('body').append("<script id=\""+ section_name + "_js\" type=\"text/javascript\">"+ js +"</sc" + "ript>");
        eval(js);
    }, 2000);
    window.contentChanged = true;
}

function section_load_js_file(file){
    var already_loaded = false;
    $('script').each(function() {
        if (file == this.src) {
            already_loaded = true;
        }
    });
    if (!already_loaded && !(file.indexOf("jquery") !== -1)) {
        $('body').append("<script type=\"text/javascript\" src=\""+ file + "\" async=\"false\"></sc" + "ript>");
    }
}


$(document).trigger('section.hover');
$(document).trigger('section.scroll');

// set_css = (css) => {
//     var opacity,
//         overlay;
//     overlay = $('.mws-settings-active .mws-overlay');
//     opacity = overlay.css('opacity');
//     return overlay.attr('style', 'opacity:' + opacity + ';' + css);
// };

// function select_section_gradient(val) {
//     set_gradient(val);
// }
//
// function set_gradient(gradient) {
//     var section;
//     section = $('.mws-settings-active');
//     section.find('.mws-overlay').attr('style', '');
//     return section.attr('data-gradient', gradient);
// };
//
// function init_section_gradient() {
//     $("#mws-gradient").val($('.mws-settings-active').attr('data-gradient'));
// }
//
// function reset_gradient() {
//     $('.mws-settings-active').removeAttr('data-gradient');
// };
//
// function select_prev_gradient() {
//     var prevEl;
//     if ($('.mws-gradient-dropdown').find(":selected").length <= 0) {
//         return select_first_gradient();
//     } else {
//         prevEl = $('.mws-gradient-dropdown').find(":selected").prev();
//         if (prevEl.length > 0) {
//             return $('.mws-gradient-dropdown').val(prevEl.attr('value')).change();
//         }
//     }
// };
//
// function select_next_gradient() {
//     var nextEl;
//     if ($('.mws-gradient-dropdown').find(":selected").length <= 0) {
//         return select_first_gradient();
//     } else {
//         nextEl = $('.mws-gradient-dropdown').find(":selected").next();
//         if (nextEl.length > 0) {
//             return $('.mws-gradient-dropdown').val(nextEl.attr('value')).change();
//         }
//     }
// };
//
// function select_first_gradient() {
//     return $('.mws-gradient-dropdown').val($('.mws-dropdown option:nth-of-type(2)').attr('value')).change();
// }
