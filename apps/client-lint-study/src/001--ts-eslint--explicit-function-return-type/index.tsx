// The rule:
//   @typescript-eslint/explicit-function-return-type
// should be OFF. Turning OFF is a required setting for consistency, see:
//     https://github.com/typescript-eslint/typescript-eslint/issues/50
//
// This rule warn you that you have forgotten to annotate the return type
// of a function; but usually typescript is able to figure out the
// return type of a function, so there is unnecessary.

const returnString = () => 'hello world';

const returnVoid = () => {
  console.warn('foo');
};

export { returnString, returnVoid };
