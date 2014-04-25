'use strict';
var Filter = require('broccoli-filter');
var handlebars = require("handlebars");

var hbsFilter = function (inputTree, options) {

  if (!(this instanceof hbsFilter)) {
    return new hbsFilter(inputTree, options);
  }

  this.options = options || {};
  this.context = this.options.context || {};
  this.inputTree = inputTree;
};

hbsFilter.prototype = Object.create(Filter.prototype);
hbsFilter.prototype.constructor = hbsFilter;

hbsFilter.prototype.extensions = ['hbs', 'hbs.html', 'handlebars', 'handlebars.html'];
hbsFilter.prototype.targetExtension = 'html';

hbsFilter.prototype.processString = function (str, file) {
  var template = handlebars.compile(str);
  return template(this.context);
};

module.exports = hbsFilter;