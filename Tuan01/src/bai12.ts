interface Flyable {
  fly(): void;
}

interface Swimmable {
  swim(): void;
}

export class Bird implements Flyable {
  constructor(public name: string) {}
  fly(): void {
    console.log(`${this.name} is flying`);
  }
}

export class Fish implements Swimmable {
  constructor(public name: string) {}
  swim(): void {
    console.log(`${this.name} is swimming`);
  }
}
