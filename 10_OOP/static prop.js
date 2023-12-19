// static keyword
//  the static keyword is used to define a static method or property for a class.
// Static members belong to the class itself rather than instances of the class
// static methods cannot be called on instances of the class, and static properties cannot be accessed through instances. 
// example
 class user {
        constructor(name,age){
            this.name=name
            this.age=age
        }
        static print(){
            console.log(`hello my name is ${this.name} and my age is ${this.age}`);
        }
 }
    const newuser=new user("samanvith",21)
    newuser.print() // error
    user.print() // works
    // here we cannot access the static method through the instance of the class