
<br><a name="module_grunt-check-outdated/tasks/checkoutdated"></a>

## grunt-check-outdated/tasks/checkoutdated
> tasks/checkoutdated.js: grunt-check-outdated


* [grunt-check-outdated/tasks/checkoutdated](#module_grunt-check-outdated/tasks/checkoutdated)
    * [.spawnAsync(grunt, config)](#module_grunt-check-outdated/tasks/checkoutdated.spawnAsync) ⇒ <code>Promise.&lt;Object&gt;</code>
    * [.execute(grunt, task, obj)](#module_grunt-check-outdated/tasks/checkoutdated.execute)
    * [.runTask()](#module_grunt-check-outdated/tasks/checkoutdated.runTask) ⇒ <code>Promise</code>
    * [.registerMultiTask(grunt)](#module_grunt-check-outdated/tasks/checkoutdated.registerMultiTask)


<br><a name="module_grunt-check-outdated/tasks/checkoutdated.spawnAsync"></a>

### grunt-check-outdated/tasks/checkoutdated.spawnAsync(grunt, config) ⇒ <code>Promise.&lt;Object&gt;</code>
> Promisified adapter for `grunt.util.spawn`.> > Wraps the callback-based `grunt.util.spawn` API into a Promise so it can be> consumed via async/await without mixing callback and business logic.> The Promise resolves with the spawn result or rejects with the execution error.

**Returns**: <code>Promise.&lt;Object&gt;</code> - Resolves with the spawn result object provided by Grunt,         or rejects with an Error if the process execution fails.  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> | The Grunt runtime instance providing `grunt.util.spawn`. |
| config | <code>Object</code> | Spawn configuration passed through to `grunt.util.spawn`. |
| config.cmd | <code>string</code> | Executable to run. |
| config.args | <code>Array.&lt;string&gt;</code> | Command-line arguments passed to the executable. |
| config.opts | <code>Object</code> | Options object forwarded to the spawn call (env, cwd, stdio). |


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
> Registers the 'check_outdated' multitask.> >  Note:>  - Any errors thrown in lower-level functions (e.g., `execute`, `toArgs`, `spawnAsync`)>    will automatically reject the returned Promise.>  - Rejected Promises are handled by logging the error and calling `done(false)` to fail>    the task.*


| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 

