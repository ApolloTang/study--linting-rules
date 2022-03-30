// This is a required rule for consistency, see:
//     https://github.com/typescript-eslint/typescript-eslint/issues/50
// I am not sure if this has already been fix.
// --------------------------------------------------------------------

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const foo = () => {
  console.warn('foo');
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
function bar() {
  console.warn('foo');
}

function zoo(): void {
  console.warn('foo');
}

export { foo, bar, zoo };
