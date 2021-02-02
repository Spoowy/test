Ext.define('Gnt.examples.ganttscheduler.controller.Navigation', {
    extend : 'Ext.app.Controller',

    views  : ['Navigation'],

    refs : [
        // See http://docs.sencha.com/ext-js/4-1/#!/api/Ext.app.Controller-cfg-refs
        { ref : 'subViewContainer',    selector : '#subViewContainer' },
        { ref : 'gantt',            selector : 'scheduler-gantt' },
        { ref : 'settings',         selector : 'scheduler-settings' }
    ],

    init : function() {
        this.control({
            'scheduler-navigation button' : {
                click : this.onNavigationClick
            }
        });
    },

    onNavigationClick : function(btn) {
        var subViewContainer = this.getSubViewContainer();

        switch(btn.itemId) {
            case 'resourceschedule':
            case 'resourcelist':
            case 'histogram':
                subViewContainer.getLayout().setActiveItem(btn.viewIndex);
                break;

            case 'settings':
                var settings = this.settings = this.getSettings();

                settings.setVisible(btn.pressed);
                break;
        }
    }
});