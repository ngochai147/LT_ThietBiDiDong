"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchUser20 = fetchUser20;
async function fetchUser20(id) {
    const delay = Math.floor(Math.random() * 3000) + 200;
    return new Promise((resolve, reject) => {
        if (delay <= 2000) {
            resolve({ id, name: `Bai 20: UserId:${id}` });
        }
        else {
            reject(new Error(`Timeout: ${delay} API call for user ${id}  took more than 2s`));
        }
    });
}
