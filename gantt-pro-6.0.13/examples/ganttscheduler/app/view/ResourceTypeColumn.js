Ext.define("Gnt.examples.ganttscheduler.view.ResourceTypeColumn", {
    extend    : 'Ext.grid.column.Column',
    xtype     : 'resourcetypecolumn',
    text      : 'Type',
    width     : 60,
    tdCls     : 'resource-type',
    dataIndex : 'Type',

    renderer : function (v, m) {
        m.tdCls = 'x-fa fa-' + v;
    }
});