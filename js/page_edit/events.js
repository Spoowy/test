// Events triggered by DOM actions


// Gradient
// $(document).keydown((e) => {
//     switch (e.which) {
//         case 37:
//             if ($('.mws-settings-panel-inner.background-color').hasClass("active")) {
//                 return select_prev_gradient();
//             }
//             break;
//         case 39:
//             if ($('.mws-settings-panel-inner.background-color').hasClass("active")) {
//                 return select_next_gradient();
//             }
//     }
// });

$(document).on('click', '#save_page_button', (e) => {
    return save_html();
});
