import { data } from './really-bad-typescript';

// warning! you are assigning an 'any' type to a variable
const foo = data;

// note typescript is okay with any (this eslint rule give you extra protection)
// eslint-disable-next-line
// const iTakeAny = (a:any) => a;

export { foo };
