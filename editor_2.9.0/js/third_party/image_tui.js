/*!
 * froala_editor v2.9.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */

(function (factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['jquery'], factory);
    } else if (typeof module === 'object' && module.exports) {
        // Node/CommonJS
        module.exports = function( root, jQuery ) {
            if ( jQuery === undefined ) {
                // require('jQuery') returns a factory that requires window to
                // build a jQuery instance, we normalize how we use modules
                // that require this pattern but the window provided is a noop
                // if it's defined (how jquery works)
                if ( typeof window !== 'undefined' ) {
                    jQuery = require('jquery');
                }
                else {
                    jQuery = require('jquery')(root);
                }
            }
            return factory(jQuery);
        };
    } else {
        // Browser globals
        factory(window.jQuery);
    }
}(function ($) {

  $.extend($.FE.DEFAULTS, {
    imageTUIOptions: {
      includeUI: {
        theme: {
            'common.bi.image': '/static/assets/images/logos/logo.svg',
            // 'common.bi.image': 'https://uicdn.toast.com/toastui/img/tui-image-editor-bi.png',
            'common.bisize.width': '251px',
            'common.bisize.height': '21px',
            'common.backgroundImage': './img/bg.png',
            'common.backgroundColor': '#fff',
            'common.border': '1px solid #c1c1c1',

            // header
            'header.backgroundImage': 'none',
            'header.backgroundColor': 'transparent',
            'header.border': '0px',

            // load button
            'loadButton.backgroundColor': '#fff',
            'loadButton.border': '1px solid #ddd',
            'loadButton.color': '#222',
            'loadButton.fontFamily': '\'Noto Sans\', sans-serif',
            'loadButton.fontSize': '12px',

            // download button
            'downloadButton.backgroundColor': '#fdba3b',
            'downloadButton.border': '1px solid #fdba3b',
            'downloadButton.color': '#fff',
            'downloadButton.fontFamily': '\'Noto Sans\', sans-serif',
            'downloadButton.fontSize': '12px',

            // main icons
            'menu.normalIcon.path': '../dist/svg/icon-d.svg',
            'menu.normalIcon.name': 'icon-d',
            'menu.activeIcon.path': '../dist/svg/icon-b.svg',
            'menu.activeIcon.name': 'icon-b',
            'menu.disabledIcon.path': '../dist/svg/icon-a.svg',
            'menu.disabledIcon.name': 'icon-a',
            'menu.hoverIcon.path': '../dist/svg/icon-c.svg',
            'menu.hoverIcon.name': 'icon-c',
            'menu.iconSize.width': '24px',
            'menu.iconSize.height': '24px',

            // submenu primary color
            'submenu.backgroundColor': 'transparent',
            'submenu.partition.color': '#e5e5e5',

            // submenu icons
            'submenu.normalIcon.path': '../dist/svg/icon-d.svg',
            'submenu.normalIcon.name': 'icon-d',
            'submenu.activeIcon.path': '../dist/svg/icon-b.svg',
            'submenu.activeIcon.name': 'icon-b',
            'submenu.iconSize.width': '32px',
            'submenu.iconSize.height': '32px',

            // submenu labels
            'submenu.normalLabel.color': '#858585',
            'submenu.normalLabel.fontWeight': 'normal',
            'submenu.activeLabel.color': '#000',
            'submenu.activeLabel.fontWeight': 'normal',

            // checkbox style
            'checkbox.border': '1px solid #ccc',
            'checkbox.backgroundColor': '#fff',

            // rango style
            'range.pointer.color': '#333',
            'range.bar.color': '#ccc',
            'range.subbar.color': '#606060',

            'range.disabledPointer.color': '#d3d3d3',
            'range.disabledBar.color': 'rgba(85,85,85,0.06)',
            'range.disabledSubbar.color': 'rgba(51,51,51,0.2)',

            'range.value.color': '#000',
            'range.value.fontWeight': 'normal',
            'range.value.fontSize': '11px',
            'range.value.border': '0',
            'range.value.backgroundColor': '#f5f5f5',
            'range.title.color': '#000',
            'range.title.fontWeight': 'lighter',

            // colorpicker style
            'colorpicker.button.border': '0px',
            'colorpicker.title.color': '#000',

            // main icons
            'menu.normalIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-d.svg',
            'menu.activeIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-b.svg',
            'menu.disabledIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-a.svg',
            'menu.hoverIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-c.svg',

            // submenu icons
            'submenu.normalIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-d.svg',
            'submenu.normalIcon.name': 'icon-d',
            'submenu.activeIcon.path': 'https://cdn.jsdelivr.net/npm/tui-image-editor@3.2.2/dist/svg/icon-c.svg',
            'submenu.activeIcon.name': 'icon-c'
        },
        initMenu: 'filter',
        menuBarPosition: 'left'//,
        // theme: 'whiteTheme' // or whiteTheme
      }
    },
    tui: window.tui
  });

  $.FE.PLUGINS.imageTUI = function (editor) {
    var current_image;

    function _init () {
      var body = editor.o_doc.body;

      var tuiContainer = editor.o_doc.createElement('div');
      tuiContainer.setAttribute('id', 'tuiContainer');
      tuiContainer.style.cssText = "position: fixed; top: 0;left: 0;margin: 0;padding: 0;width: 100%;height: 100%;background: rgba(0,0,0,.5);z-index: 9998;display:none";
      body.appendChild(tuiContainer);
    }

    function launch(instance) {
      if (typeof editor.opts.tui === 'object') {
        var body = editor.o_doc.body;
        var tuiEditorContainerDiv = editor.o_doc.createElement('div');
        tuiEditorContainerDiv.setAttribute('id', 'tuieditor');

        var popupContainer = editor.o_doc.getElementById("tuiContainer");
        popupContainer.appendChild(tuiEditorContainerDiv);
        popupContainer.style.display = "block";

        var current_image = instance.image.get();
        console.log("current_image", current_image);

        var opts = editor.opts.imageTUIOptions;
        opts.includeUI.loadImage = {
          path: current_image[0].src,
          name: ' '
        }

        var tuiEditorObject = new editor.opts.tui.ImageEditor(editor.o_doc.querySelector('#tuieditor'), opts);

        var canvasContainer = editor.o_doc.getElementById('tuieditor');
        canvasContainer.style.minHeight = (300 + 290) + "px";
        canvasContainer.style.width = "94%";
        canvasContainer.style.height = "94%";
        canvasContainer.style.margin = "auto";

        $(".tui-image-editor-header-buttons").html(
          '<button class="tui-editor-cancel-btn" data-cmd="cancel_tui_image">Cancel</button> <button class="tui-editor-save-btn">Save</button>'
        );

        $(".tui-editor-cancel-btn").click(function (e) {
          destroyTuiEditor(popupContainer);
        });

        $(".tui-editor-save-btn").click(function (e) {
          saveTuiImage(popupContainer, tuiEditorObject, instance, current_image);
        });

      }

    }

    function destroyTuiEditor(container) {
      $("#tuieditor").remove();
      container.style.display = "none";
    }

    function upload_to_cloudinary(popupContainer, instance, current_image, savedImg) {

        var form = new FormData();

        form.append("file", savedImg);
        form.append("upload_preset", "znssvcgq");

        $('.tui-editor-save-btn').attr("disabled", "disabled").html("Loading...");
        $('.tui-image-editor-header-buttons').append('<div class="tui-loader tui-indeterminate"><span></span></div>');
        $('.tui-image-editor-header-buttons > button').hide();

        $.ajax({
          "async": true,
          "crossDomain": true,
          "url": "https://api.cloudinary.com/v1_1/dlgtwbxmg/image/upload",
          "method": "POST",
          "headers": {
            "Cache-Control": "no-cache",
          },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": form
        }).done(function (response) {
            response = JSON.parse(response);

            destroyTuiEditor(popupContainer);

            $(current_image).attr("src",response["url"]);
            $(current_image).removeAttr("data-src");

            ws.send(enc(tuple(atom('client'), tuple(
                atom('image_edited'),
                bin(response["public_id"]),
                bin(response["width"]),
                bin(response["height"]),
                bin(response["format"]),
                bin(response["url"]),
                bin(response["secure_url"]),
                bin(response["original_filename"])
            ))));
        }).fail(function() {
            alert("An error occurred.");
            $('.tui-loader').remove();
            $('.tui-image-editor-header-buttons > button').show();
        });
    }

    function saveTuiImage(popupContainer, tuiEditorObject, instance, current_image) {
      var savedImg = tuiEditorObject.toDataURL();
      // var binary = atob(savedImg.split(',')[1]);
      // var array = [];
      //
      // for (var i = 0; i < binary.length; i++) {
      //   array.push(binary.charCodeAt(i));
      // }
      // var upload_img = new Blob([new Uint8Array(array)], {
      //   type: 'image/png'
      // });
      //
      // instance.image.edit($(current_image));
      // instance.image.upload([upload_img]);
      upload_to_cloudinary(popupContainer, instance, current_image, savedImg);
    }

    return {
      _init: _init,
      launch: launch
    }

  };

  $.FE.DefineIcon('imageTUI', {
    NAME: 'sliders',
    FA5NAME: 'sliders-h'
  });

  $.FE.RegisterCommand('imageTUI', {
    title: 'Advanced Edit',
    undo: false,
    focus: false,
    callback: function (cmd, val) {
      this.imageTUI.launch(this);
    },
    plugin: 'imageTUI'
  });

  // Look for image plugin.
  if (!$.FE.PLUGINS.image) {
    throw new Error('TUI image editor plugin requires image plugin.');
  }

  $.FE.DEFAULTS.imageEditButtons.push('imageTUI');

}));
