"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function rejectMessage() {
    return new Promise((resolve, rejects) => {
        setTimeout(() => {
            rejects("Something went wrong");
        }, 1000);
    });
}
exports.default = rejectMessage;
