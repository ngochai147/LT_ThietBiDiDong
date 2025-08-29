"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}
exports.default = simulateTask;
