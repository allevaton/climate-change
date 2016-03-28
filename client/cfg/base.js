'use strict';
let path = require('path');
let defaultSettings = require('./defaults');

// Additional npm or bower modules to include in builds
// Add all foreign plugins you may need into this array
// @example:
// let npmBase = path.join(__dirname, '../node_modules');
// let additionalPaths = [ path.join(npmBase, 'react-bootstrap') ];
let additionalPaths = [];

module.exports = {
  additionalPaths: additionalPaths,
  port: defaultSettings.port,
  debug: true,
  devtool: 'eval',
  output: {
    path: path.join(__dirname, '/../dist/assets'),
    filename: 'app.js',
    publicPath: defaultSettings.publicPath
  },
  devServer: {
    contentBase: './src/',
    historyApiFallback: true,
    hot: true,
    port: defaultSettings.port,
    publicPath: defaultSettings.publicPath,
    noInfo: false
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      actions: `${defaultSettings.srcPath}/actions/`,
      api: `${defaultSettings.srcPath}/api/`,
      components: `${defaultSettings.srcPath}/components/`,
      containers: `${defaultSettings.srcPath}/containers/`,
      constants: `${defaultSettings.srcPath}/constants/`,
      dispatcher: `${defaultSettings.srcPath}/dispatcher/`,
      sources: `${defaultSettings.srcPath}/sources/`,
      reducers: `${defaultSettings.srcPath}/reducers/`,
      selectors: `${defaultSettings.srcPath}/selectors/`,
      stores: `${defaultSettings.srcPath}/stores/`,
      styles: `${defaultSettings.srcPath}/styles/`,
      config: `${defaultSettings.srcPath}/config/` + process.env.REACT_WEBPACK_ENV
    }
  },
  module: {}
};
