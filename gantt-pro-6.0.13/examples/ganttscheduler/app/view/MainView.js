Ext.define('Gnt.examples.ganttscheduler.model.MyTaskModel', {
    extend: 'Gnt.model.Task',
    // A field in the dataset that will be added as a CSS class to each rendered task element
    //clsField: 'TaskType',
    fields: [
        { name: 'TaskType', type: 'string' },
        // { name: 'Color', type: 'string' }
    ],
    //customizableFields: [
    //    { name: 'OrderId', type: 'int' },
    //    { name: 'Status', type: 'int' },
    //    { name: "IsEditable", type: 'int' },
    //    { name: "IsJobPresent", type: 'int' },
    //    { name: 'StatusReason', type: 'string' },
    //    { name: 'ActualEffort', type: 'string' },
    //    { name: 'DueDate', type: 'date', xtype: 'datecolumn', format: "m/d/Y", dateFormat: "c" },
    //    { name: 'BillableHours', type: 'string' },
    //    { name: 'NonBillableHours', type: 'string' },
    //    { name: 'TotalHours', type: 'string' },
    //    { name: 'planstart', type: 'date', xtype: 'datecolumn', format: "m/d/Y", dateFormat: "c" },
    //    { name: 'planend', type: 'date', xtype: 'datecolumn', format: "m/d/Y", dateFormat: "c" },
    //    { name: 'actstart', type: 'date', xtype: 'datecolumn', format: "m/d/Y", dateFormat: "c" },
    //    { name: 'actend', type: 'date', xtype: 'datecolumn', format: "m/d/Y", dateFormat: "c" },
    //    { name: 'plannedduration', type: 'string' },
    //    { name: 'plannedeffort', type: 'string' },
    //    { name: 'jobtaskId', type: 'string' }
    //]

});

Ext.define('Gnt.examples.ganttscheduler.model.Resource', {
    extend: 'Gnt.model.Resource',
    // clsField: 'Name',
    fields: [
        { name: 'Id', type: 'int' },
        //  { name: 'Name', mapping: 'name' }
    ],
    //customizableFields: [
    //    { name: 'DefaultWorkTypeId', type: 'string' }
    //]

});
Ext.define('Gnt.examples.ganttscheduler.model.Assignment', {
    extend: 'Gnt.model.Assignment',
    fields: [{ name: 'Id', type: 'int' }],
    //customizableFields: [
    //    { name: 'workTypeId', type: 'string' }
    //]
});

Ext.define('Gnt.examples.ganttscheduler.model.Dependency', {
    extend: 'Gnt.data.DependencyStore',
    fields: [
        // `Id` and `Name` fields are already provided by the superclass
        { name: 'Id', type: 'int' }
    ]
});

Ext.define('Gnt.examples.ganttscheduler.view.MainView', {
    extend   : 'Ext.Container',
    xtype    : 'scheduler-mainview',
    layout   : 'border',
    region   : 'center',
    cls      : 'ganttscheduler-mainview',

    requires : [
        'Gnt.examples.ganttscheduler.view.Gantt',
        'Gnt.examples.ganttscheduler.view.Navigation',
        'Gnt.examples.ganttscheduler.view.Settings',
        'Gnt.examples.ganttscheduler.view.ResourceSchedule',
        'Gnt.examples.ganttscheduler.view.ResourceList',
        'Gnt.examples.ganttscheduler.view.ResourceHistogram',

        //'Gnt.examples.ganttscheduler.store.TaskStore',
        //'Gnt.examples.ganttscheduler.model.Resource',

        'Gnt.examples.ganttscheduler.controller.Navigation',
        'Gnt.examples.ganttscheduler.controller.Settings',

        'Gnt.data.CalendarManager',
        'Gnt.data.CrudManager',
        'Gnt.data.calendar.BusinessTime',
        'Gnt.model.Resource',
        'Gnt.model.Task',
        'Gnt.model.Assignment',
        'Gnt.data.DependencyStore',
        'Gnt.data.AssignmentStore',
        'Gnt.data.ResourceStore',
        'Gnt.data.TaskStore'
    ],

    initComponent : function () {
        var dependencyStore = Ext.create("Gnt.data.DependencyStore", {
            // autoLoad: true,
                data: [
                        {
                            "Id": 1,
                            "From": 12,
                            "To": 13,
                            "Type": 0
                        },
                        {
                            "Id": 2,
                            "From": 20,
                            "To": 19,
                            "Type": 2
                        },
                        {
                            "Id": 3,
                            "From": 19,
                            "To": 18,
                            "Type": 2
                        },
                        {
                            "Id": 4,
                            "From": 18,
                            "To": 21,
                            "Type": 2
                        },
                        {
                            "Id": 5,
                            "From": 21,
                            "To": 5,
                            "Type": 2
                        },
                        {
                            "Id": 6,
                            "From": 9,
                            "To": 7,
                            "Type": 2
                        },
                        {
                            "Id": 7,
                            "From": 26,
                            "To": 25,
                            "Type": 0
                        },
                        {
                            "Id": 8,
                            "From": 27,
                            "To": 26,
                            "Type": 0
                        },
                        {
                            "Id": 9,
                            "From": 6,
                            "To": 10,
                            "Type": 2
                        },
                        {
                            "Id": 10,
                            "From": 24,
                            "To": 9,
                            "Type": 2
                        },
                        {
                            "Id": 11,
                            "From": 22,
                            "To": 23,
                            "Type": 2
                        },
                        {
                            "Id": 12,
                            "From": 11,
                            "To": 12,
                            "Type": 0
                        },
                        {
                            "Id": 13,
                            "From": 34,
                            "To": 20,
                            "Type": 2
                        },
                        {
                            "Id": 14,
                            "From": 13,
                            "To": 17,
                            "Type": 2
                        }
                    ]//dependencies//data.dependencies
            ,
            getDependencyError: function (dependencyOrFromId, toId, type, dependenciesToAdd, dependenciesToRemove, calledFromThisDepModel) {
                debugger;
                // `calledFromThisModel` is used when called from `isValid` method of depedency model
                var fromId, fromTask, toTask;

                var modelInput = dependencyOrFromId instanceof Gnt.model.Dependency;

                // Normalize input
                if (modelInput) {
                    fromId = dependencyOrFromId.getSourceId();
                    fromTask = this.getTaskById(fromId);

                    // if dependency provided then `toId` and `type` arguments can be skipped
                    dependenciesToAdd = toId;
                    dependenciesToRemove = type;

                    // if dependency being validated presented in dependenciesToAdd list
                    if (dependenciesToAdd && Ext.Array.contains(dependenciesToAdd, dependencyOrFromId)) {
                        // make list copy
                        dependenciesToAdd = Ext.Array.slice(dependenciesToAdd, 0);
                        // and remove dependency from it
                        Ext.Array.remove(dependenciesToAdd, dependencyOrFromId);
                    }

                    type = dependencyOrFromId.getType();
                    toId = dependencyOrFromId.getTargetId();
                    toTask = this.getTaskById(toId);

                    // if we've been called with dependencies model as 1st arg (modelInput) and that dependency
                    // is already in the dep store, this case is identical to called "isValid" method on the dependency record
                    if (dependencyOrFromId.joined && dependencyOrFromId.joined.length) calledFromThisDepModel = dependencyOrFromId;
                } else {
                    fromId = dependencyOrFromId;
                    fromTask = this.getTaskById(fromId);
                    toTask = this.getTaskById(toId);

                    if (type === undefined) {
                        // get default dependency type from the dependency class
                        var defaultType = this.model.getField(this.model.prototype.typeField).defaultValue;
                        type = defaultType !== undefined ? defaultType : this.model.Type.EndToStart;
                    }
                }

                if (!calledFromThisDepModel && modelInput && !dependencyOrFromId.isValid()) {
                    return -1;
                } else if (!fromId || !toId || fromId == toId) {
                    return -1;
                }
                if (toTask.getStatus() == 468780000 || toTask.getStatus() == 468780001) return -14;
                // Both tasks need to exist for the link to make sense
                if (!fromTask || !toTask) return -2;

                // check dependency type
                if (!this.isValidDependencyType(type)) return -10;

                // Also, not allowed to setup a link between a parent and its child
                if (fromTask.contains(toTask) || toTask.contains(fromTask)) return -9;

                var depsToIgnore;
                if (dependenciesToRemove || calledFromThisDepModel) {
                    depsToIgnore = [];
                    // ignore dependency itself during transitivities/cycles search
                    if (calledFromThisDepModel) depsToIgnore.push(calledFromThisDepModel);
                    if (dependenciesToRemove) depsToIgnore = depsToIgnore.concat(dependenciesToRemove);
                }

                // checking the presence of transitivity in forward direction (fromId -> toId) - prevents actual transitivity
                if (this.transitiveDependencyValidation) {
                    if (this.hasTransitiveDependency(fromId, toId, depsToIgnore, dependenciesToAdd))
                        return -3;
                } else {
                    // check if tasks are already linked directly
                    if (this.areTasksLinkedForward(fromId, toId, depsToIgnore, dependenciesToAdd))
                        return -3;
                }
                // checking the presence of transitivity in backward direction (toId -> fromId) - prevents cycles
                if (this.hasTransitiveDependency(toId, fromId, depsToIgnore, dependenciesToAdd))
                    return -4;

                // checking the presence of transitivity between fromId-task and some of toId-task successors
                // or between some of fromId-task predecessors and toId-task
                // it detects cases when we have 1->2, 1->3 dependencies and validating 2->3 dependency
                // and when we have 2->3, 1->3 dependencies and validating 1->2 dependency
                if (this.transitiveDependencyValidation && this.isPartOfTransitiveDependency(fromId, toId, depsToIgnore, dependenciesToAdd))
                    return -5;

                // if strict dependencies validation mode enabled
                if (this.strictDependencyValidation) {
                    // let's check if there is an opposite relation between the tasks parent-child stacks (to prevent cycle)
                    if (this.groupsHasTransitiveDependency(toTask.getInternalId(), fromTask.getInternalId(), depsToIgnore, dependenciesToAdd))
                        return -7;
                    // also check if there is some other relation of the same direction (to prevent transitivity)
                    if (this.transitiveDependencyValidation && this.groupsHasTransitiveDependency(fromTask.getInternalId(), toTask.getInternalId(), depsToIgnore, dependenciesToAdd))
                        return -8;
                }
                if (!this.allowParentTaskDependencies && (!fromTask.isLeaf() || !toTask.isLeaf()))
                    return -11;

                return 0;
            },

        });
        var assignmentStore = Ext.create("Gnt.data.AssignmentStore", {
            // autoLoad: true,
            model: "Gnt.examples.ganttscheduler.model.Assignment",

                data: [
                    {
                        "Id": 1,
                        "ResourceId": 1,
                        "TaskId": 11,
                        "Units": 125
                    },
                    {
                        "Id": 2,
                        "ResourceId": 2,
                        "TaskId": 12,
                        "Units": 50
                    },
                    {
                        "Id": 3,
                        "ResourceId": 3,
                        "TaskId": 12,
                        "Units": 50
                    },
                    {
                        "Id": 4,
                        "ResourceId": 4,
                        "TaskId": 13,
                        "Units": 100
                    },
                    {
                        "Id": 5,
                        "ResourceId": 5,
                        "TaskId": 14,
                        "Units": 100
                    },
                    {
                        "Id": 6,
                        "ResourceId": 6,
                        "TaskId": 16,
                        "Units": 100
                    }
                ] //assignments//data.assignments

        });

        var resourceStore = Ext.create("Gnt.data.ResourceStore", {
            // autoLoad: true,
            model: "Gnt.examples.ganttscheduler.model.Resource",
            calendarManager: new Gnt.data.CalendarManager({ calendarClass: 'Gnt.data.calendar.BusinessTime' }),

            data: [
                {
                    "Id": 1,
                    "Name": "Mike",
                    "Type": "user"
                },
                {
                    "Id": 2,
                    "Name": "Linda",
                    "Type": "user"
                },
                {
                    "Id": 3,
                    "Name": "Don",
                    "Type": "user"
                },
                {
                    "Id": 4,
                    "Name": "Karen",
                    "Type": "user"
                },
                {
                    "Id": 5,
                    "Name": "Doug",
                    "Type": "user"
                },
                {
                    "Id": 6,
                    "Name": "Peter",
                    "Type": "user"
                },
                {
                    "CalendarId": "NightShift",
                    "Id": 1001,
                    "Name": "Drill",
                    "Type": "cog"
                },
                {
                    "CalendarId": "NightShift",
                    "Id": 1002,
                    "Name": "Oil pump",
                    "Type": "cog"
                },
                {
                    "CalendarId": "NightShift",
                    "Id": 1006,
                    "Name": "Crane #1",
                    "Type": "cog"
                },
                {
                    "CalendarId": "NightShift",
                    "Id": 1007,
                    "Name": "Crane #2",
                    "Type": "cog"
                },
                {
                    "CalendarId": "NightShift",
                    "Id": 1008,
                    "Name": "Crane #3",
                    "Type": "cog"
                },
                {
                    "CalendarId": "Default",
                    "Id": 1003,
                    "Name": "Light truck #1",
                    "Type": "truck"
                },
                {
                    "CalendarId": "Default",
                    "Id": 1004,
                    "Name": "Light truck #2",
                    "Type": "truck"
                },
                {
                    "CalendarId": "Default",
                    "Id": 1005,
                    "Name": "Heavy truck",
                    "Type": "truck"
                },
                {
                    "CalendarId": "Default",
                    "Id": 1009,
                    "Name": "Cargo jet #1",
                    "Type": "plane"
                },
                {
                    "CalendarId": "Default",
                    "Id": 1010,
                    "Name": "Cargo jet #2",
                    "Type": "plane"
                }
            ]//resources//data.resources
        });
        var gntTaskStore = Ext.create("Gnt.data.TaskStore", {
            // autoLoad: true,
            model: 'Gnt.examples.ganttscheduler.model.MyTaskModel',
            calendarManager: new Gnt.data.CalendarManager({ calendarClass: 'Gnt.data.calendar.BusinessTime' }),
            rootVisible: false,

                data: [
                    {
                        "Id": 100,
                        "Name": "PROJECT: BUILD DEVICE",
                        "StartDate": "2017-01-16T08:00:00",
                        "EndDate": "2017-05-12T17:00:00",
                        "TaskType": "Gnt.model.Project",
                        "children": [
                            {
                                "Id": 1,
                                "Name": "Planning",
                                "PercentDone": 50,
                                "StartDate": "2017-01-16T08:00:00",
                                "EndDate": "2017-01-27T17:00:00",
                                "TaskType": "Important",
                                "children": [
                                    {
                                        "Duration": 10,
                                        "Id": 11,
                                        "Name": "Investigate",
                                        "PercentDone": 50,
                                        "StartDate": "2017-01-16T08:00:00",
                                        "TaskType": "LowPrio",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 10,
                                        "Id": 12,
                                        "Name": "Assign resources",
                                        "PercentDone": 50,
                                        "StartDate": "2017-01-16T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 10,
                                        "Id": 13,
                                        "Name": "Gather documents (not resizable)",
                                        "PercentDone": 50,
                                        "Resizable": false,
                                        "StartDate": "2017-01-16T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Draggable": false,
                                        "Duration": 0,
                                        "Id": 17,
                                        "Name": "Report to management (not draggable)",
                                        "PercentDone": 0,
                                        "StartDate": "2017-01-27T17:00:00",
                                        "ManuallyScheduled": true,
                                        "leaf": true
                                    }
                                ],
                                "expanded": true
                            },
                            {
                                "Duration": 12,
                                "Id": 4,
                                "Name": "Implementation Phase 1",
                                "PercentDone": 43.92857142857143,
                                "StartDate": "2017-01-30T08:00:00",
                                "ConstraintType": "startnoearlierthan",
                                "ConstraintDate": "2017-01-30T08:00:00",
                                "TaskType": "LowPrio",
                                "children": [
                                    {
                                        "Duration": 5,
                                        "Id": 34,
                                        "Name": "Preparation work",
                                        "PercentDone": 30,
                                        "StartDate": "2017-01-30T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 5,
                                        "Id": 14,
                                        "Name": "Evaluate chipsets",
                                        "PercentDone": 30,
                                        "StartDate": "2017-01-30T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 5,
                                        "Id": 16,
                                        "Name": "Choose technology suite",
                                        "PercentDone": 30,
                                        "StartDate": "2017-01-30T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 5,
                                        "Id": 15,
                                        "Name": "Build prototype",
                                        "PercentDone": 60,
                                        "StartDate": "2017-02-08T08:00:00",
                                        "children": [
                                            {
                                                "Duration": 4,
                                                "Id": 20,
                                                "Name": "Step 1",
                                                "PercentDone": 60,
                                                "StartDate": "2017-02-08T08:00:00",
                                                "ManuallyScheduled": true,
                                                "leaf": true
                                            },
                                            {
                                                "Duration": 4,
                                                "Id": 19,
                                                "Name": "Step 2",
                                                "PercentDone": 60,
                                                "StartDate": "2017-02-08T08:00:00",
                                                "ManuallyScheduled": true,
                                                "leaf": true
                                            },
                                            {
                                                "Duration": 4,
                                                "Id": 18,
                                                "Name": "Step 3",
                                                "PercentDone": 60,
                                                "StartDate": "2017-02-08T08:00:00",
                                                "ManuallyScheduled": true,
                                                "leaf": true
                                            },
                                            {
                                                "Duration": 1,
                                                "Id": 21,
                                                "Name": "Follow up with customer",
                                                "PercentDone": 60,
                                                "StartDate": "2017-02-14",
                                                "ManuallyScheduled": true,
                                                "leaf": true
                                            }
                                        ],
                                        "expanded": true
                                    }
                                ],
                                "expanded": true
                            },
                            {
                                "Duration": 0,
                                "Id": 5,
                                "Name": "Customer approval",
                                "PercentDone": 0,
                                "StartDate": "2017-02-15T17:00:00",
                                "ManuallyScheduled": true,
                                "leaf": true
                            },
                            {
                                "Duration": 8,
                                "Id": 6,
                                "Name": "Implementation Phase 2",
                                "PercentDone": 16.666666666666668,
                                "StartDate": "2017-02-20T08:00:00",
                                "ConstraintType": "startnoearlierthan",
                                "ConstraintDate": "2017-02-20T08:00:00",
                                "children": [
                                    {
                                        "Duration": 8,
                                        "Id": 25,
                                        "Name": "Task 1",
                                        "PercentDone": 10,
                                        "StartDate": "2017-02-20T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 8,
                                        "Id": 26,
                                        "Name": "Task 2",
                                        "PercentDone": 20,
                                        "StartDate": "2017-02-20T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 8,
                                        "Id": 27,
                                        "Name": "Task 3",
                                        "PercentDone": 20,
                                        "StartDate": "2017-02-20T08:00:00",
                                        "leaf": true
                                    }
                                ],
                                "expanded": true
                            },
                            {
                                "Duration": 0,
                                "Id": 10,
                                "Name": "Customer approval 2",
                                "PercentDone": 0,
                                "StartDate": "2017-03-14T17:00",
                                "ManuallyScheduled": true,
                                "leaf": true
                            },
                            {
                                "Duration": 35,
                                "Id": 8,
                                "Name": "Production phase 1",
                                "PercentDone": 40.57142857142857,
                                "StartDate": "2017-03-20T08:00:00",
                                "ConstraintType": "startnoearlierthan",
                                "ConstraintDate": "2017-03-20T08:00:00",
                                "children": [
                                    {
                                        "Duration": 12,
                                        "Id": 22,
                                        "Name": "Assemble",
                                        "PercentDone": 50,
                                        "StartDate": "2017-03-20T08:00:00",
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 11,
                                        "Id": 23,
                                        "Name": "Load SW",
                                        "PercentDone": 20,
                                        "StartDate": "2017-04-04T08:00:00",
                                        "ManuallyScheduled": true,
                                        "leaf": true
                                    },
                                    {
                                        "Duration": 12,
                                        "Id": 24,
                                        "Name": "Basic testing (inc some test)",
                                        "PercentDone": 50,
                                        "StartDate": "2017-04-20T08:00:00",
                                        "leaf": true
                                    }
                                ],
                                "expanded": true
                            },
                            {
                                "Duration": 6,
                                "Id": 9,
                                "Name": "Final testing",
                                "PercentDone": 0,
                                "StartDate": "2017-05-05T08:00:00",
                                "ManuallyScheduled": true,
                                "leaf": true
                            },
                            {
                                "Duration": 0,
                                "Id": 7,
                                "Name": "Delivery",
                                "PercentDone": 40,
                                "StartDate": "2017-05-12T17:00",
                                "ManuallyScheduled": true,
                                "leaf": true
                            }
                        ],
                        "cls": "project",
                        "expanded": true
                    }
                ]
        });


        //this.taskStore = new Gnt.examples.ganttscheduler.store.TaskStore({
        //    calendarManager : new Gnt.data.CalendarManager({ calendarClass : 'Gnt.data.calendar.BusinessTime' })
        //});

        var cm = new Gnt.data.CrudManager({
            autoLoad  : true,
            taskStore: gntTaskStore,
            assignmentStore: assignmentStore,
            resourceStore: resourceStore,
            dependencyStore: dependencyStore,
            transport : {
                load : {
                    url : 'data/data.json'
                },
                sync : {
                    url : 'TODO'
                }
            }
        });

        var gantt = this.gantt = new Gnt.examples.ganttscheduler.view.Gantt({
            crudManager : cm,
            startDate: new Date(2017, 0, 11),//
            title       : this.title ? null : 'Gantt chart'
        });

        // gantt.on('zoomchange', function() {
        //     this.scheduler.normalGrid.scrollTask.cancel();
        // }, this);

        Ext.apply(this, {
            items: [
                {
                    xtype     : 'scheduler-navigation',
                    id        : 'navigation'
                },
                {
                    xtype  : 'container',
                    itemId : 'maincontainer',
                    region : 'center',
                    layout : 'border',
                    items  : [
                        this.gantt,

                        {
                            xtype  : 'container',
                            itemId : 'subViewContainer',
                            layout : {
                                type           : 'card',
                                deferredRender : true
                            },
                            // layout : 'fit',
                            split  : true,
                            region : 'south',
                            height   : 200,

                            items : [
                                {
                                    xtype                : 'scheduler-resourceschedule',
                                    crudManager          : gantt.crudManager,
                                    partnerTimelinePanel : gantt,
                                    // Share non-working time visualization
                                    calendar             : gantt.getTaskStore().getCalendar()
                                },
                                {
                                    xtype                : 'scheduler-resourcehistogram',
                                    partnerTimelinePanel : gantt,
                                    crudManager          : gantt.crudManager
                                },
                                {
                                    xtype : 'scheduler-resourcelist',
                                    store : gantt.resourceStore
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype     : 'scheduler-settings',
                    rowHeight : this.gantt.getRowHeight()
                }
            ]
        });

        this.callParent(arguments);
    },

    onDestroy : function() {
        this.gantt.crudManager.destroy();
        this.callParent();

    }

});
