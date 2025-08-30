"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadFile = downloadFile;
function downloadFile(filename) {
    console.log(`Bai 25: downloading file: ${filename}`);
    setTimeout(() => {
        console.log(`Bai 25: download complete: ${filename}`);
    }, 3000);
}
