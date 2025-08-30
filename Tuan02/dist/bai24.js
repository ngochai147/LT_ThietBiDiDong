"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = postData;
// TypeScript
async function postData(url, data) {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log("Bai 24: ", result);
        return result;
    }
    catch (error) {
        console.error("Error:", error);
    }
}
