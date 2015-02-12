'use strict';

var express = require('express');
var router = express.Router();

var loadToolsRoute = function(config, connection) {

  router.get('/', function(req, res, next) {
    res.send('respond with a resource');
  });

  return router;
};

module.exports = loadToolsRoute;
