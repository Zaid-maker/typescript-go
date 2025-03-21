//// [tests/cases/compiler/interfaceInReopenedModule.ts] ////

//// [interfaceInReopenedModule.ts]
module m {
}

// In second instance of same module, exported interface is not visible
module m {
    interface f {}
    export class n { 
        private n: f;
    }
}


//// [interfaceInReopenedModule.js]
var m;
(function (m) {
    class n {
        n;
    }
    m.n = n;
})(m || (m = {}));
