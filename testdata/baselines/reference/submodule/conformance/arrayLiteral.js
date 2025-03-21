//// [tests/cases/conformance/types/specifyingTypes/typeLiterals/arrayLiteral.ts] ////

//// [arrayLiteral.ts]
// valid uses of array literals

var x = [];
var x = new Array(1);

var y = [1];
var y = [1, 2];
var y = new Array<number>();

var x2: number[] = [];
var x2: number[] = new Array(1);

var y2: number[] = [1];
var y2: number[] = [1, 2];
var y2: number[] = new Array<number>();

//// [arrayLiteral.js]
var x = [];
var x = new Array(1);
var y = [1];
var y = [1, 2];
var y = new Array();
var x2 = [];
var x2 = new Array(1);
var y2 = [1];
var y2 = [1, 2];
var y2 = new Array();
