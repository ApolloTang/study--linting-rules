// 'use strict';
import foo from './dependency'
foo()

function bar() {
  console.log('bar-this: ', this)
}
bar()

