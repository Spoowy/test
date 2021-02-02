var closeDropdown,
    closeSettings,
    deleteSection,
    moveDownSection,
    moveSection,
    moveUpSection,
    openDropdown,
    openSettings,
    refreshPosition,
    selectDropdownElement,
    show_controls_for_section;

$(document).on('click', '.mws-move-down', (e) => {
    return moveDownSection(e);
});

$(document).on('click', '.mws-move-up', (e) => {
    return moveUpSection(e);
});

$(document).on('click', '.mws-delete', (e) => {
    return deleteSection(e);
});

$(document).on('click', '.mws-settings', (e) => {
    return openSettings(e);
});

$(document).on('click', '.mws-button.dropdown', (e) => {
    return openDropdown(e);
});

$(document).on('click', '.mws-dropdown button', (e) => {
    return selectDropdownElement(e);
});

$(document).on('click', '.mws-settings-close', (e) => {
    return closeSettings(e);
});

$(document).on('mouseenter', 'section', (e) => {
    return show_controls_for_section(e);
});

$(document).on('scroll', () => {
    return refreshPosition();
});

show_controls_for_section = (e) => {
    var target;
    $('.mws-active').removeClass('mws-active');
    target = $(e.currentTarget);
    target.addClass('mws-active');
    return refreshPosition();
};

refreshPosition = () => {
    var controls,
        controlsTop,
        settingsActiveSection,
        settingsPanel,
        settingsPanelTop,
        target,
        targetPosition;
    target = $('.mws-active');
    targetPosition = target.position();
    controls = $('.mws-section-controls');
    settingsPanel = $('.mws-settings-panel');
    // controls
    controlsTop = targetPosition.top - $(window).scrollTop();
    if (controlsTop < 0) {
        controlsTop = 0;
    }
    if (target.hasClass('mws-settings-active')) {
        controlsTop = controlsTop + settingsPanel.height();
    }
    controls.css('top', controlsTop);
    if ($('section:first-of-type').hasClass('mws-active')) {
        controls.addClass('mws-first-element');
    } else {
        controls.removeClass('mws-first-element');
    }
    // settings panel
    settingsActiveSection = $('.mws-settings-active');
    if (settingsActiveSection.length > 0) {
        settingsPanelTop = settingsActiveSection.position().top - $(window).scrollTop();
        if ((settingsPanelTop < 0) && ($(window).scrollTop() < (settingsActiveSection.position().top + settingsActiveSection.height() - 48))) {
            settingsPanelTop = 0;
        }
        settingsPanel.css('top', settingsPanelTop);
    }
    // add section button
    return $('.mws-add-button-wrap').css('top', (targetPosition.top - $(window).scrollTop()) + target.height() - 20);
};

moveDownSection = (e) => {
    var target;
    target = $('.mws-active');
    return moveSection(target, 'down');
};

moveUpSection = (e) => {
    var target;
    target = $('.mws-active');
    return moveSection(target, 'up');
};

moveSection = (target, direction) => {
    var clone,
        next,
        prev,
        top;
    if (window.editorSettings) {
        $(target).froalaEditor('destroy');
    }
    clone = target.clone();
    if (direction === 'down') {
        next = target.next();
        clone.insertAfter(next);
    }
    if (direction === 'up') {
        prev = target.prev();
        clone.insertBefore(prev);
    }
    target.remove();
    top = clone.position().top;
    if ((top - 10) > 0) {
        top = top - 20;
    }
    if (window.editorSettings) {
        $(clone).froalaEditor(window.editorSettings);
    }
    $("html, body").animate({
        scrollTop: top
    }, 600);
    return refreshPosition();
};

deleteSection = (e) => {
    var result,
        target;
    target = $('.mws-active');
    result = confirm("Do you really want to delete this section?");
    if (result) {
        return target.remove();
    }
};

openSettings = (e) => {
    var target;
    target = $('.mws-active');
    if (!target.hasClass("mws-settings-active")) {
        $('.mws-settings-active').removeClass('mws-settings-active');
        target.addClass("mws-settings-active");
        refreshPosition();
        return $('.mws-settings-panel').fadeIn();
    } else {
        return closeSettings(e);
    }
};

closeSettings = (e) => {
    $('.mws-settings-active').removeClass('mws-settings-active');
    $('.mws-settings-panel .mws-button.text.dropdown.open').removeClass('open');
    $('.mws-settings-panel .mws-dropdown').hide();
    return $('.mws-settings-panel').fadeOut();
};

openDropdown = (e) => {
    var button,
        dropdown;
    button = $(e.currentTarget);
    dropdown = $(e.currentTarget).next();
    if (!button.hasClass("open")) {
        $('.mws-dropdown').hide();
        $('.mws-button.dropdown.open').removeClass('open');
        button.addClass("open");
        dropdown.addClass("open");
        dropdown.css('left', $(e.currentTarget).position().left + 2);
        dropdown.css('min-width', $(e.currentTarget).width());
        return dropdown.show();
    } else {
        button.removeClass("open");
        dropdown.removeClass("open");
        return dropdown.hide();
    }
};

closeDropdown = (e) => {
    $('.mws-button.dropdown.open').removeClass("open");
    $('.mws-dropdown').removeClass("open");
    return $('.mws-dropdown').hide();
};

selectDropdownElement = (e) => {
    var dropdownEl;
    dropdownEl = $(e.currentTarget);
    dropdownEl.parent().parent().find(".active").removeClass("active");
    dropdownEl.addClass("active");
    $('.mws-button.dropdown.open').find('span').text($(e.currentTarget).text());
    return closeDropdown(e);
};
