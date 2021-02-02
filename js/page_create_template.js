var template = 0;
function page_template_open_preview() {
    var url = '/page_template_preview?template=' + template;
    var win = window.open(url, '_blank');
    win.focus();
}
function select_template(e, ID) {
    template = ID;
    qi('template_hidden').value = ID;
    mws_removeClass(qs('.primary-card'), 'primary-card');
    mws_toggleClass(e, 'primary-card');
}
