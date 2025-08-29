"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    get $price() {
        return this.price;
    }
    set $price(value) {
        this.price = value;
    }
    get $name() {
        return this.name;
    }
    set $name(value) {
        this.name = value;
    }
}
exports.Product = Product;
