//// [tests/cases/conformance/jsx/tsxElementResolution8.tsx] ////

//// [file.tsx]
declare module JSX {
	interface Element { }
	interface IntrinsicElements { }
}

// Error
var Div = 3;
<Div />;

// OK
function Fact(): any { return null; }
<Fact />

// Error
function Fnum(): number{ return 42; }
<Fnum />

interface Obj1 {
	new(): {};
	(): number;
}
var Obj1: Obj1;
<Obj1 />; // OK, prefer construct signatures

interface Obj2 {
	(): number;
}
var Obj2: Obj2;
<Obj2 />; // Error

interface Obj3 {
}
var Obj3: Obj3;
<Obj3 />; // Error


//// [file.jsx]
var Div = 3;
<Div />;
function Fact() { return null; }
<Fact />;
function Fnum() { return 42; }
<Fnum />;
var Obj1;
<Obj1 />;
var Obj2;
<Obj2 />;
var Obj3;
<Obj3 />;
