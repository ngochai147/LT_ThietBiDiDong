import helloAsync from "./bai1";
import { runTask } from "./bai11";
import { callTask } from "./bai12";
import { runWithError } from "./bai13";
import { numberAfter1s } from "./bai14";
import { runSequential } from "./bai15";
import { runParallel } from "./bai16";
import { iteratePromises } from "./bai17";
import resolveWithTen from "./bai2";
import rejectMessage from "./bai3";
import getRandomNumber from "./bai4";
import simulateTask from "./bai5";
import promiseRunAll from "./bai6";
import promiseRunRace from "./bai7";
import promiseChain from "./bai8";
import filterNumbers from "./bai9";

//Bai 1
helloAsync.then((message) => console.log("Bai 1: " + message))
//Bai 2
console.log(resolveWithTen().then((message) => console.log("Bai 2: " + message)))
//Bai 3
console.log(rejectMessage().then((message) => console.log("Bai 3: " + message))
    .catch((message) => console.log("Loi bai 3: " + message)))
//bai 4
console.log(getRandomNumber().then((message) => console.log("Bai 4: " + message))
    .catch((message) => console.log("Loi bai 4: " + message)))
//bai 5
console.log(simulateTask(500).then((message) => console.log("Bai 5: " + message)))
//bai 6
promiseRunAll(1000, 1500, 2000).then((message) => { console.log("Bai 6: " + message) })
//bai 7
promiseRunRace(1000, 1000, 2000).then((message) => { console.log("Bai 7: " + message) })
//Bai 8
console.log(promiseChain(2).then((message) => console.log("Bai 8: " + message)))
//bai9
filterNumbers([1,2,3,4,5,6]).then((message) => { console.log("Bai 9: " + message) })
//bai10
console.log(getRandomNumber().then((message) => console.log("Bai 10: " + message))
    .catch((message) => console.log("Loi bai 10: " + message))
    .finally(()=> console.log("Bai 10:Done")))
//bai11
runTask()
//bai 12
callTask()
//bai 13
runWithError()
//bai 14
numberAfter1s(10).then(a=> console.log("Bai 14: "+a))
//bai 15
runSequential()
//bai 16
runParallel()
//bai 17
iteratePromises()
