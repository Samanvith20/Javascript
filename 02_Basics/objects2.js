const obj1={
    name:"Samanvith",
    age:21,
    hobbies:["Cricket","Reading","Coding"],
    address:{
        street:"KammuduGally",
        city:"Banswada",
        state:"Telangana"
    },
}
const obj2={
    name:"Gautam Gambhir",
    age:38,
    hobbies:["Cricket","Reading","politician"],
    address:{
        street:"Delhi",
        city:"Delhi",
        state:"Delhi"
    },
} 
   // How to combine both objects
     // 1. obj3={obj1,obj2}
    //   2. const obj3=Object.assign({},obj1,obj2)
     const obj3={...obj1,...obj2}
      console.log(obj3);
      const regularUser = {
        email: "samanvith@gmail.com",
        fullname: {
            userfullname: {
                firstname: "Samanvith",
                lastname: "Reddy"
            }
        }
    }
    
    //console.log(regularUser.fullname.userfullname.firstname);
    //++++++++++++object destructing+++++++++
    const userDetails={
          name:"Samanvith",
            password:"Samanvith@123",
            email:"Samanvith@google.com"
    }
    const {name,password,email}=userDetails
    //console.log(name);
     const{name:username}=userDetails
        console.log(username);
