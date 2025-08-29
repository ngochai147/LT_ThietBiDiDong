"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runSequential = runSequential;
const bai14_1 = require("./bai14");
async function runSequential() {
    const b = await (0, bai14_1.numberAfter1s)(2);
    console.log("Second:", b);
    const a = await (0, bai14_1.numberAfter1s)(4);
    console.log("First:", a);
    const c = await (0, bai14_1.numberAfter1s)(3);
    console.log("Third:", c);
}
