//// [tests/cases/conformance/types/typeParameters/typeArgumentLists/typeParameterAsTypeParameterConstraint.ts] ////

//// [typeParameterAsTypeParameterConstraint.ts]
// using a type parameter as a constraint for a type parameter is valid
// no errors expected except illegal constraints

function foo<T, U extends T>(x: T, y: U): U { return y; }

var r = foo(1, 2);
var r = foo({}, 1);

interface A {
    foo: string;
}
interface B extends A {
    bar: number;
}
var a: A;
var b: B;

var r2 = foo(a, b);
var r3 = foo({ x: 1 }, { x: 2, y: 3 });

function foo2<T, U extends { length: T }>(x: T, y: U) { return y; }
foo2(1, '');
foo2({}, { length: 2 }); 
foo2(1, { width: 3, length: 2 }); 
foo2(1, []);
foo2(1, ['']);

//// [typeParameterAsTypeParameterConstraint.js]
function foo(x, y) { return y; }
var r = foo(1, 2);
var r = foo({}, 1);
var a;
var b;
var r2 = foo(a, b);
var r3 = foo({ x: 1 }, { x: 2, y: 3 });
function foo2(x, y) { return y; }
foo2(1, '');
foo2({}, { length: 2 });
foo2(1, { width: 3, length: 2 });
foo2(1, []);
foo2(1, ['']);
