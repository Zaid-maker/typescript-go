//// [tests/cases/compiler/reachabilityChecks7.ts] ////

//// [reachabilityChecks7.ts]
// async function without return type annotation - error
async function f1() {    
}

let x = async function() {
}

// async function with which promised type is void - return can be omitted
async function f2(): Promise<void> {
    
}

async function f3(x) {
    if (x) return 10;
}

async function f4(): Promise<number> {
    
}

function voidFunc(): void {
}

function calltoVoidFunc(x) {
    if (x) return voidFunc();
}

declare function use(s: string): void;
let x1 = () => { use("Test"); }

//// [reachabilityChecks7.js]
async function f1() {
}
let x = async function () {
};
async function f2() {
}
async function f3(x) {
    if (x)
        return 10;
}
async function f4() {
}
function voidFunc() {
}
function calltoVoidFunc(x) {
    if (x)
        return voidFunc();
}
let x1 = () => { use("Test"); };
