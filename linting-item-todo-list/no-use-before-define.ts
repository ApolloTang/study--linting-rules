// error| [eslint @typescript-eslint/no-use-before-define] 'StringOrNumber'
// was used before it was defined.
let myVar: StringOrNumber;
type StringOrNumber = string | number;

// error| [eslint @typescript-eslint/no-use-before-define] 'Foo'
// was used before it was defined.
const x = Foo.FOO;
enum Foo {
  FOO,
}
