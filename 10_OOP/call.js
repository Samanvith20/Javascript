// call method
// call method is used to call a function with a given this value and arguments provided individually
// example
function changeusername(username){
    this.username = username;
}
 function changeregistration(username,email,password){
  changeusername.call(this,username)
  
    this.email=email,
    this.password=password
 }
   const registration=new changeregistration("Samanvith","samanvith@amazon.com",9182315791)
  console.log(registration);
