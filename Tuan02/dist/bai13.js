"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWithError = runWithError;
const bai5_1 = __importDefault(require("./bai5"));
async function runWithError() {
    try {
        const result = await (0, bai5_1.default)(500);
        console.log(result);
        throw new Error("Something went wrong!");
    }
    catch (err) {
        console.error("Caught error:", err);
    }
}
