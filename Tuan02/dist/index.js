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
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = __importDefault(require("./bai2"));
const bai20_1 = require("./bai20");
const bai21_1 = require("./bai21");
const bai22_1 = require("./bai22");
const bai23_1 = require("./bai23");
const bai24_1 = require("./bai24");
const bai25_1 = require("./bai25");
const bai26_1 = require("./bai26");
const bai27_1 = require("./bai27");
const bai28_1 = require("./bai28");
const bai29_1 = require("./bai29");
const bai3_1 = __importDefault(require("./bai3"));
const bai30_1 = require("./bai30");
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
//bai 18
(0, bai18_1.fetchUser)(5).then((messsage) => console.log(messsage));
//bai 19
(0, bai19_1.fetchUsers)([3, 4, 5]).then((message) => console.log(message));
//bai 20
(0, bai20_1.fetchUser20)(10).then((message) => console.log(message)).catch((message) => console.log(message));
//bai 21
(0, bai21_1.fetchTodo)().then((data) => console.log(data));
//bai 22
(0, bai22_1.fetchMultipleTodos)([1, 2, 3, 4]);
//bai 23
(0, bai23_1.fectchCompleted)();
//bai 24
(0, bai24_1.postData)("https://jsonplaceholder.typicode.com/posts", {
    title: "Hello",
    body: "This is a test",
    userId: 11,
});
//bai 25
(0, bai25_1.downloadFile)("example.pdf");
//bai 26
(async () => {
    (0, bai26_1.downloadFileWait5)("example.pdf");
})();
//bai 27
(0, bai27_1.fetchWithRetry)("https://jsonplaceholder.typicode.com/todos/a", 5);
//bai 28
var task1 = (0, bai5_1.default)(1000);
var task2 = (0, bai5_1.default)(1000);
var task3 = (0, bai5_1.default)(1000);
var task4 = (0, bai5_1.default)(1000);
var tasks = [];
tasks.push(task1, task2, task3, task4);
(0, bai28_1.batchProcess)(tasks);
//bai 29
(0, bai29_1.queueProcess)(tasks);
//bai 30
(0, bai30_1.MultipleApiCalls)();
