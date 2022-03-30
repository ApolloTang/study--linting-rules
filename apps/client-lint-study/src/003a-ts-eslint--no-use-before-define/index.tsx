// Calling function before declare
// -------------------------------
// @ts-expect-error | Reason: tsc complain foo is used before declare
foo(10000);
const foo = (input: number) => input;

bar(10000);
function bar(input: number) {
  return input;
}

// Using Enum before declare
// -------------------------
// @ts-expect-error | Reason: tsc complain Enum is used before declare
const myEnum: MyEnum = MyEnum.a;
enum MyEnum {
  'a',
}

// Using type before declare
// -------------------------
const obj: objType = {
  bar: 'bar',
};
interface objType {
  bar: string;
}

export { obj, myEnum };
