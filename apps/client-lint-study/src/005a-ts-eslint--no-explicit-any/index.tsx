// Warn you when you declare a variable as any type
let foo: any;
interface MyInterface {
  myArray: any[];
}

// -----------------------------
// Avoid using @ts-expect-error:
// But explicite mark it as any
// We want to show the warning in CLI for future tech-debt effort

// @ts-expect-error | Demo: formal-parameter is implicit 'any'
const myFunction_avoid = (input): void => {
  console.info(input);
};
const myFunction_ok = (input: any): void => {
  console.info(input);
};

export { foo, myFunction_avoid, myFunction_ok };
export type { MyInterface };
