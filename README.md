# Hoopmeter
The jQuery Hoopmeter plugin provides Odometer functionality for transitioning numbers when you scroll to specific HTML Code. 


## Getting Started

### Before you start
* This is jQuery Plugin designed to work with HTML

### Downloading the Plugin Supported jQuery file
You can download jQuery simply from https://code.jquery.com/jquery-3.3.1.min.js

### Integration of Hoopmeter in your HTML Code

#### Include plugin with jQuery
<pre><code>
<script type="text/javascript" src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="http://qalbit.com/js/hoopmeter.jQuery.min.js"></script>
</code></pre>

#### Add default structure of HTML Code
```html
<ul id="hoopmeter-group">
	<li><span id="hoopmeter-component-1">10</span>+</li>
	<li><span id="hoopmeter-component-2">20</span>+</li>
	<li><span id="hoopmeter-component-3">30</span>+</li>
	<li><span id="hoopmeter-component-4">40</span>+</li>
</ul>
```

### Insert Custom JS code
```html
<script>
  $(function() {
    $("#hoopmeter-group").hoopmeter({
      timer: 20 /* `timer` used to speed up or down transition of numbers. */
    });
  });
</script>
```

#### Notes
* Need above HTML structure to make it workable.
* We need span tag to read values.


## Author
* Abidhusain Chidi
* abidhusain@qalbit.com
* http://www.qalbit.com

## Licensing & Support
Copyright © QalbIT Solutions <br>
Licensed under the MIT license.

