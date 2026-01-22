
<br><a name="module_grunt-check-outdated/options/checkoutdated"></a>

## grunt-check-outdated/options/checkoutdated
> options/checkoutdated.js: grunt-check-outdated


* [grunt-check-outdated/options/checkoutdated](#module_grunt-check-outdated/options/checkoutdated)
    * [.getCheckOutdatedPath(grunt)](#module_grunt-check-outdated/options/checkoutdated.getCheckOutdatedPath) ⇒ <code>string</code>
    * [.getChkOutdatedOptions()](#module_grunt-check-outdated/options/checkoutdated.getChkOutdatedOptions) ⇒ <code>object</code>
    * [.getChkOutdatedIgnoreOptions()](#module_grunt-check-outdated/options/checkoutdated.getChkOutdatedIgnoreOptions) ⇒ <code>object</code>
    * [.getOptions()](#module_grunt-check-outdated/options/checkoutdated.getOptions) ⇒ <code>Object</code>
    * [.getTaskOptions(task)](#module_grunt-check-outdated/options/checkoutdated.getTaskOptions) ⇒ <code>Object</code>
    * [.toArgs(grunt, task, [options])](#module_grunt-check-outdated/options/checkoutdated.toArgs) ⇒ <code>Promise.&lt;Object&gt;</code>


<br><a name="module_grunt-check-outdated/options/checkoutdated.getCheckOutdatedPath"></a>

### grunt-check-outdated/options/checkoutdated.getCheckOutdatedPath(grunt) ⇒ <code>string</code>
> Returns the path to the check-outdated

**Returns**: <code>string</code> - path to check-outdated  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 


<br><a name="module_grunt-check-outdated/options/checkoutdated.getChkOutdatedOptions"></a>

### grunt-check-outdated/options/checkoutdated.getChkOutdatedOptions() ⇒ <code>object</code>
> Returns default settings for basic check-outdated options.

**Returns**: <code>object</code> - default settings for basic check-outdated options.  

<br><a name="module_grunt-check-outdated/options/checkoutdated.getChkOutdatedIgnoreOptions"></a>

### grunt-check-outdated/options/checkoutdated.getChkOutdatedIgnoreOptions() ⇒ <code>object</code>
> Returns default settings for basic check-outdated ignore options.

**Returns**: <code>object</code> - default settings for basic check-outdated ignore options.  

<br><a name="module_grunt-check-outdated/options/checkoutdated.getOptions"></a>

### grunt-check-outdated/options/checkoutdated.getOptions() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'check_outdated'.

**Returns**: <code>Object</code> - check_outdated default options  

<br><a name="module_grunt-check-outdated/options/checkoutdated.getTaskOptions"></a>

### grunt-check-outdated/options/checkoutdated.getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'check_outdated'.> >  Note:>  - Default options and configuration options have already been merged.>  - Array-valued options (notably `checkoutdated.columns`) are treated as>    *explicit overrides*:>      If the user specifies an array in the task configuration, it fully>      replaces the corresponding default array.>  - This behavior is intentional and allows users to precisely control>    which columns are emitted, without implicit completion or merging.

**Returns**: <code>Object</code> - 'check_outdated' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-check-outdated/options/checkoutdated.toArgs"></a>

### grunt-check-outdated/options/checkoutdated.toArgs(grunt, task, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>
> Converts grunt task specific options for 'check_outdated' to an array>  of arguments for the check-outdated CLI.> >  Note:>  - All values under `options.checkoutdated` (columns, depth, global, preferwanted, ignore, opts)>    are passed **as-is** to the third-party tool `checkoutdated`.>  - No validation of these values is performed here, because:>      1. Validating columns or other flags would require keeping in sync with>         `checkoutdated` versions, which is impractical.>      2. The third-party tool is responsible for handling invalid inputs.>  - Responsibility of `toArgs` is only to consistently transform the merged task options>    into CLI arguments for the spawn call.

**Returns**: <code>Promise.&lt;Object&gt;</code> - resolves with `{ args, opts }`  

| Param | Type | Description |
| --- | --- | --- |
| grunt | <code>grunt</code> |  |
| task | <code>grunt.task</code> |  |
| [options] | <code>Object</code> | optional pre-merged task options |

