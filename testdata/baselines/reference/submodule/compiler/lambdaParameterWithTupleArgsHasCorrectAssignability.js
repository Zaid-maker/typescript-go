//// [tests/cases/compiler/lambdaParameterWithTupleArgsHasCorrectAssignability.ts] ////

//// [lambdaParameterWithTupleArgsHasCorrectAssignability.ts]
type MyTupleItem = {};
type MyTuple = [MyTupleItem, ...MyTupleItem[]];

type GenericFunction<T extends MyTuple> = (...fromArgs: T) => void;

class GenericClass<T extends MyTuple> {
    from: GenericFunction<T> | undefined;
}

function createClass<T extends MyTuple>(f: GenericFunction<T>): GenericClass<T> {
    return new GenericClass<T>(/* ... use f */);
}

function consumeClass(c: GenericClass<[string, boolean]>) { }

// should work
consumeClass(createClass(str => console.log(str.length)));

// should work
consumeClass(createClass((str, _unused_num) => console.log(str.length)));


//// [lambdaParameterWithTupleArgsHasCorrectAssignability.js]
class GenericClass {
    from;
}
function createClass(f) {
    return new GenericClass();
}
function consumeClass(c) { }
consumeClass(createClass(str => console.log(str.length)));
consumeClass(createClass((str, _unused_num) => console.log(str.length)));
