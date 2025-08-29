import { Person } from './bai1'
import { Account } from './bai10'
import { Cat, Dog } from './bai11'
import { Bird, Fish } from './bai12'
import { Circle, Square } from './bai13'
import { Developer, Manager } from './bai14'
import { Library } from './bai15'
import { Box } from './bai16'
import { Logger } from './bai17'
import { MathUtil } from './bai18'
import { DogPoly } from './bai19'
import { Student } from './bai2'
import { Car } from './bai3'
import { Rectangle } from './bai4'
import { BankAccount } from './bai5'
import { Book } from './bai6'
import { User } from './bai7'
import { Product } from './bai8'
import { Animal } from './bai9';
import { Ve_Bike, Ve_Car } from './bai20';
import { Repository } from './bai21'
import { Stack } from './bai22'
import { CardPayment, CashPayment } from './bai23'
import { AirConditioner, Fan } from './bai24'
import { ShapeStatic } from './bai25'
import { Order } from './bai26'
import { Teacher } from './bai27'
import { Cat28, Dog28 } from './bai28'
import { Car29, Robot } from './bai29'
import { School } from './bai30'


//bai 1
console.log("-------------Bai-1-----------")
var person = new Person("NgocHai", 21)
person.display()
console.log("-------------Bai-2-----------")
//bai 2
var student = new Student("NgocHai", 21, 12)
student.displayAll()
console.log("-------------Bai-3-----------")
//bai3
var car = new Car("Mercedes", "C300", 20)
car.displayCar()
console.log("-------------Bai-4-----------")
//bai4
var rectangle = new Rectangle(10, 15)
console.log("Dien tich: " + rectangle.calculateArea())
console.log("Chu vi: " + rectangle.calculatePerimeter())
console.log("-------------Bai-5-----------")
//bai5
var bankAccount = new BankAccount(1000)
console.log("deposit: " + bankAccount.deposit(500))
console.log("withdraw: " + bankAccount.withdraw(600))
//bai6
var book = new Book("1000 le 1 dem", "NgocHai", 2000)

//bai 7
console.log("-------------Bai-7-----------")
var user=new User("Ngochai")
user.$name= "Tannghi"
console.log(user.$name)
console.log("-------------Bai-8-----------")
//bai8
var products: Product[]= [
    new Product("Iphone 16",10),
    new Product("Camera",150),
    new Product("Lenovo Legion",120),
]

const filter = products.filter(p => p.$price > 100);
filter.forEach(p => {
    console.log(p.$name + ": " + p.$price);});
console.log("-------------Bai-9-----------")
//bai 9
var animal:Animal={
    name:"husky",
    sound(){
        "Gau gau gau"
    },
}
console.log("name: "+animal.name+" "+animal.sound)
//bai 10
console.log("-------------Bai-10-----------")
const account = new Account("NgocHai", "123456", "A01");
console.log(account)
console.log("-------------Bai-11-----------")
//bai 11
var dog = new Dog()
dog.eat();
dog.bark();

var cat = new Cat();
cat.eat();
cat.meow();
console.log("-------------Bai-12-----------")
//bai 12
var bird = new Bird("Sparrow");
bird.fly();
var fish = new Fish("Salmon");
fish.swim();
console.log("-------------Bai-13-----------")
//bai 13
var square=new Square(10)
console.log("square: "+square.area())
var circle=new Circle(10)
console.log("circle: "+circle.area())
console.log("-------------Bai-14-----------")
//bai 14
var developer=new Developer("Ngoc Hai")
developer.code()

var manager=new Manager("Messi")
manager.manage()
console.log("-------------Bai-15-----------")
//bai 15
const lib = new Library();
const book1=new Book("1000 le 1 dem", "Nguyen van A", 5000)
lib.addBook(book);
lib.addBook(book1);
console.log(lib)
console.log("-------------Bai-16-----------")
//bai 16
const numberBox1 = new Box<number>();
numberBox1.set(100)
console.log(numberBox1.get());
const numberBox2 = new Box<string>();

numberBox2.set("this is type string")
console.log(numberBox2.get());
//bai 17
console.log("-------------Bai-17-----------")
var logger1=Logger.getInstance()
logger1.log(" message to console")
console.log("-------------Bai-18-----------")
//bai 18
var mathAdd=MathUtil.add(5,6)
var mathSub=MathUtil.sub(5,6)
var mathMul=MathUtil.mul(5,6)
var mathDiv=MathUtil.div(12,6)
console.log("Add: "+mathAdd);
console.log("Subtract: "+mathSub);
console.log("Multiply: "+mathMul);
console.log("Divide: "+mathDiv);
console.log("-------------Bai-19-----------")
//bai 19
var dogPoly=new DogPoly("Golden")
console.log(dogPoly.name+": ")
dogPoly.sound()
//bai 20
console.log("-------------Bai-20-----------")
var ve_car=new Ve_Car()
ve_car.drive()

var ve_bike=new Ve_Bike()
ve_bike.drive()
console.log("-------------Bai-21-----------")
//bai 21
var books=new Repository<Book>
books.add(new Book("1000 le 1 dem", "Nguyen van A", 5000))
books.add(new Book("Tham tu lung danh conan", "Nguyen van B", 12000))
books.add(new Book("OOP exercise", "Nguyen van C", 10000))

books.getAll().forEach(x=>console.log(x))
//bai 22
console.log("-------------Bai-22-----------")
var s = new Stack();
console.log(s.isEmpty());
s.push(10);
s.push(20);
s.push(30);
s.push(40);
console.log(s)
console.log(s.peek());  
console.log(s.pop()); 
console.log(s)
//bai 23
console.log("-------------Bai-23-----------")
var cash=new CashPayment()
cash.pay(1000)
var card=new CardPayment()
card.pay(1500)
//bai 24
console.log("-------------Bai-24-----------")
var fan=new Fan()
fan.turnOn()
var air=new AirConditioner()
air.turnOn()
//bai 25
console.log("-------------Bai-25-----------")
var shape=ShapeStatic.describe()
shape
//bai 26
console.log("-------------Bai-26-----------")
var order=new Order()
products.forEach(x=> order.addProduct(x))

console.log("Tong tien hoa don: "+order.totalPrice())
//bai 27
console.log("-------------Bai-27-----------")
var teacher=new Teacher("Thay Tien",35,"Lap trinh thiet bi di dong")
teacher.introduce()
//bai 28
console.log("-------------Bai-28-----------")
var dog28=new Dog28()
// dog28.makeSound()  khac lop se khong goi duoc do dung protected
var cat28=new Cat28()
cat28.makeSound()// sua lai public thi co the dung duoc
//bai 29
console.log("-------------Bai-29-----------")
var car29 = new Car29();
var robot = new Robot();

car29.move();  
robot.move(); 
//bai 30
console.log("-------------Bai-30-----------")
var shool=new School()
shool.addStudent(new Student("NgocHai", 21, 12))
shool.addStudent(new Student("HuuThai", 21, 4))
shool.addTeacher(new Teacher("Thay Tien",35,"Lap trinh thiet bi di dong"))
shool.addTeacher(new Teacher("Co Khanh",35,"Lap trinh huong doi tuong"))
shool.displayInfo()