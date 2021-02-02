function isValidURL(str) {
    var a  = document.createElement('a');
    a.href = str;
    return (a.host && a.host != window.location.host);
}

$(document).ready(function() {
    if ($.fn.cloudinary_fileupload !== undefined) {
        $("input.cloudinary-fileupload[type=file]").cloudinary_fileupload({
            disableImageResize: false,
            // imageMaxWidth: 800,                   // 800 is an example value - no default
            // imageMaxHeight: 600,                  // 600 is an example value - no default
            maxFileSize: 5000000, // 5MB is an example value - no default
            loadImageMaxFileSize: 20000000, // default is 10MB
            acceptFileTypes: /(\.|\/)(gif|jpe?g|png|bmp|ico)$/i
        });
    }
    
    qi('mws-global-loading-overlay').style.display = 'none';
});

$('.cloudinary-fileupload').bind('cloudinarydone', function(e, data) {
    console.log("image_manager_progress", data);
    $('.progress_bar').css('width', 0);
    ws.send(enc(tuple(atom('client'), tuple(
        atom('image_uploaded'),
        bin(data.result.public_id),
        bin(data.result.width),
        bin(data.result.height),
        bin(data.result.format),
        bin(data.result.url),
        bin(data.result.secure_url),
        bin(data.result.original_filename),
        atom('false')
    ))));
    return true;
});

$('.cloudinary-fileupload').bind('fileuploadsend', function(e, data) {
    qi("add-image-button").style.display = 'none';
    qi("loading-spinner").style.display = '';
});

$('.cloudinary-fileupload').bind('cloudinaryprogress', function(e, data) {
    $('.progress_bar').css('width', Math.round((data.loaded * 95.0) / data.total) + '%');
});

function upload_url(remote_url) {
    $('.cloudinary-fileupload').fileupload('option', 'formData').file = remote_url;
    $('.cloudinary-fileupload').fileupload('add', {
        files: [remote_url]
    });
    // this.fileupload('option', 'formData').file
}

function delete_image(Id) {
    if (confirm("{{lang_img_delete_confirm}}")) {
        ws.send(enc(tuple(atom('client'), tuple(
            atom('image_delete'),
            bin(Id)
        ))));
    }
}

function upload_succeeded() {
    qi('add-image-button').style = '';
    qi('loading-spinner').style.display = 'none';
}

function select_image(Image) {
    console.log("select_image", Image);
    var el = qi("image-" + Image);
    window.parent.postMessage({
        'func': 'imageSelect',
        'message': {
            'id': Image,
            title: el.getAttribute("title"),
            url: el.getAttribute("data-url"),
            'unsplash-user-url': el.getAttribute('data-unsplash-user-url'),
            'unsplash-user-name': el.getAttribute('data-unsplash-user-name')
        }
    }, '*');
}

function close_manager() {
    window.parent.postMessage({
        'func': 'closeImageManager',
        'message': ''
    }, '*');
}

jQuery(document).ready(function() {
    $(document).on('click', '.image', function() {
        window.downloadPhoto(this.id).then(function(data) {
            console.log(data);
        })
    });
    // Detect scroll to bottom
    $(window).scroll(function() {
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            load_more();
        }
    });
    
});

// grid for results

var $grid = $('#results').masonry({
    // options
    itemSelector: '.image-item',
    columnWidth: 250,
    horizontalOrder: true,
    isAnimated: false,
    gutter: 30
});

// grid for images

var $imageListGrid = $('#image-list').masonry({
    // options
    itemSelector: '.image-list-item',
    columnWidth: 250,
    horizontalOrder: true,
    isAnimated: false,
    gutter: 30
});


// reload every second
reload_masonry = function () {
    $grid.masonry('reloadItems');
    $grid.masonry('layout');
    $imageListGrid.masonry('reloadItems');
    $imageListGrid.masonry('layout');
};
reload_masonry();
setInterval(reload_masonry, 1000);

// render results from unsplash
function render(data) {
    var elements = [];
    $(data.results).each(function() {
        elements.push('<div class="image-item" onclick="download(\'' + this.id + '\')"><img id="' + this.id + '" class="image" src="' + this.urls.thumb + '"/><span>by <a href="'+this.user.links.html+'" target="_blank">'+ this.user.name +'</a></span></div>');
    });
    $grid.append(elements).masonry('appended', elements);
}

$("#search").on('keyup', function (e) {
    if (e.keyCode == 13) {
        // Upload url
        if (isValidURL(this.value)) {
            upload_url(this.value);
            this.value = '';
            toastr.success("Downloading image...");
        } else {
            $('#image-list').hide();
            $('#results').show();
            search(this.value);
        }
    }
    if (!this.value) {
        // Show library
        $('#results').hide();
        $('#image-list').show();
        $('#search-feedback').html("");
    }
});

function search(query) {
    $grid.masonry('remove', $('#results').find('.image-item'));
    // $('#results').html('<img src="https://res.cloudinary.com/dlgtwbxmg/image/upload/v1534521527/Ellipsis-1s-200px.gif" width="30" alt="">');
    window.searchPhotos(query).then(function(data) {
        // $('#results').html("");
        $('#search-feedback').html(data.total + ' images found. Powered by <a href="https://unsplash.com" target="_blank">Unsplash</a>.');
        render(data);
    });
}

var is_loading_more = false;

function load_more() {
    if (!is_loading_more) {
        is_loading_more = true;
        $('#loading').show();
        window.loadMorePhotos().then(function(data) {
            render(data);
            is_loading_more = false;
            $('#loading').hide();
        });
    }
}

function download(photo) {
    window.downloadPhoto(photo).then(function(data) {
        window.select_after_upload = true;
        window.unsplash_photo = data;
	
        ws.send(enc(tuple(atom('client'), tuple(
            atom('download_unsplash_image'),
            bin(data.id),
            bin(data.width),
            bin(data.height),
            bin('jpg'),
            bin(data.urls.full),
            bin(data.user.links.html),
            bin(data.user.name),
            atom('true')
        ))));
        $('#results').hide();
        $('#image-list').show();
        $('#search-feedback').html("");
        $('#search').val("");
    });
}
