// Warn you when you declare a variable as any type
let foo: any;
interface MyInterface {
  myArray: any[];
}

// -----------------------------
// In this case don't use @ts-expect-error:
// But explicite mark it as 'any'
// We want to show the warning in CLI for future tech-debt effort

// @ts-expect-error | Demo: formal-parameter is implicit 'any'
const myFunction_avoid = (input): void => {
  console.info(input);
};

// Do this: explicitly mark it as any
const myFunction_ok = (input: any): void => {
  console.info(input);
};

// You can also annotate it with 'unknown' type
const functionTakeUnknown = (input: unknown): void => {
  // console.info(input + 2);
  //              ^^^^^^^^^^[eslint @typescript-eslint/restrict-plus-operands] Operands of '+' operation must either be both strings or both numbers.
  //                        [tsserver 2571] Object is of type 'unknown'.

  // 'unknown' must be assert to a known type before any operation can be done
  console.info((input as number) + 2);
};

// Difference between 'any' and 'unknown':
// ---------------------------------------
//       any: I don't care
//   unknown: I don't know yet.

export { foo, myFunction_avoid, myFunction_ok, functionTakeUnknown };
export type { MyInterface };
