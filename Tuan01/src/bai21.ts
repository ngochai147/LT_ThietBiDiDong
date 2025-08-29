export class Repository<T> {
    private data: T[] = [];
    add(item: T) { this.data.push(item); }
    getAll(): T[] { return this.data; }
  }