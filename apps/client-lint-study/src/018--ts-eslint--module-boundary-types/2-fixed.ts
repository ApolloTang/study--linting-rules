// most of the time typescript can infer the return type
function foo(a: number) {
  return a;
}

// unless you export the function
export function bar(a: number): number {
  return a;
}
