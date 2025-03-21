//// [tests/cases/compiler/isArray.ts] ////

//// [isArray.ts]
var maybeArray: number | number[];


if (Array.isArray(maybeArray)) {
    maybeArray.length; // OK
}
else {
    maybeArray.toFixed(); // OK
}

//// [isArray.js]
var maybeArray;
if (Array.isArray(maybeArray)) {
    maybeArray.length;
}
else {
    maybeArray.toFixed();
}
