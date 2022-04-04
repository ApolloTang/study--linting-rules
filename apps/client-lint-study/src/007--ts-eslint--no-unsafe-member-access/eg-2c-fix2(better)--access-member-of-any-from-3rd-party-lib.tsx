import { someObj2 } from '@myscope/util--fake-3rd-party-lib';

// using module augmentation
declare module '@myscope/util--fake-3rd-party-lib' {
  export const someObj2: { prop: string };
}

console.warn(someObj2.prop);
