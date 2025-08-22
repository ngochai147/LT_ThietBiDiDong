"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(name, age) {
        this.name = name,
            this.age = age;
    }
    display() {
        console.log(this);
    }
}
exports.Person = Person;
