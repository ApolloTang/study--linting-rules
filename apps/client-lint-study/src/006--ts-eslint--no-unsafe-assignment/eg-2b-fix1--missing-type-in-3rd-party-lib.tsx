// @ts-expect-error | Reason 3rd party missing type declaration
import { data1 } from '@myscope/util--fake-3rd-party-lib';
// tsc don't know the type of data1, so it label it as 'any' type

// I know the type of data and I am going assert it for you
type dataType = {
  prop: string;
};
const foo = data1 as dataType;

export { foo };
