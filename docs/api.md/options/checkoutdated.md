
<br><a name="module_grunt-check-outdated/options/checkoutdated"></a>

## grunt-check-outdated/options/checkoutdated
> options/checkoutdated.js: grunt-check-outdated


* [grunt-check-outdated/options/checkoutdated](#module_grunt-check-outdated/options/checkoutdated)
    * [~getCheckOutdatedPath(grunt)](#module_grunt-check-outdated/options/checkoutdated..getCheckOutdatedPath) ⇒ <code>string</code>
    * [~getChkOutdatedOptions()](#module_grunt-check-outdated/options/checkoutdated..getChkOutdatedOptions) ⇒ <code>object</code>
    * [~getChkOutdatedIgnoreOptions()](#module_grunt-check-outdated/options/checkoutdated..getChkOutdatedIgnoreOptions) ⇒ <code>object</code>
    * [~getOptions()](#module_grunt-check-outdated/options/checkoutdated..getOptions) ⇒ <code>Object</code>
    * [~getTaskOptions(task)](#module_grunt-check-outdated/options/checkoutdated..getTaskOptions) ⇒ <code>Object</code>
    * [~toArgs(grunt, task)](#module_grunt-check-outdated/options/checkoutdated..toArgs) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>


<br><a name="module_grunt-check-outdated/options/checkoutdated..getCheckOutdatedPath"></a>

### grunt-check-outdated/options/checkoutdated~getCheckOutdatedPath(grunt) ⇒ <code>string</code>
> Returns the path to the check-outdated

**Returns**: <code>string</code> - path to check-outdated  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 


<br><a name="module_grunt-check-outdated/options/checkoutdated..getChkOutdatedOptions"></a>

### grunt-check-outdated/options/checkoutdated~getChkOutdatedOptions() ⇒ <code>object</code>
> Returns default settings for basic check-outdated options.

**Returns**: <code>object</code> - default settings for basic check-outdated options.  

<br><a name="module_grunt-check-outdated/options/checkoutdated..getChkOutdatedIgnoreOptions"></a>

### grunt-check-outdated/options/checkoutdated~getChkOutdatedIgnoreOptions() ⇒ <code>object</code>
> Returns default settings for basic check-outdated ignore options.

**Returns**: <code>object</code> - default settings for basic check-outdated ignore options.  

<br><a name="module_grunt-check-outdated/options/checkoutdated..getOptions"></a>

### grunt-check-outdated/options/checkoutdated~getOptions() ⇒ <code>Object</code>
> Defines and returns the set of options that is passed to task 'check_outdated'.

**Returns**: <code>Object</code> - check_outdated default options  

<br><a name="module_grunt-check-outdated/options/checkoutdated..getTaskOptions"></a>

### grunt-check-outdated/options/checkoutdated~getTaskOptions(task) ⇒ <code>Object</code>
> Returns grunt task specific options for 'check_outdated'.>  Note: 'check_outdated' default options and configuration options>        have already been merged!

**Returns**: <code>Object</code> - 'check_outdated' options for grunt task  

| Param | Type |
| --- | --- |
| task | <code>grunt.task</code> | 


<br><a name="module_grunt-check-outdated/options/checkoutdated..toArgs"></a>

### grunt-check-outdated/options/checkoutdated~toArgs(grunt, task) ⇒ <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code>
> Convert grunt task specific options for 'check_outdated' to an array>  of arguments, which will be used for calling check-outdated.

**Returns**: <code>Promise.&lt;Array.&lt;Object&gt;&gt;</code> - { args, opts }  

| Param | Type |
| --- | --- |
| grunt | <code>grunt</code> | 
| task | <code>grunt.task</code> | 

