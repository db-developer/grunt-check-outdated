
<br><a name="module_grunt-check-outdated/tasks/checkoutdated"></a>

## grunt-check-outdated/tasks/checkoutdated
> tasks/checkoutdated.js: grunt-check-outdated


* [grunt-check-outdated/tasks/checkoutdated](#module_grunt-check-outdated/tasks/checkoutdated)
    * [~executeChkOutdated(grunt, task, obj)](#module_grunt-check-outdated/tasks/checkoutdated..executeChkOutdated)
    * [~runTaskChkOutdated()](#module_grunt-check-outdated/tasks/checkoutdated..runTaskChkOutdated) ⇒ <code>Promise</code>
    * [~registerMultiTaskChkOutdated(grunt)](#module_grunt-check-outdated/tasks/checkoutdated..registerMultiTaskChkOutdated)


<br><a name="module_grunt-check-outdated/tasks/checkoutdated..executeChkOutdated"></a>

### grunt-check-outdated/tasks/checkoutdated~executeChkOutdated(grunt, task, obj)
> Return a promise for executing>    'node --[node opts] check-outdated --[opts]'


| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | the runtime 'instance' of grunt. |
| task | <code>grunt.task</code> | the current task |
| obj | <code>Object</code> | wrapper for options and arguments. |


<br><a name="module_grunt-check-outdated/tasks/checkoutdated..runTaskChkOutdated"></a>

### grunt-check-outdated/tasks/checkoutdated~runTaskChkOutdated() ⇒ <code>Promise</code>
> Run the check-outdated task.

**Returns**: <code>Promise</code> - ... required by callee to terminate async call (on "then")  

<br><a name="module_grunt-check-outdated/tasks/checkoutdated..registerMultiTaskChkOutdated"></a>

### grunt-check-outdated/tasks/checkoutdated~registerMultiTaskChkOutdated(grunt)
> Registers the 'check_outdated' multitask.


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

