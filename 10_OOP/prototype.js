const arr=["samanvith", "Ninja","Lamborghini"]
console.log(Object.getPrototypeOf(arr));
 // we will first get the prototype of the object which is equal to prototype of Array
 // Then the prototype of an array is equal to prototype of Object
let obj1={
    name:"Samanvith",
    age:19,
    occupation:"student"
}
console.log(Object.getPrototypeOf(obj1));
// we will first get the prototype of the object which is equal to prototype of Object which is equal to null

function num(num){
    return num*3
}
num(4)
console.log(Object.getPrototypeOf(num));
// first we will get the prototype of an Number then object and it is equal to null
 
 // Everything in javascript is an object
// so by the above examples we can consider that every object in javascript is inherited from Object
// we can acccess the properties of an object by using Object.getPrototypeOf(objectname)