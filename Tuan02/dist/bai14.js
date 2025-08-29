"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberAfter1s = numberAfter1s;
async function numberAfter1s(num) {
    return await new Promise((resolve) => {
        setTimeout(() => resolve(num * 3), 1000);
    });
}
