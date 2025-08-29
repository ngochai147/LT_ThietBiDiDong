class Animal28 {
    protected makeSound(): void {
      console.log("Some generic animal sound");
    }
  
  }
  
  export class Dog28 extends Animal28 {
    protected makeSound(): void {
      console.log("Gau gau gau!");
    }
  }
  
  export class Cat28 extends Animal28 {
    public makeSound(): void {
      console.log("Meow meow");
    }
  }