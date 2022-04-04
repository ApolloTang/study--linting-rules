import { untypedObj } from './really-bad-typescript';

// TODO This is only temporary
// ---------------------------
// Need to fix upstream typescript in './really-bad-typescript.ts'
// but for now we know the shape of type used in this file:
type temporaryFix_dataType = {
  prop: string;
  method: () => string;
};

(untypedObj as temporaryFix_dataType).method();
