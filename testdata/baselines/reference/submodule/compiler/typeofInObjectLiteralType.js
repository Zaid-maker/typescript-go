//// [tests/cases/compiler/typeofInObjectLiteralType.ts] ////

//// [typeofInObjectLiteralType.ts]
var a: { b: number; c: typeof b }; // Should give error for attempting to use type query on b.

//// [typeofInObjectLiteralType.js]
var a;
