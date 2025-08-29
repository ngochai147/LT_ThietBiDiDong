"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const helloAsync = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Hello Async");
    }, 2000);
});
exports.default = helloAsync;
