//// [tests/cases/conformance/parser/ecmascript5/parserSbp_7.9_A9_T3.ts] ////

//// [parserSbp_7.9_A9_T3.ts]
// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check Do-While Statement for automatic semicolon insertion
 *
 * @path bestPractice/Sbp_7.9_A9_T3.js
 * @description Execute do { \n ; \n }while(false) true
 */

//CHECK#1
do {
  ;
} while (false) true



//// [parserSbp_7.9_A9_T3.js]
do {
    ;
} while (false);
true;
