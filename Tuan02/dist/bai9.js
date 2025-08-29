"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function filterNumbers(arr) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(arr.filter((num) => num % 2 === 0));
        }, 1000);
    });
}
exports.default = filterNumbers;
