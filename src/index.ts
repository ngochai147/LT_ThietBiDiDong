import { Person } from './bai1'
import { Student } from './bai2'
import { Car } from './bai3'
import { Rectangle } from './bai4'
import { BankAccount } from './bai5'
import { Book } from './bai6'
import { User } from './bai7'

//bai 1
var person = new Person("NgocHai", 21)
person.display()
console.log("-------------------------")
//bai 2
var student = new Student("NgocHai", 21, 12)
student.displayAll()
console.log("-------------------------")
//bai3
var car = new Car("Mercedes", "C300", 20)
car.displayCar()
console.log("-------------------------")
//bai4
var rectangle = new Rectangle(10, 15)
console.log("Dien tich: " + rectangle.calculateArea())
console.log("Chu vi: " + rectangle.calculatePerimeter())
console.log("-------------------------")
//bai5
var bankAccount = new BankAccount(1000)
console.log("deposit: " + bankAccount.deposit(500))
console.log("withdraw: " + bankAccount.withdraw(600))
//bai6
var book = new Book("1000 le 1 dem", "NgocHai", 2000)

//bai 7
console.log("-------------------------")
var user=new User("Ngochai")
user.$name= "Tannghi"
console.log(user.$name)