console.info(String('foo') === 'foo'); // true
console.info(new String('foo') === 'foo'); // false

// eslint-disable-next-line
function isFoo(input: String) {
  return input === 'foo';
}
isFoo('foo'); // true
isFoo(String('foo')); // true
isFoo(new String('foo')); // false

function isFoo2(input: string) {
  return input === 'foo';
}
isFoo2('foo'); // true
isFoo2(String('foo')); // true
// @ts-expect-error Argument of type 'String' is not assignable to parameter of type 'string'
isFoo2(new String('foo')); // false

export {};
