//// [tests/cases/conformance/es6/destructuring/destructuringParameterDeclaration1ES6.ts] ////

//// [destructuringParameterDeclaration1ES6.ts]
// Conformance for emitting ES6

// A parameter declaration may specify either an identifier or a binding pattern.
// The identifiers specified in parameter declarations and binding patterns
// in a parameter list must be unique within that parameter list.

// If the declaration includes a type annotation, the parameter is of that type
function a1([a, b, [[c]]]: [number, number, string[][]]) { }
function a2(o: { x: number, a: number }) { }
function a3({j, k, l: {m, n}, q: [a, b, c]}: { j: number, k: string, l: { m: boolean, n: number }, q: (number|string)[] }) { };
function a4({x, a}: { x: number, a: number }) { }

a1([1, 2, [["world"]]]);
a1([1, 2, [["world"]], 3]);


// If the declaration includes an initializer expression (which is permitted only
// when the parameter list occurs in conjunction with a function body),
// the parameter type is the widened form (section 3.11) of the type of the initializer expression.

function b1(z = [undefined, null]) { };
function b2(z = null, o = { x: 0, y: undefined }) { }
function b3({z: {x, y: {j}}} = { z: { x: "hi", y: { j: 1 } } }) { }

interface F1 {
    b5(z, y, [, a, b], {p, m: { q, r}});
}

function b6([a, z, y] = [undefined, null, undefined]) { }
function b7([[a], b, [[c, d]]] = [[undefined], undefined, [[undefined, undefined]]]) { }

b1([1, 2, 3]);  // z is widen to the type any[]
b2("string", { x: 200, y: "string" });
b2("string", { x: 200, y: true });


// If the declaration specifies a binding pattern, the parameter type is the implied type of that binding pattern (section 5.1.3)
enum Foo { a }
function c0({z: {x, y: {j}}}) { }
function c1({z} = { z: 10 }) { }
function c2({z = 10}) { }
function c3({b}: { b: number|string} = { b: "hello" }) { }
function c5([a, b, [[c]]]) { }
function c6([a, b, [[c=1]]]) { }

c0({z : { x: 1, y: { j: "world" } }});      // Implied type is { z: {x: any, y: {j: any}} }
c0({z : { x: "string", y: { j: true } }});  // Implied type is { z: {x: any, y: {j: any}} }

c1();             // Implied type is {z:number}?
c1({ z: 1 })      // Implied type is {z:number}? 

c2({});         // Implied type is {z?: number}
c2({z:1});      // Implied type is {z?: number}

c3({ b: 1 });     // Implied type is { b: number|string }.

c5([1, 2, [["string"]]]);               // Implied type is is [any, any, [[any]]]
c5([1, 2, [["string"]], false, true]);  // Implied type is is [any, any, [[any]]]


// A parameter can be marked optional by following its name or binding pattern with a question mark (?)
// or by including an initializer.

interface F2 {
    d3([a, b, c]?);
    d4({x, y, z}?);
    e0([a, b, c]);
}

class C2 implements F2 {
    constructor() { }
    d3() { }
    d4() { }
    e0([a, b, c]) { }
}

class C3 implements F2 {
    d3([a, b, c]) { }
    d4({x, y, z}) { }
    e0([a, b, c]) { }
}

function d5({x, y} = { x: 1, y: 2 }) { }
d5();  // Parameter is optional as its declaration included an initializer

// Destructuring parameter declarations do not permit type annotations on the individual binding patterns,
// as such annotations would conflict with the already established meaning of colons in object literals.
// Type annotations must instead be written on the top- level parameter declaration

function e1({x: number}) { }  // x has type any NOT number
function e2({x}: { x: number }) { }  // x is type number
function e3({x}: { x?: number }) { }  // x is an optional with type number
function e4({x: [number,string,any] }) { }  // x has type [any, any, any]
function e5({x: [a, b, c]}: { x: [number, number, number] }) { }  // x has type [any, any, any]

function e6({x: [number, number, number]}) { }  // error, duplicate identifier;




//// [destructuringParameterDeclaration1ES6.js]
function a1([a, b, [[c]]]) { }
function a2(o) { }
function a3({ j, k, l: { m, n }, q: [a, b, c] }) { }
;
function a4({ x, a }) { }
a1([1, 2, [["world"]]]);
a1([1, 2, [["world"]], 3]);
function b1(z = [undefined, null]) { }
;
function b2(z = null, o = { x: 0, y: undefined }) { }
function b3({ z: { x, y: { j } } } = { z: { x: "hi", y: { j: 1 } } }) { }
function b6([a, z, y] = [undefined, null, undefined]) { }
function b7([[a], b, [[c, d]]] = [[undefined], undefined, [[undefined, undefined]]]) { }
b1([1, 2, 3]);
b2("string", { x: 200, y: "string" });
b2("string", { x: 200, y: true });
var Foo;
(function (Foo) {
    Foo[Foo["a"] = 0] = "a";
})(Foo || (Foo = {}));
function c0({ z: { x, y: { j } } }) { }
function c1({ z } = { z: 10 }) { }
function c2({ z = 10 }) { }
function c3({ b } = { b: "hello" }) { }
function c5([a, b, [[c]]]) { }
function c6([a, b, [[c = 1]]]) { }
c0({ z: { x: 1, y: { j: "world" } } });
c0({ z: { x: "string", y: { j: true } } });
c1();
c1({ z: 1 });
c2({});
c2({ z: 1 });
c3({ b: 1 });
c5([1, 2, [["string"]]]);
c5([1, 2, [["string"]], false, true]);
class C2 {
    constructor() { }
    d3() { }
    d4() { }
    e0([a, b, c]) { }
}
class C3 {
    d3([a, b, c]) { }
    d4({ x, y, z }) { }
    e0([a, b, c]) { }
}
function d5({ x, y } = { x: 1, y: 2 }) { }
d5();
function e1({ x: number }) { }
function e2({ x }) { }
function e3({ x }) { }
function e4({ x: [number, string, any] }) { }
function e5({ x: [a, b, c] }) { }
function e6({ x: [number, number, number] }) { }
