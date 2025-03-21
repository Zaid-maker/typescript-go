//// [tests/cases/compiler/inKeywordAndIntersection.ts] ////

//// [inKeywordAndIntersection.ts]
class A { a = 0 }
class B { b = 0 }

function f10(obj: A & { x: string } | B) {
    if (obj instanceof Object) {
        obj;  // A & { x: string } | B
    }
    else {
        obj;  // Error
    }
}

// Repro from #50844

interface InstanceOne {
    one(): void
}

interface InstanceTwo {
    two(): void
}

const instance = {} as InstanceOne | InstanceTwo

const ClassOne = {} as { new(): InstanceOne } & { foo: true };

if (instance instanceof ClassOne) {
    instance.one();
}


//// [inKeywordAndIntersection.js]
class A {
    a = 0;
}
class B {
    b = 0;
}
function f10(obj) {
    if (obj instanceof Object) {
        obj;
    }
    else {
        obj;
    }
}
const instance = {};
const ClassOne = {};
if (instance instanceof ClassOne) {
    instance.one();
}
