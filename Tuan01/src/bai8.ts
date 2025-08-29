export class Product {
    private name: string;
    private  price:number;

    constructor(name:string ,  price:number) {
        this.name = name;
        this.price = price;
    }
    public get $price(): number {
		return this.price;
	}

	public set $price(value: number) {
		this.price = value;
	}
    public get $name(): string {
		return this.name;
	}

	public set $name(value: string) {
		this.name = value;
	}
}



