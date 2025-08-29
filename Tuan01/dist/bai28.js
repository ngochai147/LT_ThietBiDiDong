"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cat28 = exports.Dog28 = void 0;
class Animal28 {
    makeSound() {
        console.log("Some generic animal sound");
    }
}
class Dog28 extends Animal28 {
    makeSound() {
        console.log("Gau gau gau!");
    }
}
exports.Dog28 = Dog28;
class Cat28 extends Animal28 {
    makeSound() {
        console.log("Meow meow");
    }
}
exports.Cat28 = Cat28;
