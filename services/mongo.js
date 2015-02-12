'use strict';

var Promise = require('bluebird');
var mongodb = Promise.promisifyAll(require('mongodb'));

function init(mongoUri) {

  console.log("URI", mongoUri);

  return mongodb.MongoClient.connectAsync(mongoUri);
}

module.exports.init = init;
