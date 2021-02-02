/*! mws_modals.js */
mws_ready(function(){
    mws_init_modals();
});

function mws_init_modals(){
    "use strict";

    //main variable
    var modalID;

    mws_forEach(qsa('.modal-trigger:not(.initiated)'), function(el) {
	mws_addClass(el, 'initiated');
	mws_addEventListener(el, 'click', function(e) {
	    var modalID = e.target.getAttribute('data-modal');
	    // done twice
	    console.log("modal triggered", modalID);
            trigger_modal(modalID);	
	});
    });

    //Closing a modal
    mws_addEventListener('.modal-close, .modal-dismiss', "click", function(el){
        close_modal(modalID);
    });

    //Close on esc
    hotkeys('esc', function (event, handler) {
	close_modal(modalID);
    });
};

//Close modal function
function close_modal(modalID) {
    mws_toggleClass(qs('#' + modalID + ' .modal-background'), 'scaleInCircle');
    mws_toggleClass(qs('#' + modalID + ' .modal-content'), 'scaleIn');
    mws_toggleClass(qs('#' + modalID + ' .modal-close'), 'is-hidden');
    //Restore native body scroll
    if (qsa('.dashboard-wrapper').length) {
	rmc(qs('body'), 'is-fixed');
	document.documentElement.style.overflow = '';
    }
        
    
    setTimeout(function(){
        rmc(qs('.modal.is-active'), 'is-active');
        //Restore sticky nav and backktotop
	mws_toggleClass(qsa('#scrollnav, #backtotop'), 'is-hidden');
    }, 500);
}

//Open/Close a modal
function trigger_modal(modalID) {
    mws_toggleClass(qs('#' + modalID), 'is-active');
    mws_toggleClass(qs('#' + modalID + ' .modal-background'), 'scaleInCircle');
    mws_toggleClass(qs('#' + modalID + ' .modal-content'), 'scaleIn');
    mws_toggleClass(qs('#' + modalID + ' .modal-close'), 'is-hidden');
    var autofocus_input = qs('#' + modalID + ' .modal-content input.autofocus');
    if (autofocus_input)
	autofocus_input.select();
    //Prevent sticky fixed nav and backtotop from overlapping modal
    mws_toggleClass(qs('#scrollnav, #backtotop'), 'is-hidden');
    //Prevent body from scrolling when scrolling inside modal
    setTimeout(function(){
        if (qsa('.dashboard-wrapper').length)
	    mws_addClass(qs('body'), 'is-fixed');
    }, 700);
}
