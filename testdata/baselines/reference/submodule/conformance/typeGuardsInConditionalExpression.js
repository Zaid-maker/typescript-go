//// [tests/cases/conformance/expressions/typeGuards/typeGuardsInConditionalExpression.ts] ////

//// [typeGuardsInConditionalExpression.ts]
// In the true expression of a conditional expression, 
// the type of a variable or parameter is narrowed by any type guard in the condition when true, 
// provided the true expression contains no assignments to the variable or parameter.
// In the false expression of a conditional expression, 
// the type of a variable or parameter is narrowed by any type guard in the condition when false, 
// provided the false expression contains no assignments to the variable or parameter.

function foo(x: number | string) {
    return typeof x === "string"
        ? x.length // string
        : x++; // number
}
function foo2(x: number | string) {
    return typeof x === "string"
        ? ((x = "hello") && x) // string
        : x; // number
}
function foo3(x: number | string) {
    return typeof x === "string"
        ? ((x = 10) && x) // number
        : x; // number
}
function foo4(x: number | string) {
    return typeof x === "string"
        ? x // string
        : ((x = 10) && x); // number
}
function foo5(x: number | string) {
    return typeof x === "string"
        ? x // string
        : ((x = "hello") && x); // string
}
function foo6(x: number | string) {
    // Modify in both branches
    return typeof x === "string"
        ? ((x = 10) && x) // number
        : ((x = "hello") && x); // string
}
function foo7(x: number | string | boolean) {
    return typeof x === "string"
        ? x === "hello" // boolean
        : typeof x === "boolean"
        ? x // boolean
        : x == 10; // boolean
}
function foo8(x: number | string | boolean) {
    var b: number | boolean;
    return typeof x === "string"
        ? x === "hello"
        : ((b = x) && //  number | boolean
        (typeof x === "boolean"
        ? x // boolean
        : x == 10)); // boolean
}
function foo9(x: number | string) {
    var y = 10;
    // usage of x or assignment to separate variable shouldn't cause narrowing of type to stop
    return typeof x === "string"
        ? ((y = x.length) && x === "hello") // boolean
        : x === 10; // boolean
}
function foo10(x: number | string | boolean) {
    // Mixing typeguards
    var b: boolean | number;
    return typeof x === "string"
        ? x // string
        : ((b = x) // x is number | boolean
        && typeof x === "number"
        && x.toString()); // x is number
}
function foo11(x: number | string | boolean) {
    // Mixing typeguards
    var b: number | boolean | string;
    return typeof x === "string"
        ? x // string
        : ((b = x) // x is number | boolean
        && typeof x === "number"
        && (x = 10) // assignment to x
        && x); // x is number
}
function foo12(x: number | string | boolean) {
    // Mixing typeguards
    var b: number | boolean | string;
    return typeof x === "string"
        ? ((x = 10) && x.toString().length) // number
        : ((b = x) // x is number | boolean
        && typeof x === "number"
        && x); // x is number
}

//// [typeGuardsInConditionalExpression.js]
function foo(x) {
    return typeof x === "string"
        ? x.length
        : x++;
}
function foo2(x) {
    return typeof x === "string"
        ? ((x = "hello") && x)
        : x;
}
function foo3(x) {
    return typeof x === "string"
        ? ((x = 10) && x)
        : x;
}
function foo4(x) {
    return typeof x === "string"
        ? x
        : ((x = 10) && x);
}
function foo5(x) {
    return typeof x === "string"
        ? x
        : ((x = "hello") && x);
}
function foo6(x) {
    return typeof x === "string"
        ? ((x = 10) && x)
        : ((x = "hello") && x);
}
function foo7(x) {
    return typeof x === "string"
        ? x === "hello"
        : typeof x === "boolean"
            ? x
            : x == 10;
}
function foo8(x) {
    var b;
    return typeof x === "string"
        ? x === "hello"
        : ((b = x) &&
            (typeof x === "boolean"
                ? x
                : x == 10));
}
function foo9(x) {
    var y = 10;
    return typeof x === "string"
        ? ((y = x.length) && x === "hello")
        : x === 10;
}
function foo10(x) {
    var b;
    return typeof x === "string"
        ? x
        : ((b = x)
            && typeof x === "number"
            && x.toString());
}
function foo11(x) {
    var b;
    return typeof x === "string"
        ? x
        : ((b = x)
            && typeof x === "number"
            && (x = 10)
            && x);
}
function foo12(x) {
    var b;
    return typeof x === "string"
        ? ((x = 10) && x.toString().length)
        : ((b = x)
            && typeof x === "number"
            && x);
}
