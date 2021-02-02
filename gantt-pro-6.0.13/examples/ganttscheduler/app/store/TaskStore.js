Ext.define('Gnt.examples.ganttscheduler.store.TaskStore', {
    extend                           : 'Gnt.data.TaskStore',
    // Schedule by constraints
    scheduleByConstraints            : true,
    // Activate logic to warn on     :
    // - violating dependencies
    // - potential scheduling conflicts
    checkDependencyConstraint        : true,
    checkPotentialConflictConstraint : true,

    rootVisible                      : false
});
