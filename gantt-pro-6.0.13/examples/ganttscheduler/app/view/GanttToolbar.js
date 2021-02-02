Ext.define("Gnt.examples.ganttscheduler.view.GanttToolbar", {
    extend : 'Ext.Toolbar',
    xtype  : 'scheduler-gantttoolbar',
    cls    : 'gantt-toolbar',

    requires : ['Gnt.widget.calendar.CalendarWindow'],

    items  : [
        {
            iconCls : 'x-fa fa-backward',
            tooltip : 'Previous timespan',
            handler : function() {
                this.gantt.shiftPrevious();
            }
        },
        {
            iconCls : 'x-fa fa-forward',
            tooltip : 'Next timespan',
            handler : function() {
                this.gantt.shiftNext();
            }
        },
        {
            iconCls : 'x-fa fa-search-plus',
            tooltip : 'Zoom in',
            handler : function() {
                this.gantt.zoomIn();
            }
        },
        {
            tooltip : 'Zoom out',
            iconCls : 'x-fa fa-search-minus',
            handler : function() {
                this.gantt.zoomOut();
            }
        },
        {
            tooltip : 'Collapse all',
            iconCls : 'x-fa fa-angle-double-up',
            handler : function() {
                this.gantt.collapseAll();
            }
        },
        {
            tooltip : 'Expand all',
            iconCls : 'x-fa fa-angle-double-down',
            handler : function() {
                this.gantt.expandAll();
            }
        },
        {
            tooltip: 'Zoom to fit',
            iconCls: 'x-fa fa-zoomtofit',
            handler: function () {
                this.gantt.zoomToFit(null, { leftMargin: 100, rightMargin: 100 });
            }
        },
        {
            tooltip: 'Undo',
            iconCls: 'x-fa fa-undo',
            handler: function () {
                this.getViewModel().get('undoManager').undo();
            }
        },
        {
            tooltip: 'redo',
            iconCls: 'x-fa fa-redo',
            handler: function () {
                this.getViewModel().get('undoManager').redo();
            }
        },
        {
            tooltip: 'Highlight critical path',
            iconCls: 'x-fa fa-criticalpath',
            enableToggle: true,
            handler: function (btn) {
                var v = this.gantt.getSchedulingView();
                if (btn.pressed) {
                    v.highlightCriticalPaths(true);
                } else {
                    v.unhighlightCriticalPaths(true);
                }
            }
        },
        {
            tooltip: 'Add new task',
            iconCls: 'x-fa fa-new',
            enableToggle: true,
            handler: function (btn) {
                var task = this.gantt.taskStore.getRootNode().appendChild({
                    Name: 'New Task',
                    leaf: true
                });
                this.gantt.getSchedulingView().scrollEventIntoView(task);
                this.gantt.editingInterface.startEdit(task, 0);
            }
        },
        {
            tooltip: 'Remove selected task(s)',
            iconCls: 'x-fa fa-remove',
            handler: function (btn) {
                this.gantt.getSelectionModel().selected.each(function (task) {
                    task.remove();
                });
            }
        },
        {
            tooltip: 'Indent',
            iconCls: 'x-fa fa-indent',
            handler: function (btn) {
                this.gantt.taskStore.indent(this.gantt.getSelectionModel().getSelection());
            }
        },
        {
            tooltip: 'Outdent',
            iconCls: 'x-fa fa-outdent',
            handler: function (btn) {
                this.gantt.taskStore.outdent(this.gantt.getSelectionModel().getSelection());

            }
        },
        {
            tooltip: 'Save changes',
            iconCls: 'x-fa fa-save',
            itemId: 'save-button',
            handler: function () {
                this.gantt.crudManager.sync();
            }
        },
        '->',
        {
            text    : 'Weeks',
            tooltip : 'Zoom to view Weeks',
            handler : function() {
                this.gantt.switchViewPreset('weekAndDayLetter');
            }
        },
        {
            text    : 'Months',
            tooltip : 'Zoom to view Months',
            handler : function() {
                this.gantt.switchViewPreset('monthAndYear');
            }
        },
        {
            text    : 'Years',
            tooltip : 'Zoom to view Years',
            handler : function() {
                this.gantt.switchViewPreset('year', new Date(this.gantt.getStart().getFullYear(), 1, 1), new Date(this.gantt.getStart().getFullYear()+5, 1, 1));
            }
        },

        {
            iconCls : 'x-fa fa-arrows-alt',
            itemId  : 'full-screen-btn',
            tooltip : 'View full screen',
            // Experimental, not X-browser
            _fullScreenFn : (function() {
                var docElm = document.documentElement;

                if (docElm.requestFullscreen)       return "requestFullscreen";
                if (docElm.mozRequestFullScreen)    return "mozRequestFullScreen";
                if (docElm.webkitRequestFullScreen) return "webkitRequestFullScreen";
                if (docElm.msRequestFullscreen)     return "msRequestFullscreen";

            })(),
            handler : function(btn) {
                if (btn._fullScreenFn) {
                    this.gantt.el.down('.x-panel-body').dom[btn._fullScreenFn]();
                }
            }
        },
        {
            iconCls : 'x-fa fa-calendar',
            text    : 'Edit working time',
            handler : function(){
                if (!this.editorWindow) {

                    this.editorWindow = new Gnt.widget.calendar.CalendarWindow({
                        calendar : this.gantt.taskStore.getCalendar(),

                        listeners : {
                            destroy : function () {
                                this.editorWindow = null;
                            },
                            scope   : this
                        }
                    });

                    this.editorWindow.show();
                }
            }
        },
        {
            xtype       : 'textfield',
            emptyText   : 'Find task...',
            width       : 150,
            enableKeyEvents : true,
            listeners : {
                keyup : {
                    fn      : function(field, e) {
                        var value   = field.getValue();
                        var regexp  = new RegExp(Ext.String.escapeRegex(value), 'i');
                        var gantt = field.scope.gantt;

                        if (value) {
                            gantt.taskStore.filterTreeBy(function (task) {
                                return regexp.test(task.get('Name'));
                            });
                        } else {
                            gantt.taskStore.clearTreeFilter();
                        }
                    },
                    buffer  : 300
                },
                specialkey : {
                    fn : function(field, e) {
                        if (e.getKey() === e.ESC) {
                            var gantt = field.scope.gantt;

                            field.reset();
                            gantt.taskStore.clearTreeFilter();
                        }
                    }
                }
            }
        }
        //,
        //{
        //    text    : 'Save',
        //    handler : function() {
        //        // please setup proper crudManager.sync.url before uncommenting this line
        //        // this.gantt.crudManager.sync();
        //    }
        //}
    ],

    initComponent : function() {
        this.defaults = { scale : 'small', scope : this };

        this.callParent(arguments);
    }
});
