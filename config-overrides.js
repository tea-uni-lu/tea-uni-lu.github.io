const webpack = require('webpack');

module.exports = function override(config) {
  // Exclude node modules that may use Node.js built-in modules from being bundled for the browser
  config.externals = {
    ...config.externals,
    'crypto': 'crypto',
    'util': 'util',
  };

  // Workaround for issue with Dropbox library using 'isomorphic-fetch'
  // Set to 'node-fetch' instead of the default 'fetch' for the browser environment
  config.resolve.alias['isomorphic-fetch'] = 'node-fetch';

  // If you have other customizations to the webpack configuration, you can add them here.

  return config;
};
