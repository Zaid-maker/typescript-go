//// [tests/cases/conformance/expressions/nullishCoalescingOperator/nullishCoalescingOperatorInAsyncGenerator.ts] ////

//// [nullishCoalescingOperatorInAsyncGenerator.ts]
// https://github.com/microsoft/TypeScript/issues/37686
async function* f(a: { b?: number }) {
    let c = a.b ?? 10;
    while (c) {
        yield c--;
    }
}


//// [nullishCoalescingOperatorInAsyncGenerator.js]
async function* f(a) {
    let c = a.b ?? 10;
    while (c) {
        yield c--;
    }
}
