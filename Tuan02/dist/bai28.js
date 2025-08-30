"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchProcess = batchProcess;
async function batchProcess(tasks) {
    const results = await Promise.all(tasks);
    console.log("Bai 28:", results);
}
