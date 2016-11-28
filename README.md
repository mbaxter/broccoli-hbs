## Deprecation Warning
This package is not actively maintained.  For a more full-featured implementation, 
see [broccoli-render-handlebars](https://www.npmjs.com/package/broccoli-render-handlebars).

## Usage

Example Brocfile:

```js
var hbs = require('broccoli-hbs');
module.exports = function (broccoli) {
  var tree = 'fixture';
  var context = {
    title : "Hello World",
    body: "<p>Hello!</p>"
  };
  var options = { context : context};
  return hbs(tree, options);
};
```