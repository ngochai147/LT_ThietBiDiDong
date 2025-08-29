class BaseAnimal {
    eat() { console.log("Eating..."); }
  }
export  class Dog extends BaseAnimal {
    bark() { console.log("Gau Gau!"); }
  }
export  class Cat extends BaseAnimal {
    meow() { console.log("Meow!"); }
  }