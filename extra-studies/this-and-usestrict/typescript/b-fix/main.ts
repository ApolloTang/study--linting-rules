// 'use strict';
import foo from './dependency'
foo()

function bar(this:any) {
  console.log('bar-this: ', this)
}
bar()

