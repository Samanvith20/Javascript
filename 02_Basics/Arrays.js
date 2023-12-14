//Arrays
            //Declaration of Arrays
    const array1=[1,2,3,4,5,6,7,8,9,10];
    // const array2=["Samanvith","Reddy","Samanvith Reddy"];
    // const array3=new Array(2,4,6,81,10)
    //console.log(array1);
    //console.log(array2);
    //console.log(array3);
               // ++++++++++ methods in arrays++++++++++++
    //console.log(array1.length);//10
    const newArray=array1.push(11)
    //push() method adds the element at the end of the array
    //console.log(array1);
    //array1.pop()
    //pop() method removes the last element of the array
    //console.log(array1);
     //console.log(array1.indexOf(5))-->4
      array1.shift()
    console.log(array1)
      //shift() method removes the first element of the array
      array1.unshift(5)
      //console.log(array1);
      //unshift() method adds the element at the beginning of the array



       const anotherArray=array1.join()
        //  console.log(anotherArray);
        //  console.log(typeof (anotherArray))-->String
         //join() method converts the array into string


         //++++++++++slice,splice++++++++++++
         const  array2=[2,6,8,4,5]
         //console.log(array2.slice(1,3));
            //slice() method returns the elements from the array
            //console.log(array2.splice(1,3));
  //  splice() method removes ,replacing,adding,the elements from the array
    //   ++++++++important+++++++++
    // Differnce Between slice and splice is  the slice does not change the original array,
    // where as splice changes the original array and the syntax as follows:
    // array.splice(start,deletecount,item1,item2,item3)
    // array.slice(start,end)
      const Cricketers=["Sachin","Dhoni","Virat","Rohit","Rahul","Bumrah","Bhuvi","Shami","Jadeja","Ashwin"]
      const IndianBowlers=["Bumrah","Bhuvi","Shami","Jadeja","Ashwin"]
      const IndianTeam=Cricketers.concat(IndianBowlers)
      //contact() method combines two arrays
      //console.log(IndianTeam);
       const IndianTeam2=[...Cricketers,...IndianBowlers]
       // spread operator does the same thing as concat() method
         //console.log(IndianTeam2);
         //console.log(IndianTeam2.sort());
         //sort() method sorts the array in ascending order
             //console.log(Array.isArray(IndianTeam2));
             //isArray() method checks whether the given variable is array or not
             //console.log(Array.from("Samanvith"));
             //from() method converts the string into array also converts other forms also into array
            //  console.log(Array.from([1,2,3,4,5,6,7,8,9,10],x=>x*2));
            // console.log(Array.from({name:"Samanvith",age:"21"}));
              console.log(Array.of("Reddy"));
              // of() method converts the given variable into array
              