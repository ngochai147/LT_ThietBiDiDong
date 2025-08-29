"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = __importDefault(require("./bai1"));
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai2_1 = __importDefault(require("./bai2"));
const bai3_1 = __importDefault(require("./bai3"));
const bai4_1 = __importDefault(require("./bai4"));
const bai5_1 = __importDefault(require("./bai5"));
const bai6_1 = __importDefault(require("./bai6"));
const bai7_1 = __importDefault(require("./bai7"));
const bai8_1 = __importDefault(require("./bai8"));
const bai9_1 = __importDefault(require("./bai9"));
//Bai 1
bai1_1.default.then((message) => console.log("Bai 1: " + message));
//Bai 2
console.log((0, bai2_1.default)().then((message) => console.log("Bai 2: " + message)));
//Bai 3
console.log((0, bai3_1.default)().then((message) => console.log("Bai 3: " + message))
    .catch((message) => console.log("Loi bai 3: " + message)));
//bai 4
console.log((0, bai4_1.default)().then((message) => console.log("Bai 4: " + message))
    .catch((message) => console.log("Loi bai 4: " + message)));
//bai 5
console.log((0, bai5_1.default)(500).then((message) => console.log("Bai 5: " + message)));
//bai 6
(0, bai6_1.default)(1000, 1500, 2000).then((message) => { console.log("Bai 6: " + message); });
//bai 7
(0, bai7_1.default)(1000, 1000, 2000).then((message) => { console.log("Bai 7: " + message); });
//Bai 8
console.log((0, bai8_1.default)(2).then((message) => console.log("Bai 8: " + message)));
//bai9
(0, bai9_1.default)([1, 2, 3, 4, 5, 6]).then((message) => { console.log("Bai 9: " + message); });
//bai10
console.log((0, bai4_1.default)().then((message) => console.log("Bai 10: " + message))
    .catch((message) => console.log("Loi bai 10: " + message))
    .finally(() => console.log("Bai 10:Done")));
//bai11
(0, bai11_1.runTask)();
//bai 12
(0, bai12_1.callTask)();
//bai 13
(0, bai13_1.runWithError)();
//bai 14
(0, bai14_1.numberAfter1s)(10).then(a => console.log("Bai 14: " + a));
//bai 15
(0, bai15_1.runSequential)();
//bai 16
(0, bai16_1.runParallel)();
//bai 17
(0, bai17_1.iteratePromises)();
