import helloAsync from "./bai1";
import { runTask } from "./bai11";
import { callTask } from "./bai12";
import { runWithError } from "./bai13";
import { numberAfter1s } from "./bai14";
import { runSequential } from "./bai15";
import { runParallel } from "./bai16";
import { iteratePromises } from "./bai17";
import { fetchUser } from "./bai18";
import { fetchUsers } from "./bai19";
import resolveWithTen from "./bai2";
import { fetchUser20 } from "./bai20";
import { fetchTodo } from "./bai21";
import { fetchMultipleTodos } from "./bai22";
import { fectchCompleted } from "./bai23";
import { postData } from "./bai24";
import { downloadFile } from "./bai25";
import { downloadFileWait5 } from "./bai26";
import { fetchWithRetry } from "./bai27";
import { batchProcess } from "./bai28";
import { queueProcess } from "./bai29";
import rejectMessage from "./bai3";
import { MultipleApiCalls } from "./bai30";
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
//bai 18
fetchUser(5).then((messsage)=> console.log(messsage))
//bai 19
fetchUsers([3,4,5]).then((message)=>console.log(message))
//bai 20
fetchUser20(10).then((message)=>console.log(message)).catch((message)=>console.log(message))
//bai 21
fetchTodo().then((data)=>console.log(data))
//bai 22
fetchMultipleTodos([1,2,3,4])
//bai 23
fectchCompleted()
//bai 24
postData("https://jsonplaceholder.typicode.com/posts", {
  title: "Hello",
  body: "This is a test",
  userId: 11,
});
//bai 25
downloadFile("example.pdf");
//bai 26
(async () => {
     downloadFileWait5("example.pdf");
})();
//bai 27
fetchWithRetry("https://jsonplaceholder.typicode.com/todos/a",5)
//bai 28

var task1=simulateTask(1000)
var task2=simulateTask(1000)
var task3=simulateTask(1000)
var task4=simulateTask(1000)

var tasks: Promise<any>[] = []
tasks.push(task1, task2, task3, task4);
batchProcess(tasks)
//bai 29
queueProcess(tasks)
//bai 30
MultipleApiCalls();