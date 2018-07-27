// This file isn't transpiled, so CommonJS/ES5 must be used.

// Register babel to transpile before our tests run
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function () {};
