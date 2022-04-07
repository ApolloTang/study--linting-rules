const myObject = {
  prop: 'this is the property you have been looking for',
  getProp() {
    return this.prop;
  },
};

console.info('ok: ', myObject.getProp());

const getProp = myObject.getProp.bind(myObject);
console.info('fixed: ', getProp());

export {};
