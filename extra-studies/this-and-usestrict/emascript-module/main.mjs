// 'use strict';
import foo from './dependency.mjs'
foo()

function bar() {
  console.log('bar-this: ', this)
}
bar()

