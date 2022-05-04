const myObject = {
  prop: 'this is the property you have been looking for',
  getProp() {
    return this.prop;
  },
};

console.info('ok: ', myObject.getProp());

const { getProp } = myObject; // getProp is now unbound,
//                               meaning the method getProp() is no longer
//                               attached to myObject, this is no longer point to myObject
console.info('error: ', getProp());

export {};
