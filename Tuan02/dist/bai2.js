"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function resolveWithTen() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}
exports.default = resolveWithTen;
