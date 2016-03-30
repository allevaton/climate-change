'use strict';
// ## bootstrap-webpack Configuration

module.exports = {
  // ### Scripts
  // Any scripts here set to false will never
  // make it to the client, it's not packaged
  // by webpack.
  scripts: {
    'transition': false,
    'alert': false,
    'button': false,
    'carousel': false,
    'collapse': false,
    'dropdown': false,
    'modal': false,
    'tooltip': false,
    'popover': false,
    'scrollspy': false,
    'tab': false,
    'affix': false
  },
  // ### Styles
  // Enable or disable certain less components and thus remove
  // the css for them from the build.
  styles: {
    'mixins': true,

    'normalize': true,
    'print': false,

    'scaffolding': true,
    'type': true,
    'code': true,
    'grid': true,
    'tables': false,
    'forms': true,
    'buttons': true,

    'component-animations': false,
    'glyphicons': true,
    'dropdowns': true,
    'button-groups': true,
    'input-groups': true,
    'navs': false,
    'navbar': false,
    'breadcrumbs': false,
    'pagination': false,
    'pager': false,
    'labels': true,
    'badges': false,
    'jumbotron': false,
    'thumbnails': false,
    'alerts': false,
    'progress-bars': false,
    'media': true,
    'list-group': true,
    'panels': false,
    'wells': true,
    'close': true,

    'modals': false,
    'tooltip': false,
    'popovers': false,
    'carousel': false,

    'utilities': true,
    'responsive-utilities': true
  }
};
