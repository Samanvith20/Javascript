// there are two types of data types in JS
// 1. Primitive data types: undefined, null, number, string, boolean, symbol
const name = "John"; //string
const age = 23; //number
const isCool = true; //boolean
const x = null; //object
const y = undefined; //undefined
const z = Symbol(); //symbol (it will be returned as a unique value)
 //console.log(typeof null);
 // typeof operator is used to find the type of the variable


 // Reference (Non primitive)

// Array, Objects, Functions 
const names = ["John", "Bob", "Peter"];//object
const person = {
    firstName: "John",
    lastName: "Doe"
};//object
function addNumbers(num1, num2) {
    return num1 + num2;
}//function
    console.log(typeof (names));
     /*
     Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object
       */