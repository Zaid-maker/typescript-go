//// [tests/cases/conformance/expressions/commaOperator/commaOperatorWithoutOperand.ts] ////

//// [commaOperatorWithoutOperand.ts]
var ANY: any;
var BOOLEAN: boolean;
var NUMBER: number;
var STRING: string;
var OBJECT: Object;

// Expect to have compiler errors
// Missing the second operand
(ANY, );
(BOOLEAN, );
(NUMBER, );
(STRING, );
(OBJECT, );

// Missing the first operand
(, ANY);
(, BOOLEAN);
(, NUMBER);
(, STRING);
(, OBJECT);

// Missing all operands
( , );

//// [commaOperatorWithoutOperand.js]
var ANY;
var BOOLEAN;
var NUMBER;
var STRING;
var OBJECT;
(ANY, );
(BOOLEAN, );
(NUMBER, );
(STRING, );
(OBJECT, );
(, ANY);
(, BOOLEAN);
(, NUMBER);
(, STRING);
(, OBJECT);
(, );
