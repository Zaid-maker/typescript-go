//// [tests/cases/conformance/expressions/typeGuards/typeGuardOfFormTypeOfOther.ts] ////

//// [typeGuardOfFormTypeOfOther.ts]
class C { private p: string };

var str: string;
var bool: boolean;
var num: number;
var strOrNum: string | number;
var strOrBool: string | boolean;
var numOrBool: number | boolean
var strOrNumOrBool: string | number | boolean;
var strOrC: string | C;
var numOrC: number | C;
var boolOrC: boolean | C;
var emptyObj: {};
var c: C;

// A type guard of the form typeof x === s, 
// where s is a string literal with any value but 'string', 'number' or 'boolean',
//  - when true, removes the primitive types string, number, and boolean from the type of x, or
//  - when false, has no effect on the type of x.

if (typeof strOrC === "Object") {
    c = strOrC; // C
}
else {
    var r2: string = strOrC; // string
}
if (typeof numOrC === "Object") {
    c = numOrC; // C
}
else {
    var r3: number  = numOrC; // number
}
if (typeof boolOrC === "Object") {
    c = boolOrC; // C
}
else {
    var r4: boolean = boolOrC; // boolean
}
if (typeof strOrC === "Object" as string) { // comparison is OK with cast
    c = strOrC; // error: but no narrowing to C
}
else {
    var r5: string = strOrC; // error: no narrowing to string
}

if (typeof strOrNumOrBool === "Object") {
    let q1: {} = strOrNumOrBool; // {}
}
else {
    let q2: string | number | boolean = strOrNumOrBool; // string | number | boolean
}

// A type guard of the form typeof x !== s, where s is a string literal,
//  - when true, narrows the type of x by typeof x === s when false, or
//  - when false, narrows the type of x by typeof x === s when true.
if (typeof strOrC !== "Object") {
    var r2: string = strOrC; // string
}
else {
    c = strOrC; // C
}
if (typeof numOrC !== "Object") {
    var r3: number = numOrC; // number
}
else {
    c = numOrC; // C
}
if (typeof boolOrC !== "Object") {
    var r4: boolean = boolOrC; // boolean
}
else {
    c = boolOrC; // C
}

if (typeof strOrNumOrBool !== "Object") {
    let q1: string | number | boolean = strOrNumOrBool; // string | number | boolean
}
else {
    let q2: {} = strOrNumOrBool; // {}
}


//// [typeGuardOfFormTypeOfOther.js]
class C {
    p;
}
;
var str;
var bool;
var num;
var strOrNum;
var strOrBool;
var numOrBool;
var strOrNumOrBool;
var strOrC;
var numOrC;
var boolOrC;
var emptyObj;
var c;
if (typeof strOrC === "Object") {
    c = strOrC;
}
else {
    var r2 = strOrC;
}
if (typeof numOrC === "Object") {
    c = numOrC;
}
else {
    var r3 = numOrC;
}
if (typeof boolOrC === "Object") {
    c = boolOrC;
}
else {
    var r4 = boolOrC;
}
if (typeof strOrC === "Object") {
    c = strOrC;
}
else {
    var r5 = strOrC;
}
if (typeof strOrNumOrBool === "Object") {
    let q1 = strOrNumOrBool;
}
else {
    let q2 = strOrNumOrBool;
}
if (typeof strOrC !== "Object") {
    var r2 = strOrC;
}
else {
    c = strOrC;
}
if (typeof numOrC !== "Object") {
    var r3 = numOrC;
}
else {
    c = numOrC;
}
if (typeof boolOrC !== "Object") {
    var r4 = boolOrC;
}
else {
    c = boolOrC;
}
if (typeof strOrNumOrBool !== "Object") {
    let q1 = strOrNumOrBool;
}
else {
    let q2 = strOrNumOrBool;
}
