class Person {
  firstName: string;
  secondName: string;
  age: number;

  constructor(firstname: string, secondname: string, age: number) {
    this.firstName = firstname;
    this.secondName = secondname;
    this.age = age;
  }
}

const person1 = new Person("Alex", "smith", 23);
const person2 = new Person("Charles", "smith", 43);
const person3 = new Person("Jimmy", "smith", 22);

console.log(
  "Person 1\nFirst name:" +
    person1.firstName +
    "\nSecond name: " +
    person1.secondName +
    "\nage: " +
    person1.age
);
console.log(
  "Person 2\nFirst name:" +
    person2.firstName +
    "\nSecond name: " +
    person2.secondName +
    "\nage: " +
    person2.age
);
console.log(
  "Person 3\nFirst name:" +
    person3.firstName +
    "\nSecond name: " +
    person3.secondName +
    "\nage: " +
    person3.age
);
