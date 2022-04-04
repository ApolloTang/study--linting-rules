// @ts-expect-error | Reason 3rd party missing type declaration
import { someObj1 } from '@myscope/util--fake-3rd-party-lib';
// tsc doesn't know the type of data1, so it label it as 'any' type

console.warn(someObj1.prop); // <-- warning! we are accessing a variable in 'any' type object
