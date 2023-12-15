// For loop
   // it is used to iterate over a block of code a number of times
    // syntax
    //  for(initialization;condition;increment/decrement){
    //      //code to be executed
    //  }
     //++++++++++++++example++++++++++++
       for(let i=0;i<10;i++){
          const element=i;
    //         console.log(`the number is ${element}`);
       }
       // with array
 const array1=["sachin","virat","dhoni"];
    for(let i=0;i<array1.length;i++){
          //console.log(array1[i]);
    }
     // with break---> it will break the loop
     for(let i=0;i<10;i++){
        const element=i;
         if(element===5){
             //console.log(`the number is ${element}`);
             break;
           }
           //console.log(`the number is ${element}`);
        }
        //    continue---> it will skip the current iteration
     for(let i=0;i<10;i++){
        const element=i;
         if(element===5){
              
             console.log(`the number is ${element}`);
                continue;
             
           }
           console.log(`the value of i is ${element}`);
        }
   
      