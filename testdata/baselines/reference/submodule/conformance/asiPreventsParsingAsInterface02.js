//// [tests/cases/conformance/interfaces/interfaceDeclarations/asiPreventsParsingAsInterface02.ts] ////

//// [asiPreventsParsingAsInterface02.ts]
function f(interface: number, I: string) {
    interface   // This should be the identifier 'interface'
    I           // This should be the identifier 'I'
    {}          // This should be a block body
}

//// [asiPreventsParsingAsInterface02.js]
function f(interface, I) {
    interface;
    I;
    { }
}
