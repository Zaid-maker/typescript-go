//// [tests/cases/compiler/objectLiteralIndexers.ts] ////

//// [objectLiteralIndexers.ts]
interface A {
    x: number;
}

interface B extends A {
    y: string;
}

var a: A;
var b: B;
var c: any;

var o1: { [s: string]: A;[n: number]: B; } = { x: a, 0: b }; // string indexer is A, number indexer is B
o1 = { x: b, 0: c }; // both indexers are any
o1 = { x: c, 0: b }; // string indexer is any, number indexer is B

//// [objectLiteralIndexers.js]
var a;
var b;
var c;
var o1 = { x: a, 0: b };
o1 = { x: b, 0: c };
o1 = { x: c, 0: b };
