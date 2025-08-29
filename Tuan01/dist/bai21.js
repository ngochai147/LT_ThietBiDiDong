"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Repository = void 0;
class Repository {
    constructor() {
        this.data = [];
    }
    add(item) { this.data.push(item); }
    getAll() { return this.data; }
}
exports.Repository = Repository;
