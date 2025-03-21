//// [tests/cases/conformance/expressions/optionalChaining/optionalChainingInParameterInitializer.ts] ////

//// [optionalChainingInParameterInitializer.ts]
// https://github.com/microsoft/TypeScript/issues/36295
const a = (): { d: string } | undefined => undefined;
((b = a()?.d) => {})();

//// [optionalChainingInParameterInitializer.js]
const a = () => undefined;
((b = a()?.d) => { })();
