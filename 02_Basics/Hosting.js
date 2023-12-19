console.log(x);       // undefined
console.log(myname);   // undefined
myname();              // "my name is samanvith"
addnumbers(3,6)         // TypeError, as 'addnumbers' is undefined at this point
console.log(addnumbers(3,6)); // Outputs 'undefined' due to the implicit return in the arrow function

let x = 8;

function myname() {
    console.log("my name is samanvith");
}
// using arrow functions
const addnumbers= (number1,number2)=>{
    return number1+number2;
}

// Behind the scene of hoisting
//Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase
// This means that you can use variables and call functions before they are declared in your code.
//  However, it's important to note that only the declarations are hoisted, not the initializations.
 //  So, when you try to use variables or call functions before their declarations in the code, they exist but may have the value undefined until the actual declaration statement is reached during runtime.
