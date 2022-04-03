import { data } from './local-lib';

// warning! you are assigning an 'any' type to a variable
const foo = data;

// I know the type of data and I am going assert it for you
type dataType = {
  data: string;
};
const bar = data as dataType;

export { foo, bar };
