// console.log(alert("working"));
function Car(make, model, engine, mileage, price) {
    this.make = make;
    this.model = model;
    this.mileage = mileage;
    this.engine = engine;
    this.price = price;
};

class Garage {
    constructor(make, model, engine, mileage, newPrice) {
    this.make = make;
    this.model = model;
    this.mileage = mileage;
    this.engine = engine;
    this.newPrice = newPrice;
    };
    price() {
        price = (1 - (mileage / 400000)) * newPrice;
    };
    buildCar(make, model, engine, mileage, price) {
        const newCar = new Car(make, model, engine, mileage, price)
    };
};

const gtr = new Car("mercedes","gt-r","V8", 23000, 160000);
const a12 = new Car("ferrari", "a12", "v12", 2000, 280000);
const agera = new Car("koenigsegg", "agera", "v10", 6500, 880000);
const f458 = new Car("ferrari", "458", "v8", 20000, 140000);
const i8 = new Car("bmw", "i8", "v8 hyrbid", 42000, 110000);
const mp412c = new Car("mclaren", "mp4-12c", "v8", 12000, 130000);
const senna = new Car("mclaren", "senna", "v10", 100, 1200000);

console.log(newCar)