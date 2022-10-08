"use strict";
// 1. in 操作符收窄 
function move(animal) {
    if ("swim" in animal) {
        animal; // (parameter) animal: Fish | Human
    }
    else {
        animal; // (parameter) animal: Bird | Human
    }
}
// 函数返回的类型是类型判断式
function isFish(pet) {
    return pet.swim !== undefined;
}
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
if (isFish(pet)) {
    pet.swim(); // let pet: Fish
}
else {
    pet.fly(); // let pet: Bird
}
function getSmallPet() {
    return;
}
// 非空断言 (non-null assertion)
// 在 shape.radius 加一个 ! 来表示 radius 是一定存在的
function getArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.sideLength ** 2;
        default:
            const _exhaustiveCheck = shape;
            // Type 'Triangle' is not assignable to type 'never'.
            return _exhaustiveCheck;
    }
}
//# sourceMappingURL=2narrowing.js.map