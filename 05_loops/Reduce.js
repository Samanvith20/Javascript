//reduce
 const array=[2,6,4,8,9]
  const newarray=array.reduce((acc,currval)=>{
     return acc+currval
  },0)
  //console.log(newarray);
  // find max value in an array
   const maxarray= array.reduce((acc,curr)=>{
       if (acc>curr){
           return acc
       }
       else{
             return curr
       }
   },0)
   console.log(maxarray);
    // the main difference between map filter and reduce is
//     1. map method is used when we want transformation of whole array.
// 2. filter is used when we want to filter the arrar to obtain required value.
// 3. reduce is used when we want to reduce the array to single value eg (max, min, avg, sum, difference etc).
// 4. reduce passes two arguments one function(which includes accumulator and initial value as argument itself) and another initial value of accumulator.
 
// Tricky example
const users = [
   { firstname: "samanvith", lastname: "reddy", age: 23 },
   { firstname: "david", lastname: "jhon", age: 26 },
   { firstname: "sam", lastname: "smith", age: 15 },
   { firstname: "joe", lastname: "root", age: 18 },
];

 // return an array of full names of users
 const fullname=users.map((item)=>{
    return item.firstname+ "  "  + item.lastname
 })
//console.log(fullname);

// return with an person age as with same age increment 
 const age= users.reduce((acc,curr)=>{
    if(acc[curr.age]){
      acc[curr.age] = ++acc[curr.age]
    }
    else{
      acc[curr.age]=1
    }
    return acc
 },{})
 console.log(age);


 // find a persons with age is gretater then 20 and their firstname
  const person= users.reduce((acc,curr)=>{
       if(curr.age>20){
         acc.push({ firstname: curr.firstname, age: curr.age });
       }
       return acc
  },[])
  console.log(person);