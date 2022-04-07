const myObject = {
  sayName(this: void, name: string) {
    return name;
  },
};

const { sayName } = myObject;
// const sayName = myObject.sayName.bind(myObject);
console.warn(sayName('foo'));

export {};
