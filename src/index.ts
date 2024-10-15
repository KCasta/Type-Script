// Step 1: Define the Vehicle interface with ES6 syntax
interface Vehicle {
  make: string;
  model: string;
  year: number;
  start(): void;
}

// Step 2: Implement the Vehicle interface
class Car implements Vehicle {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log("Engine started");
  }
}

// Step 3: Create an instance of the Car class
const myCar = new Car("Toyota", "Corolla", 2020);
myCar.start();
