'use strict';

var path = require('path');
var _ = require('underscore');

var rootPath = path.normalize(__dirname);
var servicePath = path.normalize(rootPath + '/services');
var env = process.env.NODE_ENV || 'development';

var prodConfig = {
  env: env,
  port: process.env.PORT || 8080,
  mongoUri: process.env.MONGOLAB_URI,
  paths: {
    root: rootPath,
    services: servicePath
  }
};

var devConfig = _.clone(prodConfig);

devConfig.mongoUri = 'mongodb://localhost:27017';

var configs = {
  production: prodConfig,
  development: devConfig
};

module.exports = configs[env];
