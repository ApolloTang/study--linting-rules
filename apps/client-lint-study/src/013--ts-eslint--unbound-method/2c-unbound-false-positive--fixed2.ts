const myObject = {
  sayName(this: void, name: string) {
    //    ^^^^
    // formal-parameter 'this' only exist in typescript
    return name;
  },
};

const { sayName } = myObject;
// const sayName = myObject.sayName.bind(myObject);
console.warn(sayName('foo'));

export {};
