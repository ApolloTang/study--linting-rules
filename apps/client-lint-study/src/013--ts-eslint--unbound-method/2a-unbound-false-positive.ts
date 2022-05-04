const myObject = {
  sayName(name: string) {
    // 'this' keyword is never used in this method
    return name;
  },
};

const { sayName } = myObject;
//    ^^^^^^^^^^^^^^^^^^^^^^ Avoid referencing unbound methods
//                           which may cause unintentional scoping
//                           of `this`.
console.warn(sayName('foo'));

export {};
