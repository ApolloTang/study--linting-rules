const myObject = {
  prop: 'this is the property you have been looking for',
  getProp() {
    return this.prop;
  },
};

// const { getProp } = myObject; // getProp is now unbound,

const getProp = myObject.getProp.bind(myObject);
console.info('fixed: ', getProp());


export {};
