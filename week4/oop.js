//five ways of creating objects

//using {} or object literals
/*const myObject = {
    property1: "value1",
    property2: "value2",
    method1: function () {
        console.log(hello from method1);
    }
}*/
//console.log(Object.getPrototypeOf(myObject));

//object.create method()
const animal = {
    sound: "animalSound",
    makeSound: function () {
        console.log(this.sound);
    },
    makeSound() {
        return 'This is ${this.sound}'
    }
};
const dog = Object.create(animal);
dog.sound = "woof";
dog.makeSound();
//console.log(dog);

//Using thhe constructor functions
function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = function () {
        console.log('Hello my name is ${this.name}');
    }
}
const person1 = new Person("Veronique", 23);
const person2 = new Person("Veroni", 24);
const person3 = new Person("nique", 25);
const person4 = new Person("ronique", 26);
console.log(person1);
person1.greet();

//using ES6 classes
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        console.log('${this.make} is stsrting')
    }
}
const car1 = newCar("Range Rover", "sport");
const car2 = newCar("Toyota", "Harrier");
const car3 = newCar("Buggati", "Chiron");
console.log(car3);

//using 
