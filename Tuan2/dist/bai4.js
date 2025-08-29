"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomNumber() {
    return new Promise((resolve, reject) => {
        const num = Math.random();
        if (num >= 0.5) {
            resolve(num);
        }
        else {
            reject("Failed");
        }
    });
}
exports.default = getRandomNumber;
