const name = { a: 'a' };
let msg = `hello my name is ${name}`; // hello my name is [object Object]
console.warn(msg);

let getName = () => [1, 2, 3, 4];
msg = `hello my name is ${getName()}`; // hello my name is 1,2,3,4
console.warn(msg);

getName = () => [];
msg = `hello my name is ${getName()}`; // hello my name is
console.warn(msg);

export {};
