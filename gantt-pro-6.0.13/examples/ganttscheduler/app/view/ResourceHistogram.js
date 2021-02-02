Ext.define('Gnt.examples.ganttscheduler.view.ResourceHistogram', {
    extend: 'Gnt.panel.ResourceHistogram',
    xtype : 'scheduler-resourcehistogram',

    requires : [
        'Gnt.examples.ganttscheduler.view.ResourceTypeColumn'
    ],

    viewPreset : 'weekAndDayLetter',
    hideHeaders: true,
    rowHeight  : 75,

    labelMode     : 'units',
    // showScaleLines      : true,
    scaleMax      : 8,
    scaleStep     : 1,
    scaleLabelStep: 4,

    columns : [
        {
            xtype : 'resourcetypecolumn',
            tdCls    : 'histogram-icon'
        },
        {
            flex      : 1,
            tdCls     : 'histogram-name',
            dataIndex : 'Name'
        },
        {
            xtype : 'scalecolumn'
        }
    ],

    tipCfg : { cls : 'bartip' },

    initComponent: function () {
        var me = this;

        this.tooltipTpl = new Ext.XTemplate(
            '<tpl for=".">',
            '<table>',
            '<tr><th class="caption" colspan="2">Resource: <strong>{resource.data.Name}</strong></th></tr>',
            '<tr>',
            '<th>Start:</th><td>{[Ext.Date.format(values.startDate, "y-m-d")]}</td>',
            '</tr>',
            '<tr>',
            '<th>End:</th><td>{[Ext.Date.format(Ext.Date.add(values.endDate, Ext.Date.MILLI, -1), "y-m-d")]}</td>',
            '</tr>',
            '<tr>',
            '<th>Utilization %:</th><td>{totalAllocation}%</td>',
            '</tr>',
            '<tr>',
            '<th>Utilization (hrs):</th><td>{[Math.round(this.getHours(values.allocationMS))]}</td>',
            '</tr>',
            '</table>',
            '</tpl>',
            {
                getHours: function (ms) {
                    return me.calendar.convertMSDurationToUnit(ms, 'HOUR');
                }
            }
        );

        this.callParent(arguments);
    }

});
