import { data } from './really-bad-typescript';

// TODO This is only temporary
// ---------------------------
// Need to fix upstream typescript in './really-bad-typescript.ts'
// but for now know we know the shape of type used in this file:
type temporaryFix_dataType = {
  data: string;
};

const foo = data as temporaryFix_dataType;

export { foo };
