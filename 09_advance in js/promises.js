// promises
 //promises can be defined as a  structured way to handle asynchronous code 
 //  A Promise is an object representing the eventual completion or failure of an asynchronous operation.
  // three states:
  //1.Pending: Initial state, ongoing operation.
// 2.Fulfilled: Operation completed successfully, with a result.
//3.Rejected: Operation encountered an error, with a reason for failure.
  //++++++++++++++++++examples++++++++++++++++++
  // first way to declare promises
   new Promise(function(resolve,reject){
   setTimeout(function(){
    console.log("Task is completed");
    resolve({userDetaisl:{name:"Samanvith",id:12345}})
   },2000)
})
.then(function(user){
    console.log(user);
})
// Another way
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async another task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})
// uses both resolve and reject and finally
const promisetwo = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})

 promisetwo
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

// using fetch
 fetch(`https://api.github.com/users/samanvith`)
 .then((response)=>{
     return response.json()
 })
 .then((data)=>{
   console.log(data);
 })
 .catch((error)=>console.log(error))