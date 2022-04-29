import { data } from './really-bad-typescript';

const foo = data;
//    ^^^^^^^^^^ Unsafe assignment of an `any` value.
//
// Note that the above is an eslint error, it is not a typescript
// compiler error. Typescript compiler does not stop you assigning
// an 'any' type to a variable.

export { foo };
