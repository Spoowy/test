Ext.application({
    name: 'Gnt.examples.ganttscheduler',

    requires: [
        'Gnt.examples.ganttscheduler.view.MainView'
    ],

    controllers: [
        'Navigation',
        'Settings'
    ],

    launch: function () {
        // viewport created here to enable usage in kitchensink (has its own viewport)
        Ext.create('Ext.Viewport', {
            layout: 'border',
            items: [
                {
                    xtype: 'scheduler-mainview'
                }
            ]
        });
    }
});