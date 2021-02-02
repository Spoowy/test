mws_ready(function() {
    //Common dropdown
    mws_addEventListener('.dropdown-trigger', 'click', function (e) {
	mws_forEachElement('.dropdown.is-active', function(elem) {
	    mws_removeClass(elem, 'is-active')
	});
	mws_addClass(e.target.closest('.dropdown'), 'is-active');
    });

    mws_addEventListener('body', 'click', function(e) {
    	if (e.target.parentNode.querySelector('.dropdown') != null
    	    || e.target.parentNode.querySelector('.dropdown-item') != null)
    	    mws_forEachElement('.dropdown.is-active', function(el) {
    		mws_removeClass(el, 'is-active');
    	    });
    	return true;
    });
});

function show_dropdown(el) {
    mws_addClass(el.parentNode, 'is-active');
};
