// super keyword
// The super keyword is used to access and call functions on an object's parent.
// it is mainly used to overcome of using call method
 class Person {
     constructor(name) {
         this.name = name;
         
     }
     describe() {
         console.log(`I am ${this.name} and I am ${this.age} years old.`);
     }
 }
  class anotherperson extends Person{
        constructor(name,age){
            super(name)
             this.age=age
            }
  }
    const newperson = new anotherperson('John', 19);
    newperson.describe();
    console.log(newperson instanceof Person);//true
    console.log(newperson instanceof anotherperson);//true
    console.log(anotherperson instanceof Person); // false
   // Because classes are not instances of other classes but functions are instances of other functions.