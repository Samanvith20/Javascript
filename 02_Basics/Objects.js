// objects
     // Declaration of objects
      // How to add a symbols to the objects
      const sym1=Symbol("Hello");
     const person={
         name:"Samanvith",
         age:21,
         hobbies:["Cricket","Reading","Coding"],
         [sym1]:"Hello",
         address:{
             street:"KammuduGally",
             city:"Banswada",
             state:"Telangana"
         },
         
     } 
     console.log(person);
    
        //Accessing the properties of objects
    //   console.log(person.age);
    //   console.log(person["name"]);
    //   console.log(person[sym1]);
    //   console.log(sym1);
    //   console.log(typeof(person[sym1]));
    // How to change the value
    // person.age=22;
    // console.log(person.age);
        //    console.log(Object.freeze(person));
        //     //freeze() method prevents the object from changing the value
        //     person.name="Samanvith Reddy"
        //     console.log(person.name);
    // How to add functions in objects
     person.state=function(){
            console.log("Telangana");
     }
        //console.log(person.state());


      
      