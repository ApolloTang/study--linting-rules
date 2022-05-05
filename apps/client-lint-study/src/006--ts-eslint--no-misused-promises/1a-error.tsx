const callback = (v: number) => {
  console.info(v);
};
[1, 2, 3].forEach(callback);

const asyncCallback = async (v: number) => {
  const result = await Promise.resolve(v);
  console.info(result);
};
[1, 2, 3].forEach(asyncCallback);

// see rule @typescript-eslint/no-floating-promises
// first before look the fix for this rule violation
export {};
