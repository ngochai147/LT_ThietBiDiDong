import { Animal } from "./bai9";

  export class DogPoly implements Animal{
    name: string;

    constructor(name:string){
      this.name=name;
    }

    sound(): void {
        console.log("Gau gau gau")
    }
  }