const myObject = {
  sayName(name: string) {
    return name;
  },
};

const sayName = myObject.sayName.bind(myObject);
console.warn(sayName('foo'));

export {};
