import { untypedObj } from './really-bad-typescript';

// TODO This is only temporary
// ---------------------------
// Need to fix upstream typescript in './really-bad-typescript.ts'
// but for now know we know the shape of type used in this file:
type temporaryFix_dataType = {
  prop: string;
};

console.warn((untypedObj as temporaryFix_dataType).prop);
