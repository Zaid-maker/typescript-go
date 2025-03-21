//// [tests/cases/compiler/constDeclarations-validContexts.ts] ////

//// [constDeclarations-validContexts.ts]
// Control flow statements with blocks
if (true) { 
    const c1 = 0;
}
else { 
    const c2 = 0;
}

while (true) { 
    const c3 = 0;
}

do { 
    const c4 = 0;
} while (true);

var obj;
with (obj) {
    const c5 = 0;
}

for (var i = 0; i < 10; i++) {
    const c6 = 0;
}

for (var i2 in {}) {
    const c7 = 0;
}

if (true) {
    label: const c8 = 0;
}

while (false) {
    label2: label3: label4: const c9 = 0;
}

// Try/catch/finally
try {
    const c10 = 0;
}
catch (e) {
    const c11 = 0;
}
finally {
    const c12 = 0;
}

// Switch
switch (0) {
    case 0:
        const c13 = 0;
        break;
    default:
        const c14 = 0;
        break;
}

// blocks
{
    const c15 = 0;
    {
        const c16 = 0
        label17: const c17 = 0;
    }
}

// global
const c18 = 0;

// functions
function F() {
    const c19 = 0;
}

var F2 = () => {
    const c20 = 0;
};

var F3 = function () {
    const c21 = 0;
};

// modules
module m {
    const c22 = 0;

    {
          const c23 = 0;
    }
}

// methods
class C {
    constructor() {
        const c24 = 0;
    }

    method() {
        const c25 = 0;
    }

    get v() {
        const c26 = 0;
        return c26; 
    }

    set v(value) {
        const c27 = value;
    }
}

// object literals
var o = {
    f() {
        const c28 = 0;
    },
    f2: () => {
        const c29 = 0;
    }
}

//// [constDeclarations-validContexts.js]
if (true) {
    const c1 = 0;
}
else {
    const c2 = 0;
}
while (true) {
    const c3 = 0;
}
do {
    const c4 = 0;
} while (true);
var obj;
with (obj) {
    const c5 = 0;
}
for (var i = 0; i < 10; i++) {
    const c6 = 0;
}
for (var i2 in {}) {
    const c7 = 0;
}
if (true) {
    label: const c8 = 0;
}
while (false) {
    label2: label3: label4: const c9 = 0;
}
try {
    const c10 = 0;
}
catch (e) {
    const c11 = 0;
}
finally {
    const c12 = 0;
}
switch (0) {
    case 0:
        const c13 = 0;
        break;
    default:
        const c14 = 0;
        break;
}
{
    const c15 = 0;
    {
        const c16 = 0;
        label17: const c17 = 0;
    }
}
const c18 = 0;
function F() {
    const c19 = 0;
}
var F2 = () => {
    const c20 = 0;
};
var F3 = function () {
    const c21 = 0;
};
var m;
(function (m) {
    const c22 = 0;
    {
        const c23 = 0;
    }
})(m || (m = {}));
class C {
    constructor() {
        const c24 = 0;
    }
    method() {
        const c25 = 0;
    }
    get v() {
        const c26 = 0;
        return c26;
    }
    set v(value) {
        const c27 = value;
    }
}
var o = {
    f() {
        const c28 = 0;
    },
    f2: () => {
        const c29 = 0;
    }
};
