const myObject = {
  sayName(name: string) {
    return name;
  },
};

const { sayName } = myObject;
console.warn(sayName('foo'));

export {};
