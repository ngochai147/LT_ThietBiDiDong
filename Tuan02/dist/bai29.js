"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queueProcess = queueProcess;
async function queueProcess(tasks) {
    for await (const task of tasks) {
        console.log("Bai 29:", task);
    }
}
