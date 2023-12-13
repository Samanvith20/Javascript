// there are two types of memory in JS
// 1. Stack Memory--> Primitive data types are stored in stack memory
const myname="Samanvith"
let anothername=myname
anothername="Samanvith reddy"
console.log(myname);
console.log(anothername);
// example of stack it will return a copy of it


// 2. Heap memory-->non=primitive
const obj1={
    age:"21",
    state:" telangana"
}
let obj2 = obj1
obj2.age="23"
console.log(obj1);
console.log(obj2);
// It  reference to the allocated memory.