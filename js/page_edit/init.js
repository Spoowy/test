window.froalaInstances = [];
window.contentChanged = false;
window.onbeforeunload = function() {
    if (window.contentChanged)
        return 'Are you sure you want to leave this page without saving?';
};
mws_addEventListener(window, 'scroll', updateScroll);
// window.addEventListener('scroll', updateScroll);
// section settings on click
mws_addEventListener(window, 'click', section_settings_on_click);
// window.addEventListener('click', section_settings_on_click);

window.editorSettings = {
    // enter: $.FroalaEditor.ENTER_P,
    toolbarInline: true,
    initOnClick: true,
    // theme: 'maypower',
    fontFamily: {
        "Archivo,sans-serif": 'Archivo',
        "Arial,sans-serif": "Arial",
        "Arvo,sans-serif": 'Arvo',
        "Cardo,sans-serif": 'Cardo',
        "'Frank Ruhl Libre',sans-serif": 'Frank Ruhl Libre',
        "Georgia": 'Georgia',
        "Helvetica,sans-serif": 'Helvetica',
        "Karla,sans-serif": 'Karla',
        "Lato,sans-serif": 'Lato',
        "Lora,sans-serif": 'Lora',
        "Montserrat,sans-serif": 'Montserrat',
        "Oswald,sans-serif": 'Oswald',
        "'Open Sans Condensed',sans-serif": 'Open Sans Condensed',
        "'Playfair Display',sans-serif": 'Playfair Display',
        "'Work Sans',sans-serif": 'Work Sans',
        "Roboto,sans-serif": 'Roboto',
        "'Source Sans',sans-serif": 'Source Sans',
        "'Source Sans Pro',sans-serif": 'Source Sans Pro',
        "Spectral,sans-serif": 'Spectral',
        "Times": 'Times',
        "'Times New Roman'": 'Times New Roman',
        "Ubuntu,sans-serif": 'Ubuntu',
    },
    charCounterCount: false,
    fontFamilySelection: true,
    htmlUntouched: true,
    htmlExecuteScripts: true,
    language: window.lang,
    videoUpload: false,
    htmlRemoveTags: [],
    lineHeights: {
        Default: '',
        Single: '1',
        '1.15': '1.15',
        '1.5': '1.5',
        Double: '2'
    },
    toolbarButtons: {
        'moreText': {
            'buttons': ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting']
        },
        'moreParagraph': {
            'buttons': ['alignLeft', 'alignCenter', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent']
        },
        'moreMisc': {
            'buttons': ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertHR', 'html', 'undo', 'redo', 'help'],
            'align': 'right',
            'buttonsVisible': 2
        }
    },
    imageEditButtons: ["imageReplace", "imageLink", "linkOpen", "linkEdit", "linkRemove", "imageStyle", "imageAlt", 'imageCaption', "imageTUI"],
    imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif', 'webp', 'svg'],
    imagePaste: false,
    linkList: window.linkList,
    linkInsertButtons: ['linkBack', '|', 'linkList', 'linkProduct'],
    htmlAllowedTags: ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'blockquote', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hgroup', 'hr', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meter', 'nav', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'pre', 'progress', 'queue', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'style', 'section', 'select', 'small', 'source', 'span', 'strike', 'strong', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', 'var', 'video', 'wbr', 'svg', 'g', 'path', 'ellipse', 'line', 'circle', 'rect'],
    htmlAllowedEmptyTags: ['textarea', 'a', 'iframe', 'object', 'video', 'style', 'script', '.fa', 'svg'],
    htmlAllowedAttrs: ['accept', 'accept-charset', 'accesskey', 'action', 'align', 'allowfullscreen', 'allowtransparency', 'alt', 'aria-.*', 'async', 'autocomplete', 'autofocus', 'autoplay', 'autosave', 'background', 'bgcolor', 'border', 'charset', 'cellpadding', 'cellspacing', 'checked', 'cite', 'class', 'color', 'cols', 'colspan', 'content', 'contenteditable', 'contextmenu', 'controls', 'coords', 'data', 'data-.*', 'datetime', 'default', 'defer', 'dir', 'dirname', 'disabled', 'download', 'draggable', 'dropzone', 'enctype', 'for', 'form', 'formaction', 'frameborder', 'headers', 'height', 'hidden', 'high', 'href', 'hreflang', 'http-equiv', 'icon', 'id', 'ismap', 'itemprop', 'keytype', 'kind', 'label', 'lang', 'language', 'list', 'loop', 'low', 'max', 'maxlength', 'media', 'method', 'min', 'mozallowfullscreen', 'multiple', 'muted', 'name', 'novalidate', 'open', 'optimum', 'pattern', 'ping', 'placeholder', 'playsinline', 'poster', 'preload', 'pubdate', 'radiogroup', 'readonly', 'rel', 'required', 'reversed', 'rows', 'rowspan', 'sandbox', 'scope', 'scoped', 'scrolling', 'seamless', 'selected', 'shape', 'size', 'sizes', 'span', 'src', 'srcdoc', 'srclang', 'srcset', 'start', 'step', 'summary', 'spellcheck', 'style', 'tabindex', 'target', 'title', 'type', 'translate', 'usemap', 'value', 'valign', 'webkitallowfullscreen', 'width', 'wrap', "xmlns", "viewbox", "d", 'fill', 'transform', 'stroke', 'stroke-miterlimit', 'stroke-width', 'x', 'y', 'editor-onclick', 'data-stored-input', 'mws-margin-auto-id'],
    key: 'yDC5hG4C2A6D7eMRPYf1h1REb1BGQOQIc2CDBREJImA11C8C6D4B1G4A2F2I3A8==',
    inlineClasses: {
        "highlight": "Highlight",
        "highlight-underline": "Highlight underline",
        "highlight-large": "Highlight big"
    },
    events: {
        'initialized': function(e, editor) {},
        'click': function(clickEvent) {
            section_settings_show_controls_for_section_closest(clickEvent);
            // TODO: click on image
            // section_settings_show_controls_for_section_closest(e);
        },
        'keydown': function(keypressEvent) {
            if (this.link.get()) {
                keypressEvent.preventDefault();
                keypressEvent.stopPropagation();
                return false;
            }
        },
        'keyup': function() {
            refreshPosition();
        },
        'contentChanged': function() {
            window.contentChanged = true;
        },
        'image.inserted': function(img, response) {
	    console.log("image inserted", img, response);
            var image = $(img),
                $this = this;
            if (image.attr('data-unsplash-user-url')) {
                var text = '<a href="' + image.attr('data-unsplash-user-url') + '" target="_blank">' + image.attr('data-unsplash-user-name') + '</a>' + ' / ' + '<a href="https://unsplash.com" target="_blank">Unsplash</a>';
                if (image.next().hasClass('fr-inner')) {
                    image.next().html(text);
                } else {
                    $this.image.toggleCaption();
                    setTimeout(function() {

                        image.next().html(text);
                    }, 2000);
                }
            }
            mws_resetImages();
            mws_runResponsiveImages();
        },
        'image.replaced': function(img, response) {
	    console.log("image replaced", img, response);
            var image = $(img),
                $this = this;
            if (image.attr('data-unsplash-user-url')) {
                var text = '<a href="' + image.attr('data-unsplash-user-url') + '" target="_blank">' + image.attr('data-unsplash-user-name') + '</a>' + ' / ' + '<a href="https://unsplash.com" target="_blank">Unsplash</a>';
                if (image.next().hasClass('fr-inner')) {
                    image.next().html(text);
                } else {
                    $this.image.toggleCaption();
                    setTimeout(function() {

                        image.next().html(text);
                    }, 2000);
                }
            }
            mws_resetImages();
            mws_runResponsiveImages();
        }
    }
};

function mws_init_editor() {
    FroalaEditor.RegisterCommand('insertImage', {
        title: 'Insert Image',
        focus: false,
        undo: true,
        refreshAfterCallback: false,
        callback: function(e, editor) {
            // make sure this editor is made active
            open_image_library_froala();
        }
    });
    FroalaEditor.RegisterCommand('imageReplace', {
        title: 'Replace',
        undo: true,
        focus: false,
        popup: true,
        refreshAfterCallback: false,
        callback: function(e, i) {
            open_image_library_froala();
        }
    });
    FroalaEditor.DefineIcon('linkProduct', {
        NAME: 'shopping-cart'
    });
    FroalaEditor.RegisterCommand('linkProduct', {
        title: 'Link a product',
        focus: true,
        undo: false,
        refreshAfterCallback: true,
        callback: function() {
            open_product_manager(true);
        }
    });

    reload_sections();

    init_editor_click_listeners();
};

// reload
function reload_sections() {
    var stage = document.getElementById('edit');

    // Empty page placeholder
    if (stage.querySelectorAll('section:not(#mws-placeholder)').length <= 0)
        stage.innerHTML = '<section id="mws-placeholder" class="mws-placeholder-section"><div class="overlay"></div><div class="content"><h1>Add a section below</h1><div><i class="fa fa-arrow-down" aria-hidden="true"></i></div></div></section>';
    else if (stage.querySelector('#mws-placeholder'))
        stage.removeChild(stage.querySelector('#mws-placeholder'));

    // populate secitonIds
    var sectionIds = [];
    forEach(stage.children, function(el, i) {
        // push section id into section array
        if (el.getAttribute('section') !== void 0) sectionIds.push(el.getAttribute('section'));
        else if (el.getAttribute('global_section') !== void 0) {
            // get global section id from iframe
            var section_id = $(section).find("iframe").contents().find("section").attr("section");
            sectionIds.push(section_id);
        }

        // init froala for section
        if (!hasClass(el, 'mws-initiated'))
            init_froala(el);
    });

    // turn into comma separated list
    sectionIds = sectionIds.join(",");
    // create include for css/js dependencies, order matters, is reverse
    var includeIds = ['page_js', 'page_lib_js', 'page_css', 'page_lib_css'];
    var includePlaceholders = {
        'page_lib_css': '<link rel="stylesheet" id="page_lib_css">',
        'page_css': '<link rel="stylesheet" id="page_css">' //,
        // 'page_lib_js': '<script type="text/javascript" id="page_lib_js" async>\</script\>',
        // 'page_js': '<script type="text/javascript" id="page_js" async>\</script\>'
    };
    // render and updates dependencies' dom tags
    $(includeIds).each(function(index, id) {
        // deprecate old dependency
        if ($('#' + id).length)
            $('#' + id).attr('id', id + "_deprecated");
        $('head').append(includePlaceholders[id]);
        var elem = $('#' + id);
        // set attr type to change
        var attr = "href";
        // correct attr for script dom el
        if ($(elem).is("script")) attr = "src";
	var host = (window.location.hostname == 'localhost' ? window.location.hostname : "ws.maypower.services");
        $(elem).attr(attr, "//" + host + ":8001/direct/" + id.replace(/_([^_]*)$/, '.$1') + "?sections=" + sectionIds);
        // remove old dependency after 5000 milliseconds
        setTimeout(function() {
            $('#' + id + '_deprecated').remove();
        }, 5000);
    });    
    mws_init_global_iframes();
    init_editor_click_listeners();
    refreshPosition();
};

function init_froala(section) {
    var target = '';
    var stage = document.getElementById('edit');

    // Load grained sections
    if (!contains(section, '.editor-blocking') && !contains(section, '.editor-editable'))
        target = section.querySelectorAll('.mws-content');
    else if (contains(section, '.editor-editable'))
        // Search for editable sections
        target = section.querySelectorAll('.editor-editable');
    forEach(target, function(el, i) {
        var instance = new FroalaEditor(el, window.editorSettings); // init froala
        window.froalaInstances.push(instance);
    });

    setTimeout(function() {
        mws_runResponsiveImages();
    }, 300);

    // Add class .mws-initated to prevent further re-init
    if (section.classList) section.classList.add('mws-initiated');
    else section.className += ' ' + 'mws-initiated';
}

function destroy_all_froala_instances() {
    // Destroy all froala instances
    try {
	forEach(window.froalaInstances, function(instance) {
            instance.destroy();
            //arrayRemove(window.froalaInstances, instance);
	});
	window.froalaInstances = [];
    } catch (error) {console.log(error)}
}

function init_editor_click_listeners() {
    // init editor listeners
    forEach(document.querySelectorAll('[editor-onclick]'), function(element) {
	mws_addEventListener(element, 'click', function(el) {
	    // execute set function
	    eval(element.getAttribute('editor-onclick'));
        });
    });
}

jQuery.fn.removeClassByPrefix = function(prefix) {
    var el = this[0];
    var regx = new RegExp('\\b' + prefix + '.*?\\b', 'g');
    [...el.classList].map(className => {
        regx.test(className) && el.classList.remove(className);
    });
    return this;
};

function updateScroll() {

    window.isAnimated = "animateOnEvent";
    // todo: set this when resize / load new element etc
    window.windowHeight = $(window).height();

    //Animate elements on Scroll
    $("[class*='ae-']:not(.done):not(.do)").each(function(i, element) {
        var $ae = $(element);
        if (isElementInView($ae)) {
            $ae.addClass("do").one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function() {
                $(this).removeClass("do").addClass("done");
                // $(this).removeClassByPrefix('ae-').removeClass("do").addClass("done");
            });
        } else if ($ae.hasClass("done")) {
            $ae.removeClass("done");
        }
    });
    // $("[class*='ae-'].done").each(function(i, element) {
    //     var $ae = $(element);
    //     if (!isElementInView($ae)) {
    //         $ae.removeClass("done");
    //     }
    // });
}

function isElementInView(element) {
    var pageTop = $(window).scrollTop(),
        $element = $(element),
        elementHeight = $element.height(),
        pageBottom = pageTop + window.windowHeight,
        elementTop = $element.offset().top,
        elementBottom = elementTop + elementHeight;

    if (elementHeight >= window.windowHeight / 5) {
        return (pageBottom >= elementTop + elementHeight / 5);
    } else {
        return ((pageTop < elementTop) && (pageBottom > elementBottom));
    }
}
