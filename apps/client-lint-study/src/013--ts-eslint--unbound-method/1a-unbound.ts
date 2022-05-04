const myObject = {
  prop: 'this is the property you have been looking for',
  getProp() {
    return this.prop;
  },
};

console.info('ok: ', myObject.getProp());

const { getProp } = myObject;
//    ^^^^^^^^^^^^^^^^^^^^^^Avoid referencing unbound methods
//                          which may cause unintentional scoping of `this`
//
//      getProp is unbound; meaning the method getProp() is no longer
//      attached to myObject. the keyword 'this' is no longer point to myObject

console.info('error: ', getProp());

export {};
