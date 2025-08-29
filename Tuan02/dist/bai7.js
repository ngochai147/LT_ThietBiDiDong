"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function simulateTask(time) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Task done in ${time}`);
        }, time);
    });
}
function promiseRunRace(promise1, promise2, promise3) {
    return Promise.race([
        simulateTask(promise1),
        simulateTask(promise2),
        simulateTask(promise3)
    ]);
}
exports.default = promiseRunRace;
