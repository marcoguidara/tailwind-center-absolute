# @marcoguidara/tailwind-center-absolute

> A plugin that provides utilities for centering an element on x/y axis.

## Installation:

```sh
$ npm i https://github.com/marcoguidara/tailwind-center-absolute
```

## Tailwind configuration (`tailwind.config.js` file):

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
    require('@marcoguidara/tailwind-center-absolute'),
    // ...
  ],
};
```

## Use examples:

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

<!-- Center center both horizontally and vertically with media query: @media (min-width: 640px)-->
<div class="relative">
  <div class="sm:center-absolute">
    <!-- content -->
  </div>
</div>
```

## Generated css:

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

@media (min-width: 640px) {
  .sm:center-absolute-y {
    position: absolute;
    top: 50%;
    transform: translateY(-50%)
  }

  .sm:center-absolute-x {
    position: absolute;
    left: 50%;
    transform: translateX(-50%)
  }

  .sm:center-absolute {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
  }
}
/* 
* ...other responsive variants based on theme options
*/

/* ... */
```

## License

@marcoguidara/tailwind-center-absolute is licensed under the MIT License.

## Credits

Created with [create-tailwind-plugin](https://github.com/Landish/create-tailwind-plugin).
