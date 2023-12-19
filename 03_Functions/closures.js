// lexical scoping 
// it means that a variable defined outside a function can be accessible inside another function defined after the variable declaration.
// example
 function outer(){
        let x=10;
        
        function inner(){
            let z=20;
            console.log(x);
        }
        inner()
        function inner1(){
            //console.log(z) // it is not accessible
        }
        inner1();
 }
  outer()
 // here we can declare that we can acces only outer scope variables in inner function but we cannot access inner scope variables in outer function
 // closures
 // A closure in programming refers to the combination of a function bundled together with references to its surrounding state (the lexical environment)
 // example
 function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

// Creating a closure
const closureExample = outerFunction();

// Executing the closure
closureExample(); // Outputs: "I am from the outer function"
 
// here behind the scenes we can say that while returning the inner function it will return total lexical environment of outer function