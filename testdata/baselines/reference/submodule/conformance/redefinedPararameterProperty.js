//// [tests/cases/conformance/classes/propertyMemberDeclarations/redefinedPararameterProperty.ts] ////

//// [redefinedPararameterProperty.ts]
class Base {
    a = 1;
  }
  
  class Derived extends Base {
    b = this.a /*undefined*/;
  
    constructor(public a: number) {
        super();
    }
  }
  

//// [redefinedPararameterProperty.js]
class Base {
    a = 1;
}
class Derived extends Base {
    a;
    b = this.a;
    constructor(a) {
        this.a = a;
        super();
    }
}
