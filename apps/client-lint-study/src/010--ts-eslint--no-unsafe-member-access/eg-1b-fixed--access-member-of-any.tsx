import { untypedObj } from './really-bad-typescript';

// TODO This is only temporary
// Need to fix upstream typescript in './really-bad-typescript.ts'
type temporaryFix_dataType = {
  prop: string;
};

console.warn((untypedObj as temporaryFix_dataType).prop);
