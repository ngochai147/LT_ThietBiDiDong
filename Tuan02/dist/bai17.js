"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.iteratePromises = iteratePromises;
const bai14_1 = require("./bai14");
async function iteratePromises() {
    const promises = [(0, bai14_1.numberAfter1s)(1), (0, bai14_1.numberAfter1s)(2), (0, bai14_1.numberAfter1s)(3)];
    for await (const p of promises) {
        console.log("number:", p);
    }
}
