export class Stack {
  private items: number[]=[];

  push(item: number) {
      this.items.push(item);
  }// them vao dau hang
  pop() {
      return this.items.pop();
  }// xoa phan tu tren cung

  peek() {
      return this.items[this.items.length - 1];
  }//xem phan tu tren cung

  isEmpty(): boolean {
      return this.items.length === 0;
  }
}
