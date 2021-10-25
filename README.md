# tailwind-center-absolute

> A plugin that provides utilities for centering an element on x/y axis.

Install the plugin from npm:

```
$ npm install tailwind-center-absolute
```

Then add the plugin to your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  variants: {
    // ...
  },
  plugins: [
    // ...
    require('tailwind-center-absolute'),
    // ...
  ],
};
```

This plugin will generate following CSS:

```css
/* ... */
 .center-absolute-y: {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
},

.center-absolute-x: {
  position: 'absolute',
  left: '50%',
  transform: 'translateX(-50%)',
},

.center-absolute: {
  position: 'absolute',
  left: '50%',
  top: '50%',
  transform: 'translate(-50%, -50%)',
},
/* ... */
```

Use examples:

```html
<!-- Center vertically -->
<div class="relative">
  <div class="center-absolute-y">
    <!-- content -->
  </div>
</div>

<!-- Center horizontally -->
<div class="relative">
  <div class="center-absolute-x">
    <!-- content -->
  </div>
</div>

<!-- Center center both horizontally and vertically -->
<div class="relative">
  <div class="center-absolute">
    <!-- content -->
  </div>
</div>
```

## License

tailwind-center-absolute is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
