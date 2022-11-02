class Human{
    constructor(name, age, isFriendly){
        this.name = name;
        this.age = age;
        this.isFriendly = isFriendly;
    }
}

// const h1 = new Human("Moshe", 25, true);
// console.log(`${h1.name} is ${h1.age} years old and is ${h1.isFriendly ? 'friendly' : 'not friendly'}`)


class Animal {
    constructor(name, numLegs) {
        this.name = name
        this.numLegs = numLegs
        this.children = []
    }

    giveBirth(name){
        this.children.push(name)
    }
}


class Vehicle {
    constructor(x, y, speed, fuel) {
        this.x = x
        this.y = y
        this._speed = speed
        this._fuel = fuel;
        Vehicle.carsSold++;
    }

    set speed(speed) {
        if (speed < 0) {
            return console.log("Speed must be positive")
        }
        this._speed = speed
    }

    get speed(){
        return this._speed
    }

    set fuel(fuel) {
        if (fuel < 0 || fuel > 150) {
            return console.log("fuel must be positive less then 150");
        }
        this._fuel = fuel;
    }

    get fuel(){
        return this._fuel;
    }

    static getInfo() {
        console.log("We've sold " + Vehicle.carsSold + " vehicles.");
    }

    static calculateMoney(){
        console.log(`Made ${30000*Vehicle.carsSold} dollars`)
    }
}
// Vehicle.carsSold = 0;


const c1 = new Vehicle(1, 1, 20, 151);
const c2 = new Vehicle(1, 1, 20, 10);
// console.log(Vehicle.calculateMoney());

const c = new Vehicle()
c.x = 3
c.y = 1
c.speed = -2 // at this point, we'll get the console log saying speed needs to be positive
c1._fuel=10
c1.fuel=1
console.log(c1.fuel)



class Zoo {
    constructor() {
        this.animals = []
    }

    addAnimal(animal) {
        this.animals.push(animal)
        console.log("Added " + animal.name + " to the zoo")
    }

    showAnimals() {
        this.animals.forEach(a => console.log(a.name))

    }
}


// const cat = new Animal("Puss", 4)
// const zoo = new Zoo()

// zoo.addAnimal(cat) // prints "Added Puss to the zoo"
// zoo.showAnimals() // prints "Puss"