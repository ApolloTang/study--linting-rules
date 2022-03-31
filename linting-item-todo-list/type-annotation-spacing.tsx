type fooType = string
const foo1:fooType = "bar";
const foo2 :fooType = "bar";
const foo3 : fooType = "bar";

function fooFn1():void {}
function fooFn2() :void {}
function fooFn3() : void {}

class FooClass0 {
  name:string;
}

class FooClass2 {
  name :string;
}

class FooClass1 {
  name : string;
}

type Foo = ()=>void;
type Foo1 = () =>void;
type Foo2 = () => void;
