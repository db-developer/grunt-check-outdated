
<br><a name="module_grunt-check-outdated/tasks/checkoutdated"></a>

## grunt-check-outdated/tasks/checkoutdated
> tasks/checkoutdated.js: grunt-check-outdated


* [grunt-check-outdated/tasks/checkoutdated](#module_grunt-check-outdated/tasks/checkoutdated)
    * [.execute(grunt, task, obj)](#module_grunt-check-outdated/tasks/checkoutdated.execute)
    * [.runTask()](#module_grunt-check-outdated/tasks/checkoutdated.runTask) ⇒ <code>Promise</code>
    * [.registerMultiTask(grunt)](#module_grunt-check-outdated/tasks/checkoutdated.registerMultiTask)


<br><a name="module_grunt-check-outdated/tasks/checkoutdated.execute"></a>

### grunt-check-outdated/tasks/checkoutdated.execute(grunt, task, obj)
> Return a promise for executing>    'node --[node opts] check-outdated --[opts]'


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-check-outdated/tasks/checkoutdated.runTask"></a>

### grunt-check-outdated/tasks/checkoutdated.runTask() ⇒ <code>Promise</code>
> Run the check-outdated task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-check-outdated/tasks/checkoutdated.registerMultiTask"></a>

### grunt-check-outdated/tasks/checkoutdated.registerMultiTask(grunt)
> Registers the 'check_outdated' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

