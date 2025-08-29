export class Box<T> {
    private value!: T;
    set(v: T) { this.value = v; }
    get(): T { return this.value; }
  }
  