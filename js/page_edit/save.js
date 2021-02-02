function save_page() {
    var stage = document.getElementById('edit');

    destroy_all_froala_instances();
    clean_sections_from_editor_tools();
    mws_resetImages();
    
    // save
    ws.send(enc(tuple(atom('client'), tuple(atom('save_page'), bin(stage.innerHTML)))));

    window.contentChanged = false;
    setTimeout(function() {
        forEach(stage.children, function(section) {
            init_froala(section);
        });
	mws_init_global_iframes(); // ???
    }, 400);
}
// Disable auto save because we do not want to interrupt
// the user by destroying froala
// setInterval(save_page, 60000);
