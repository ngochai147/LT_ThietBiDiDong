"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat = exports.Dog = void 0;
class BaseAnimal {
    eat() { console.log("Eating..."); }
}
class Dog extends BaseAnimal {
    bark() { console.log("Gau Gau!"); }
}
exports.Dog = Dog;
class Cat extends BaseAnimal {
    meow() { console.log("Meow!"); }
}
exports.Cat = Cat;
