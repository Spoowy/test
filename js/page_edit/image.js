var image_library_select_callback = false;

if (window.addEventListener) {
    window.addEventListener('message', image_library_message, false);
} else if (window.attachEvent) {
    window.attachEvent('onmessage', image_library_message, false);
}

function open_image_library() {
    window.image_library_target = 'app';
    if ($('#image-manager-modal').length <= 0) {
        $('body').append(imageManagerModalHTML());
	document.body.style.overflow = 'hidden';
    } else {
        $('#image-manager-modal').show();
    }
}

/* Listener to image library iframe messages */
function image_library_message(event) {
    // fühl dich nicht angesprochen
    if (window.image_library_target != 'app') return false;
    // Check sender origin to be trusted
    // if (event.origin !== 'https://app.storeless.io') return;
    var data = event.data;
    if (typeof(window[data.func]) == 'function') window[data.func].call(null, data.message);
    return Promise.resolve("Dummy response to keep the console quiet");
}

// Functions will be called from iframe
function imageSelect(Image) {
    if (window.image_library_target != 'app') return false;
    // yo_image hack
    if (document.querySelector('.yo-image-select-active')) {
        var el = document.querySelector('.yo-image-select-active');
            el.value = Image.url;
        yo_render_preview_image(el);
        closeImageManager();
        return true;
    }
    window[image_library_select_callback](Image);
}

function closeImageManager() {
    $('#image-manager-modal').hide();
    document.body.style.overflow = '';
}

/* build the image mananager modal */
function imageManagerModalHTML() {
    return "<iframe id='image-manager-modal' src='"+ (window.location.hostname == 'localhost' ? '' : "https://app.maypower.services/") +"image_manager.htm'></iframe>";
}

/* open image library for bg */
function open_image_library_bg() {
    image_library_select_callback = 'select_image_bg';
    open_image_library();
}

function select_image_bg(Image) {
    $('.mws-settings-active').css('background-image', 'url("' + Image.url + '")');
    section_settings_image_icon_update(Image.url);
    closeImageManager();
}

/* call image library from froala */
function open_image_library_froala() {
    image_library_select_callback = 'select_image_froala';
    open_image_library();
}

/* image library responds to froala */
function select_image_froala(Image) {
    var editor = get_active_editor_instance();
    var currentImage = (editor.image ? editor.image.get() : false);
    if (!$(currentImage).is("img"))
        currentImage = false;
    else
        currentImage[0].removeAttribute('data-src');

    var dataSrc = Image.url;
    switch (false) {
        case !/images.unsplash.com/.test(dataSrc):
            dataSrc = dataSrc + "&w=300";
            break;
        case !/\/image\/upload\//.test(dataSrc):
            dataSrc = dataSrc.replace(/\/upload\//, `\/upload\/w_300\/`);
            break;
    }
    editor.image.insert(dataSrc, true, {
        'name': Image.title,
        'id': 'image-' + Image.id,
        'unsplash-user-url': Image['unsplash-user-url'],
        'unsplash-user-name': Image['unsplash-user-name']
    }, currentImage, {});
    closeImageManager();
}
