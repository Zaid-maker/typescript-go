//// [tests/cases/compiler/callOnInstance.ts] ////

//// [callOnInstance.ts]
declare function D(): string; // error

declare class D { constructor (value: number); } // error

var s1: string = D(); // OK

var s2: string = (new D(1))();

declare class C { constructor(value: number); }
(new C(1))(); // Error for calling an instance

//// [callOnInstance.js]
var s1 = D();
var s2 = (new D(1))();
(new C(1))();
