// @ts-expect-error | Reason 3rd party missing type declaration
import { data1 } from '@myscope/util--fake-3rd-party-lib';
// tsc don't know the type of data1, so it label it as 'any' type

// warning! you are assigning an 'any' type to a variable
const foo = data1;

// I know the type of data and I am going assert it for you
type dataType = {
  data: string;
};
const bar = data1 as dataType;

export { foo, bar };
