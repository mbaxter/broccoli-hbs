'use strict';
var hbs = require('./index');
module.exports = function (broccoli) {
  var tree = 'fixture';
  var context = {
    title : "Hello World",
    body: "<p>Hello!</p>"
  };
  var options = { context : context};
  return hbs(tree, options);
};