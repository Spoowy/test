/* top_navbar */
function init_nav() {
    var nav_toggle = document.querySelector('.nav-toggle');
    if (nav_toggle)
        nav_toggle.addEventListener("click", function(el, i) {
            el.classList.toggle('is-active');
            siblings(el).querySelector('.nav-menu').classList.toggle('is-active');
        });

    // Main menu icon push sidebar out behaviour
    forEachElement('.side-icon', function(menu_element){
        menu_element.addEventListener('click', function() {
            forEachElement('.side-icon.is-active', function(active_menu_element) {
                active_menu_element.classList.remove('is-active');
            });
            menu_element.classList.add('is-active');
            document.querySelector('.menu-wrapper .icon-box-toggle').classList.add('active');
            document.querySelector('.child-menu').classList.add('is-sidebar-translated');
            forEachElement('.dashboard-nav, #dashboard-wrapper', function(el) {
                el.classList.add('is-pushed');
            });
            //disable reader mode switch when sidebar is opened
	    var label = document.querySelector('.reader-switch label');
            if (label) label.classList.add('is-disabled');
        });
    });

    var closeMenuBtn = document.querySelector('.menu-wrapper');
    closeMenuBtn.addEventListener('click', function() {
        document.querySelector('.child-menu').classList.toggle('is-sidebar-translated');
        this.querySelector('.icon-box-toggle').classList.toggle('active');
        forEachElement('.dashboard-nav, #dashboard-wrapper', function(el) {
            el.classList.toggle('is-pushed');
        });
        //enable reader mode switch when sidebar is closed
        document.querySelector('.reader-switch label').classList.remove('is-disabled');
    });

    //Sidebar menu submenu transitions
    // forEachElement(".sidebar-menu > li.have-children a.parent-link", function(el) {
    //     el.addEventListener("click", function(i){
    //         i.preventDefault();
    //         if (!this.parentNode.classList.contains("active")) {
    //             $(".sidebar-menu li ul").slideUp();
    //             $(this).next().slideToggle();
    //             $(".sidebar-menu li").removeClass("active");
    //             $(this).parent().addClass("active");
    //         }
    //         else{
    //             $(this).next().slideToggle();
    //             $(".sidebar-menu li").removeClass("active");
    //         }
    //     });
    // });

    // Data child menu setup
    forEachElement('.main-menu ul li.side-icon', function(el) {
        el.addEventListener('click', function(e) {
            var menu_id = this.getAttribute('data-child-menu');
            document.querySelector('.sidebar-menu.is-active').classList.remove('is-active');
            document.getElementById(menu_id).classList.add('is-active');
        });
    });

    // Make the current one active
    var current = location.pathname.replace(/^.*[\\\/]/, '').replace(/.htm/, '').replace(/edit/, 'list');
    if (current == "" || current == "index") current = "dashboard";
    if (current == "shipping_zone_method_list" || current == "shipping_zone_method_edit") current = "shipping_zone_list";
    forEachElement('.sidebar-menu li a', function(el) {
	var href = el.getAttribute('href').replace(/.htm/, '');
	if (href.indexOf(current) !== -1 || href.indexOf(current.replace('_page_', '_')) !== -1) {
	    var Id = el.parentNode.parentNode.id;
	    mws_removeClass(qs('[data-child-menu].is-active'), 'is-active');
	    mws_addClass(qs('[data-child-menu='+ Id +']'), 'is-active');
	}
    });
};
