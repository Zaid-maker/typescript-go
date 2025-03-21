//// [tests/cases/compiler/duplicateIdentifierInCatchBlock.ts] ////

//// [duplicateIdentifierInCatchBlock.ts]
var v;
try { } catch (e) {
    function v() { }
}

function w() { }
try { } catch (e) {
    var w;
}

try { } catch (e) {
    var x;
    function x() { } // error
    function e() { } // error
    var p: string;
    var p: number; // error
}

//// [duplicateIdentifierInCatchBlock.js]
var v;
try { }
catch (e) {
    function v() { }
}
function w() { }
try { }
catch (e) {
    var w;
}
try { }
catch (e) {
    var x;
    function x() { }
    function e() { }
    var p;
    var p;
}
