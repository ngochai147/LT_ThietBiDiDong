"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFileWait5 = downloadFileWait5;
function wait() {
    return new Promise((resolve) => setTimeout(resolve, 5000));
}
async function downloadFileWait5(filename) {
    console.log(`Bai 26: downloading file: ${filename}`);
    await wait();
    console.log(`Bai 26: download complete: ${filename}`);
}
