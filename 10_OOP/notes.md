  ## oop (why we use)
Object-oriented programming (OOP) is a programming paradigm that uses objects, which are instances of classes, to organize code.
 In JavaScript, OOP is prototype-based rather than class-based, which means that objects can serve as prototypes for other objects, allowing for flexible and dynamic behavior.
 ## key concepts
 Objects:

In JavaScript, almost everything is an object. Objects are collections of key-value pairs, where values can be data or functions (methods).


## parts of OOP
1.object literal 
  used to define and create objects directly within the code by specifying key-value pairs enclosed in curly braces.
2.constructor function
  Constructor functions are used to create and initialize objects. They are invoked using the new keyword.
3. Prototype
  Every object in JavaScript has a built-in property, which is called its prototype
  The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain
4.classes
  In JavaScript, classes were introduced in ECMAScript 2015 (ES6) to provide a more convenient and syntactic way to create constructor functions and prototype
5.Instances
  this keyword: “This” keyword refers to an object that is executing the current piece of code
  New keyword:The new keyword in programming is used to create an instance of a user-defined object or invoke a constructor function, allocating memory and initializing the object.
## steps
1.Create an Empty Object:
When you use new, a new, empty object is created.
2.Link Object to Prototype:
Connect the new object to the prototype of the constructor function.
3.Run Constructor Code:
Execute the constructor function with the new object as this. This initializes the object's properties.
4.Implicit Return:
If the constructor doesn't explicitly return an object, the newly created object is implicitly returned.
 ## pillars of oop
 1.Encapsulation:
Encapsulation refers to the bundling of data and methods that operate on that data into a single unit (an object).
Private and public members can be simulated using closures.
2.Inheritance:
     JavaScript supports prototype-based inheritance, where objects can inherit properties and methods from other objects.
    The Object.create() method can be used to create a new object with a specified prototype.
3.Polymorphism:
     The polymorphism is a core concept of an object-oriented paradigm that provides a way to perform a single action in different forms. It provides an ability to call the same method on different JavaScript objects.
4.Abstraction
    abstraction generally refers to the practice of hiding the complex details of a system and exposing only what's necessary.  
    
