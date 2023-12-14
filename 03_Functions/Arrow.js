//this keyword-->It refers to the  current execution context or the object that the function is a method of.
// //+++++++Examples++++++++++++
 const perosn={
       email:"samanvith@amazon.com",
       password:"1234",
       username:"Samanvith Reddy",
       IsloggedIn:true ,
        Greetings:function login(){
           console.log(this.username+" has logged in");
       },
      
 }
  perosn.Greetings()
    // this in functions
     function thiskeyword(){
          //console.log(this);
     }
     thiskeyword()
     // Arrow functions-->It allows us to write shorter function syntax
      //+++++++Examples++++++++++++

//    Normal Function: function myname(){
//       console.log("Hello my name is Samanvith Reddy");
//      }
//     myname()
//       Explicit Arrow function
      const myname=()=>{
               return console.log("Hello my name is Samanvith Reddy");
      }
      myname()
      //Implicit return
      const myname1=()=>console.log("Hello my name is Samanvith Reddy");


 