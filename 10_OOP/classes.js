// classes
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    describe() {
        console.log(`I am ${this.name} and I am ${this.age} years old.`);
    }
}
  const person = new Person('John', 19);
    person.describe();
    // Here's what happens behind the scenes when the new keyword is used:
    // A new object is created: The new keyword initiates the creation of a new JavaScript object.
    // then only the constructor is called initialize the object's properties and set up its initial state.
    // 'this' refers to the instance of the class that is being created.
    // these can  be acheive same in the function as well
    // function Person(name, age) {
    //     this.name = name;
    //     this.age = age;
    // }
    // Person.prototype.describe = function() {
    //     console.log(`I am ${this.name} and I am ${this.age} years old.`);
    // };
    // const person = new Person('John', 19);
    // person.describe();
    // it uses the prototype chain .