/* eslint-disable */

// @ts-ignore
const complexCalculation = (a):any => ({ data: a });

// @ts-ignore
const data = complexCalculation('abc') as any;
// @ts-ignore
const data2 = complexCalculation('xyz') as any;

export { data, data2 };
