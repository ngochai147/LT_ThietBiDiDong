"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTask = runTask;
const bai1_1 = __importDefault(require("./bai1"));
async function runTask() {
    const result = await bai1_1.default;
    console.log("Bai 11: " + result);
}
