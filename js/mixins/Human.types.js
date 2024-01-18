import { dailyRoutine } from "./DailyRoutine.js";

class Human {
  speak() {
    console.log(`${this.type} can speak...`);
  }
}

class Person extends Human {
  constructor() {
    super();
    this.type = "Person";
    Object.assign(this.__proto__, dailyRoutine);
  }
}

class Dog {
  constructor() {
    this.type = "Animal";
    Object.assign(this.__proto__, dailyRoutine);
  }
}

const person = new Person();
person.walk();
person.talk();
person.run();
person.speak();

console.log("*".repeat(20));

const dog = new Dog();
dog.walk();
dog.talk();
dog.run();

export default {};
