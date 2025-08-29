"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stack = void 0;
class Stack {
    constructor() {
        this.items = [];
    }
    push(item) {
        this.items.push(item);
    } // them vao dau hang
    pop() {
        return this.items.pop();
    } // xoa phan tu tren cung
    peek() {
        return this.items[this.items.length - 1];
    } //xem phan tu tren cung
    isEmpty() {
        return this.items.length === 0;
    }
}
exports.Stack = Stack;
