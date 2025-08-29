"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runParallel = runParallel;
const bai14_1 = require("./bai14");
async function runParallel() {
    var [a, b, c] = await Promise.all([(0, bai14_1.numberAfter1s)(2), (0, bai14_1.numberAfter1s)(4), (0, bai14_1.numberAfter1s)(3)]);
    console.log("16/First:", a);
    console.log("16/Second:", b);
    console.log("16/Third:", c);
}
