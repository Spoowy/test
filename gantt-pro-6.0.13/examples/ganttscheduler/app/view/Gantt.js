Ext.define('Gnt.examples.ganttscheduler.view.Gantt', {
    extend : 'Gnt.panel.Gantt',
    xtype  : 'scheduler-gantt',

    // Ext JS configs
    requires : [
        //'Gnt.examples.ganttscheduler.store.TaskStore',
        'Gnt.examples.ganttscheduler.view.GanttToolbar',

        'Gnt.plugin.taskeditor.ProjectEditor',
        'Gnt.plugin.taskeditor.TaskEditor',
        'Gnt.plugin.TaskContextMenu',
        'Gnt.plugin.DependencyEditor',
        'Sch.plugin.TreeCellEditing',

        'Gnt.column.Name',
        'Gnt.column.ResourceAssignment',
        'Gnt.column.StartDate',
        'Gnt.column.Duration',
        'Gnt.column.Predecessor',
        'Gnt.column.AddNew'
    ],

    flex             : 1,
    title            : 'Gantt chart',
    lockedGridConfig : { width : 300 },
    loadMask         : true,
    border           : false,
    rowHeight        : 30,

    // Gantt configs
    leftLabelField : 'Name',
    viewPreset     : 'weekAndDayLetter',
    columnLines    : true,
    cascadeChanges : true,
    region         : 'center',
    tipCfg         : {cls: 'tasktip'},

    tooltipTpl : '<table>' +
                 '<tr><th class="caption" colspan="2">#{Id} {Name}</th></tr>' +
                 '<tr>' +
                 '<th>Start:</th><td>{[values._record.getDisplayStartDate("y-m-d")]}</td>' +
                 '</tr>' +
                 '<tr>' +
                 '<th>End:</th><td>{[values._record.getDisplayEndDate("y-m-d")]}</td>'+
                 '</tr>' +
                 '<tr>' +
                 '<th>Progress:</th><td>{[Math.round(values.PercentDone)]}%</td>' +
                 '</tr>' +
                 '</table>',

    initComponent : function () {
        var me = this;

        Ext.apply(me, {
            tbar: {
                xtype: 'scheduler-gantttoolbar',
                gantt: me
            }
        });

        me.callParent(arguments);
    },

    onDestroy : function () {
        this.crudManager.destroy();
        this.callParent();
    },

    viewConfig : {
        getRowClass : function (record) {
            // Output a custom CSS class with some task property that we can use for styling
            return 'TASKID_' + record.data.Id;
        }
    },

    columns: [
        {
            xtype : 'namecolumn',
            tdCls : 'namecell',
            width : 200
        },
        {
            header : 'Assigned Resources',
            width  : 150,
            tdCls  : 'resourcecell',
            xtype  : 'resourceassignmentcolumn'
        },
        {
            xtype : 'startdatecolumn'
        },
        {
            xtype : 'durationcolumn'
        },
        {
            xtype : 'predecessorcolumn'
        },
        {
            xtype : 'addnewcolumn'
        }
    ],

    plugins : [
        'gantt_projecteditor',
        // enables task editing by double clicking, displays a window with fields to edit
        'gantt_taskeditor',
        // enables double click dependency editing
        'gantt_dependencyeditor',
        // shows a context menu when right clicking a task
        'gantt_taskcontextmenu',
        // column editing
        'scheduler_treecellediting'
    ]
});
