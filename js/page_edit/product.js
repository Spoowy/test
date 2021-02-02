function open_product_manager(isInLinkEditor) {
    window.isInLinkEditor = isInLinkEditor;
    window.image_library_target = 'app';
    if ($('#product-manager-modal').length <= 0) {
        $('body').append(productManagerModalHTML());
    } else {
        $('#product-manager-modal').show();
    }
}

/* Listens to same messages as image library iframe messages */
function closeProductManager() {
    $('#product-manager-modal').hide();
}

/* build the image mananager modal */
function productManagerModalHTML() {
    var HTML = "<iframe id='product-manager-modal' src='product_manager.htm'></iframe>";
    return HTML;
}

function productSelect(Product) {
    console.log("productSelect", Product);
    console.log("window.isInLinkEditor", window.isInLinkEditor);
    if (window.isInLinkEditor) {
        $('.fr-link-insert-layer input[name=href]').val(Product.url).select();
        toastr.success("Product selected!");
        window.isInLinkEditor = false;
        return true;
    }
    $('section.mws-hover .mws-product-url').each(function() {
        $(this).attr("href", Product.url);
    });
    if (Product.images) {
        $('section.mws-hover .mws-product-image').each(function(i, el) {
            console.log(i, el);
            $(this).attr("src", Product.images[0]);
        });
    }
    if (Product.price) {
        $('section.mws-hover .mws-product-price').each(function(i, el) {
            $(this).html(Product.price);
        });
    }
    toastr.success("Product selected!");
}

function mws_get_product(id, callback) {
    var url = "/api/product?id=" + id;
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
        var status = xhr.status;
        if (status === 200) {
            callback(xhr.response.product);
        } else {
            callback(null);
        }
    };
    xhr.send();
}
