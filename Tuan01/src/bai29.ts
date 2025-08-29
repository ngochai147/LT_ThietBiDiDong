 interface Movable {
    move(): void;
}

export class Car29 implements Movable {
    move(): void {
        console.log("Car is moving on the road...");
    }
}

export class Robot implements Movable {
    move(): void {
        console.log("Robot is walking forward...");
    }
}
