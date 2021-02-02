Ext.define("Gnt.examples.ganttscheduler.view.Navigation", {
    extend     : 'Ext.Container',
    xtype      : 'scheduler-navigation',
    layout     : 'vbox',
    width      : 86,
    weight     : 100,
    region     : 'west',
    defaultType: 'button',
    cls        : 'navigation',
    defaults   : {
        enableToggle: true,
        scale       : 'large',
        toggleGroup : 'nav',
        height      : 64,
        width       : 64,
        margin      : 10
    },
    items      : [
        {
            itemId       : 'resourceschedule',
            tooltip      : 'Resource schedule',
            iconCls      : 'x-fa fa-calendar',
            toggleGroup  : 'views',
            pressed      : true,
            viewIndex    : 0
        },
        {
            itemId       : 'histogram',
            tooltip      : 'Histogram',
            iconCls      : 'x-fa fa-bar-chart',
            toggleGroup  : 'views',
            viewIndex    : 1
        },
        {
            itemId       : 'resourcelist',
            tooltip      : 'Resource list',
            iconCls      : 'x-fa fa-th-list',
            toggleGroup  : 'views',
            viewIndex    : 2
        },
        {
            xtype        : 'tbfill'
        },
        {
            itemId       : 'settings',
            tooltip      : 'Settings',
            iconCls      : 'x-fa fa-sliders',
            enableToggle : false,
            toggleGroup  : 'none'
        }
    ]
});