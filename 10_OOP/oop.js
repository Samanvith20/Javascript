// object literal
 // Example
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue",
        greet: function(){
            return "Hello, my name is " + this.firstName + " " + this.lastName;
        }
    };
    console.log(person.firstName);
    console.log(person.greet());
// object constructor
    // Example
    function Person(first, last, age, eye) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
        this.greet = function(){
            return "Hello, my name is " + this.firstName + " " + this.lastName;
        }
    }
    var myFather = new Person("John", "Doe", 50, "blue");
    console.log(myFather.greet());
    //In summary, object literals are useful for creating individual, simple objects, 
    //while constructors provide a more structured and extensible way to create multiple instances of objects with shared properties and methods.