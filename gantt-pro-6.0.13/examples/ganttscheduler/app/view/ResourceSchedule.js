Ext.define("Gnt.examples.ganttscheduler.view.ResourceSchedule", {
    extend    : 'Sch.panel.SchedulerGrid',

    requires : [
        'Gnt.examples.ganttscheduler.view.ResourceTypeColumn'
    ],

    xtype     : 'scheduler-resourceschedule',
    cls       : 'resourceschedule',

    // Use the same layout and appearance as the Gantt chart
    viewConfig         : {
        preserveScrollOnRefresh: true,
        segmentsTpl            : new Ext.XTemplate(
            '<div class="sch-gantt-segment-connector"></div>',
            '<tpl for="segments">',
            '<div class="resource-segment {cls}" style="left:{left}px;width:{width}px;{style}"><div class="resource-segment-inner">{name}</div></div>',
            '</tpl>')
    },

    // Scheduler configs
    enableDragCreation : false,
    barMargin          : 4,
    eventBorderWidth   : 0,
    hideHeaders        : true,
    highlightWeekends  : true,

    plugins: [
        'scheduler_treecellediting'
    ],

    columns: [
        { xtype : 'resourcetypecolumn' },
        {
            text     : 'Name',
            flex     : 1,
            dataIndex: 'Name',
            editor   : {xtype: 'textfield'}
        }
    ]
});