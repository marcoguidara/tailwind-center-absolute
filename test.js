const merge = require('lodash/merge');
const cssMatcher = require('jest-matcher-css');
const postcss = require('postcss');
const tailwindcss = require('tailwindcss');
const customPlugin = require('./index.js');

expect.extend({
  toMatchCss: cssMatcher,
});

function generatePluginCss(overrides) {
  const config = {
    theme: {},
    variants: {
      // Default variants for your plugin.
      // centerAbsolute: ['responsive'],
    },
    corePlugins: false,
    plugins: [customPlugin],
  };

  return postcss(tailwindcss(merge(config, overrides)))
    .process('@tailwind utilities', {
      from: undefined,
    })
    .then(({ css }) => css);
}

test('utility classes can be generated', () => {
  return generatePluginCss().then(css => {
    expect(css).toMatchCss(`
      .center-absolute-y {
        position: absolute;
        top: 50%;
        transform: translateY(-50%)
      }

      .center-absolute-x {
        position: absolute;
        left: 50%;
        transform: translateX(-50%)
      }

      .center-absolute {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%)
      }

      @media (min-width: 640px) {
        .sm\\:center-absolute-y {
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }

        .sm\\:center-absolute-x {
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }

        .sm\\:center-absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }

      @media (min-width: 768px) {
        .md\\:center-absolute-y {
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }

        .md\\:center-absolute-x {
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }

        .md\\:center-absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }

      @media (min-width: 1024px) {
        .lg\\:center-absolute-y {
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }

        .lg\\:center-absolute-x {
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }

        .lg\\:center-absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }

      @media (min-width: 1280px) {
        .xl\\:center-absolute-y {
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }

        .xl\\:center-absolute-x {
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }

        .xl\\:center-absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }

      @media (min-width: 1536px) {
        .\\32xl\\:center-absolute-y {
          position: absolute;
          top: 50%;
          transform: translateY(-50%)
        }

        .\\32xl\\:center-absolute-x {
          position: absolute;
          left: 50%;
          transform: translateX(-50%)
        }

        .\\32xl\\:center-absolute {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%)
        }
      }`);
  });
});

// test('options can be customized', () => {
//   return generatePluginCss({
//     theme: {
//       centerAbsolute: {
//         YOUR_PLUGIN_CUSTOM_OPTION: true,
//       },
//     },
//   }).then(css => {
//     expect(css).toMatchCss(`
//     .example-utility-class {
//       display: block
//     }
//     .custom-utility-class {
//       background-color: red
//     }
//     `);
//   });
// });

// test('variants can be customized', () => {
//   return generatePluginCss({
//     theme: {
//       screens: {
//         sm: '640px',
//       },
//     },
//     variants: {
//       centerAbsolute: ['responsive'],
//     },
//   }).then(css => {
//     expect(css).toMatchCss(`
//     .center-absolute-y {
//       position: absolute;
//       top: 50%;
//       transform: translateY(-50%)
//     }

//     .center-absolute-x {
//       position: absolute;
//       left: 50%;
//       transform: translateX(-50%)
//     }

//     .center-absolute {
//       position: absolute;
//       left: 50%;
//       top: 50%;
//       transform: translate(-50%, -50%)
//     }

//     @media (min-width: 640px) {
//       .sm:center-absolute-y {
//         position: absolute;
//         top: 50%;
//         transform: translateY(-50%)
//       }

//       .sm:center-absolute-x {
//         position: absolute;
//         left: 50%;
//         transform: translateX(-50%)
//       }

//       .sm:center-absolute {
//         position: absolute;
//         left: 50%;
//         top: 50%;
//         transform: translate(-50%, -50%)
//       }
//     `);
//   });
// });
