const foo = (input: string) => input;

// @ts-ignore
foo(10000);

// -----------------------------------------------------
// We should avoid using
//   "@ts-ignore",
// instead please use
//   "@ts-expect-error"
// -----------------------------------------------------
// @ts-expect-error | Reason: demo purpose
foo(20000);

export { foo };
