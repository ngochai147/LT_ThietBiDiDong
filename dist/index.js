"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
//bai 1
var person = new bai1_1.Person("NgocHai", 21);
person.display();
console.log("-------------------------");
//bai 2
var student = new bai2_1.Student("NgocHai", 21, 12);
student.displayAll();
console.log("-------------------------");
//bai3
var car = new bai3_1.Car("Mercedes", "C300", 20);
car.displayCar();
console.log("-------------------------");
//bai4
var rectangle = new bai4_1.Rectangle(10, 15);
console.log("Dien tich: " + rectangle.calculateArea());
console.log("Chu vi: " + rectangle.calculatePerimeter());
console.log("-------------------------");
//bai5
var bankAccount = new bai5_1.BankAccount(1000);
console.log("deposit: " + bankAccount.deposit(500));
console.log("withdraw: " + bankAccount.withdraw(600));
//bai6
var book = new bai6_1.Book("1000 le 1 dem", "NgocHai", 2000);
//bai 7
console.log("-------------------------");
var user = new bai7_1.User("Ngochai");
user.$name = "Tannghi";
console.log(user.$name);
