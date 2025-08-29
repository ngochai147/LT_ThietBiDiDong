"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bai1_1 = require("./bai1");
const bai10_1 = require("./bai10");
const bai11_1 = require("./bai11");
const bai12_1 = require("./bai12");
const bai13_1 = require("./bai13");
const bai14_1 = require("./bai14");
const bai15_1 = require("./bai15");
const bai16_1 = require("./bai16");
const bai17_1 = require("./bai17");
const bai18_1 = require("./bai18");
const bai19_1 = require("./bai19");
const bai2_1 = require("./bai2");
const bai3_1 = require("./bai3");
const bai4_1 = require("./bai4");
const bai5_1 = require("./bai5");
const bai6_1 = require("./bai6");
const bai7_1 = require("./bai7");
const bai8_1 = require("./bai8");
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
const bai30_1 = require("./bai30");
//bai 1
console.log("-------------Bai-1-----------");
var person = new bai1_1.Person("NgocHai", 21);
person.display();
console.log("-------------Bai-2-----------");
//bai 2
var student = new bai2_1.Student("NgocHai", 21, 12);
student.displayAll();
console.log("-------------Bai-3-----------");
//bai3
var car = new bai3_1.Car("Mercedes", "C300", 20);
car.displayCar();
console.log("-------------Bai-4-----------");
//bai4
var rectangle = new bai4_1.Rectangle(10, 15);
console.log("Dien tich: " + rectangle.calculateArea());
console.log("Chu vi: " + rectangle.calculatePerimeter());
console.log("-------------Bai-5-----------");
//bai5
var bankAccount = new bai5_1.BankAccount(1000);
console.log("deposit: " + bankAccount.deposit(500));
console.log("withdraw: " + bankAccount.withdraw(600));
//bai6
var book = new bai6_1.Book("1000 le 1 dem", "NgocHai", 2000);
//bai 7
console.log("-------------Bai-7-----------");
var user = new bai7_1.User("Ngochai");
user.$name = "Tannghi";
console.log(user.$name);
console.log("-------------Bai-8-----------");
//bai8
var products = [
    new bai8_1.Product("Iphone 16", 10),
    new bai8_1.Product("Camera", 150),
    new bai8_1.Product("Lenovo Legion", 120),
];
const filter = products.filter(p => p.$price > 100);
filter.forEach(p => {
    console.log(p.$name + ": " + p.$price);
});
console.log("-------------Bai-9-----------");
//bai 9
var animal = {
    name: "husky",
    sound() {
        "Gau gau gau";
    },
};
console.log("name: " + animal.name + " " + animal.sound);
//bai 10
console.log("-------------Bai-10-----------");
const account = new bai10_1.Account("NgocHai", "123456", "A01");
console.log(account);
console.log("-------------Bai-11-----------");
//bai 11
var dog = new bai11_1.Dog();
dog.eat();
dog.bark();
var cat = new bai11_1.Cat();
cat.eat();
cat.meow();
console.log("-------------Bai-12-----------");
//bai 12
var bird = new bai12_1.Bird("Sparrow");
bird.fly();
var fish = new bai12_1.Fish("Salmon");
fish.swim();
console.log("-------------Bai-13-----------");
//bai 13
var square = new bai13_1.Square(10);
console.log("square: " + square.area());
var circle = new bai13_1.Circle(10);
console.log("circle: " + circle.area());
console.log("-------------Bai-14-----------");
//bai 14
var developer = new bai14_1.Developer("Ngoc Hai");
developer.code();
var manager = new bai14_1.Manager("Messi");
manager.manage();
console.log("-------------Bai-15-----------");
//bai 15
const lib = new bai15_1.Library();
const book1 = new bai6_1.Book("1000 le 1 dem", "Nguyen van A", 5000);
lib.addBook(book);
lib.addBook(book1);
console.log(lib);
console.log("-------------Bai-16-----------");
//bai 16
const numberBox1 = new bai16_1.Box();
numberBox1.set(100);
console.log(numberBox1.get());
const numberBox2 = new bai16_1.Box();
numberBox2.set("this is type string");
console.log(numberBox2.get());
//bai 17
console.log("-------------Bai-17-----------");
var logger1 = bai17_1.Logger.getInstance();
logger1.log(" message to console");
console.log("-------------Bai-18-----------");
//bai 18
var mathAdd = bai18_1.MathUtil.add(5, 6);
var mathSub = bai18_1.MathUtil.sub(5, 6);
var mathMul = bai18_1.MathUtil.mul(5, 6);
var mathDiv = bai18_1.MathUtil.div(12, 6);
console.log("Add: " + mathAdd);
console.log("Subtract: " + mathSub);
console.log("Multiply: " + mathMul);
console.log("Divide: " + mathDiv);
console.log("-------------Bai-19-----------");
//bai 19
var dogPoly = new bai19_1.DogPoly("Golden");
console.log(dogPoly.name + ": ");
dogPoly.sound();
//bai 20
console.log("-------------Bai-20-----------");
var ve_car = new bai20_1.Ve_Car();
ve_car.drive();
var ve_bike = new bai20_1.Ve_Bike();
ve_bike.drive();
console.log("-------------Bai-21-----------");
//bai 21
var books = new bai21_1.Repository;
books.add(new bai6_1.Book("1000 le 1 dem", "Nguyen van A", 5000));
books.add(new bai6_1.Book("Tham tu lung danh conan", "Nguyen van B", 12000));
books.add(new bai6_1.Book("OOP exercise", "Nguyen van C", 10000));
books.getAll().forEach(x => console.log(x));
//bai 22
console.log("-------------Bai-22-----------");
var s = new bai22_1.Stack();
console.log(s.isEmpty());
s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s);
console.log(s.peek());
console.log(s.pop());
console.log(s);
//bai 23
console.log("-------------Bai-23-----------");
var cash = new bai23_1.CashPayment();
cash.pay(1000);
var card = new bai23_1.CardPayment();
card.pay(1500);
//bai 24
console.log("-------------Bai-24-----------");
var fan = new bai24_1.Fan();
fan.turnOn();
var air = new bai24_1.AirConditioner();
air.turnOn();
//bai 25
console.log("-------------Bai-25-----------");
var shape = bai25_1.ShapeStatic.describe();
shape;
//bai 26
console.log("-------------Bai-26-----------");
var order = new bai26_1.Order();
products.forEach(x => order.addProduct(x));
console.log("Tong tien hoa don: " + order.totalPrice());
//bai 27
console.log("-------------Bai-27-----------");
var teacher = new bai27_1.Teacher("Thay Tien", 35, "Lap trinh thiet bi di dong");
teacher.introduce();
//bai 28
console.log("-------------Bai-28-----------");
var dog28 = new bai28_1.Dog28();
// dog28.makeSound()  khac lop se khong goi duoc do dung protected
var cat28 = new bai28_1.Cat28();
cat28.makeSound(); // sua lai public thi co the dung duoc
//bai 29
console.log("-------------Bai-29-----------");
var car29 = new bai29_1.Car29();
var robot = new bai29_1.Robot();
car29.move();
robot.move();
//bai 30
console.log("-------------Bai-30-----------");
var shool = new bai30_1.School();
shool.addStudent(new bai2_1.Student("NgocHai", 21, 12));
shool.addStudent(new bai2_1.Student("HuuThai", 21, 4));
shool.addTeacher(new bai27_1.Teacher("Thay Tien", 35, "Lap trinh thiet bi di dong"));
shool.addTeacher(new bai27_1.Teacher("Co Khanh", 35, "Lap trinh huong doi tuong"));
shool.displayInfo();
