"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.callTask = callTask;
const bai5_1 = __importDefault(require("./bai5"));
async function callTask() {
    var simuTask = await (0, bai5_1.default)(2000);
    console.log("Bai 12: " + simuTask);
}
