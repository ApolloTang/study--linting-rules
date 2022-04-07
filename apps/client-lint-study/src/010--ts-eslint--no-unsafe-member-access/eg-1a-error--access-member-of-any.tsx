import { untypedObj } from './really-bad-typescript';

// warning! you are accessing a property on an 'any' type object
console.warn(untypedObj.prop);
