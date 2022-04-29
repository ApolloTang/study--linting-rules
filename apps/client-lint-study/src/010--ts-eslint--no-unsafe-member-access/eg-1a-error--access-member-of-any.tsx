import { untypedObj } from './really-bad-typescript';

console.warn(untypedObj.prop);
//           ^^^^^^^^^^^^^^^
//           Unsafe member access .prop on an `any` value.
//           warning! you are accessing a property on an 'any' type object
