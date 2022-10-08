"use strict";
const cc = {
    color: "red",
    radius: 42,
};
function draw(circle) {
    console.log(`Color was ${circle.color}`);
    console.log(`Radius was ${circle.radius}`);
}
// okay
draw({ color: "blue", radius: 42 });
let boxA = { contents: "hello" };
boxA.contents;
// (property) Box<string>.contents: string
let boxB = { contents: "world" };
boxB.contents;
// (property) StringBox.contents: string
// ReadonlyArray 类型（The ReadonlyArray Type）
// ReadonlyArray 是一个特殊类型，它可以描述数组不能被改变。
function doStuff(values) {
    // We can read from 'values'...
    const copy = values.slice();
    console.log(`The first value is ${values[0]}`);
    // ...but we can't mutate 'values'.
    values.push("hello!");
    // Property 'push' does not exist on type 'readonly string[]'.
}
const roArray = ["red", "green", "blue"];
// TypeScript 也针对 ReadonlyArray<Type> 提供了更简短的写法 readonly Type[]
function doStuff(values) { }
function readButtonInput(...args) {
    const [name, version, ...input] = args;
    // ...
}
//   基本等同于：    
function readButtonInput(name, version, ...input) {
    // ...
}
// readonly Tuples
function doSomething(pair) {
    pair[0] = "hello!";
    // Cannot assign to '0' because it is a read-only property.
}
//# sourceMappingURL=4object.js.map