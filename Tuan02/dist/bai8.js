"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function promiseChain(num) {
    return Promise.resolve(num)
        .then(num => num * num)
        .then(num => num * 2)
        .then(num => num + 5);
}
exports.default = promiseChain;
