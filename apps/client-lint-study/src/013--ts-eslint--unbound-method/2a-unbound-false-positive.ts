const myObject = {
  sayName(name: string) {
    // this is never used in this method
    return name;
  },
};

const { sayName } = myObject;
console.warn(sayName('foo'));

export {};
