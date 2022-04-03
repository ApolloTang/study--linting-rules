// @ts-expect-error | Reason 3rd party missing type declaration
import { data1 } from '@myscope/util--fake-3rd-party-lib';
// tsc doesn't know the type of data1, so it label it as 'any' type

const foo = data1; // <-- warning! we are assigning an any type to a variable

export { foo };
