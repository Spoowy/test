Ext.define("Gnt.examples.ganttscheduler.view.ResourceList", {
    extend     : 'Ext.grid.Panel',
    xtype      : 'scheduler-resourcelist',
    cls        : 'resourcelist',
    columnLines: true,
    bodyBorder : false,
    border     : false,

    initComponent: function () {
        Ext.apply(this, {
//            features : [{
//                groupHeaderTpl: '{name}',
//                ftype : 'grouping'
//            }],
            plugins: [
                new Ext.grid.plugin.CellEditing({})
            ],
            columns: [
                { xtype : 'resourcetypecolumn' },
                {text: 'id', width: 55, dataIndex: 'Id'},
                {text: 'Calendar', width: 80, dataIndex: 'CalendarId'},
                {text: 'Name', flex: 1, dataIndex: 'Name', editor: {xtype: 'textfield'}}
            ]
        });

        this.callParent(arguments);
    }
});