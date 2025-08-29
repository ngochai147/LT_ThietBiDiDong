import { Book } from "./bai6";
import { User } from "./bai7";


export class Library {
  private books: Book[] = [];
  private users: User[] = [];
  addBook(b: Book) { this.books.push(b); }
}
