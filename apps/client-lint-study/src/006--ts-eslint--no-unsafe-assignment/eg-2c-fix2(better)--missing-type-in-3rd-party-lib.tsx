import { data2 } from '@myscope/util--fake-3rd-party-lib';

// using module augmentation
declare module '@myscope/util--fake-3rd-party-lib' {
  export const data2: { data: string };
}

const foo = data2;

export { foo };
