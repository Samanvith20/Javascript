// declaration of functions

function getusername(){
    console.log("Hello getusername");
}
 getusername("Reddy")

// add two numbers
// 1.
function addtwonumber(number1,number2){
       console.log(number1+number2);
}
   addtwonumber(10,20);
// //2.
 function addtwonumber(number1,number2){
   return number1+number2;
}
// console.log(addtwonumber(10,20));
// if we want to store in another variable
  //3.
function addtwonumber(number1,number2){
   return number1+number2;
}
let result=addtwonumber(10,20);
console.log(result);



function loginUserMessage(username = ""){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Samanvith Reddy"))
 // using rest operator-->...args
    function sum(...args){
         return args
    }
      console.log(sum(1,2,3,4,5,6,7,8,9,10));
       //Adding objects into functions
         let userDetails={
            name:"Samanvith Reddy",
            age:21,
         }
          function AddDetails(anyobject){
                 console.log( `my name is ${anyobject.name} and my age is ${anyobject.age}`)
          }
           AddDetails(userDetails);
            // adding Arrays into functions
            const myNewArray = [200, 400, 100, 600]

         function returnSecondValue(getArray){
                return getArray[1]
        }
          console.log(returnSecondValue(myNewArray));

