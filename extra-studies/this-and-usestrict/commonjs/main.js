'use strict';
const foo = require('./dependency.js')
foo()

function bar() {
  console.log('bar-this: ', this)
}
bar()

