//// [tests/cases/compiler/propertySignatures.ts] ////

//// [propertySignatures.ts]
// Should be error - duplicate identifiers
var foo1: { a:string; a: string; };

// Should be OK
var foo2: { a; };
foo2.a = 2;
foo2.a = "0";

// Should be error
var foo3: { (): string; (): string; };

// Should be OK
var foo4: { (): void; };
var test = foo();

// Should be OK
var foo5: {();};
var test = foo5();
test.bar = 2;


//// [propertySignatures.js]
var foo1;
var foo2;
foo2.a = 2;
foo2.a = "0";
var foo3;
var foo4;
var test = foo();
var foo5;
var test = foo5();
test.bar = 2;
