interface Vehicle { drive(): void; }
export class Ve_Car implements Vehicle {
  drive() { console.log("Car driving"); }
}
export class Ve_Bike implements Vehicle {
  drive() { console.log("Bike driving"); }
}