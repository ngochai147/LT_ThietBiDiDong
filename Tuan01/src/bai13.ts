abstract class Shape {
    abstract area(): number;
  }
  export class Square extends Shape {
    constructor(private side: number) { super(); }
    area(): number { return this.side * this.side; }
  }
  export class Circle extends Shape {
    constructor(private r: number) { super(); }
    area(): number { return Math.PI * this.r * this.r; }
  }
  