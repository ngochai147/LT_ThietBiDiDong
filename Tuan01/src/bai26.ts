import { Product } from "./bai8";

  export class Order {
    private products: Product[] = [];

    addProduct(p: Product) { 
      this.products.push(p); 
    }
    totalPrice(): number {
      return this.products.reduce((sum, p) => sum + p.$price, 0);
    }
  }