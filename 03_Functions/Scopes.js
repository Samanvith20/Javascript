//Global scope
 //  It is defined as to the outermost scope or context in which variables and functions are declared
  var myname="I am a Global Scope"
    function  Global(){
       console.log(myname);
   }
   Global()
     // local scope
      // It is defined as to the innermost scope or context in which variables and functions are declared
        function Local(){
            var myname="I am a Local Scope"
            console.log(myname);
        }
        Local()
         //+++++++ Examples  ++++++
        const b=100
        let a = 300
        var c=200
        if (true) {
            let a = 10
            const b = 20
            var c=30
            // console.log("INNER: ", a);
            // console.log("INNER: ", b);
            //  console.log("INNER: ", c);
            
        }
        //  console.log("OUTER: ", a);
        //  console.log("OUTER: ", b);
            // console.log("OUTER: ", c);
             //{Note: var is not a block scope so almost var can be avoided}
            // ++++++++++++++Scope level in depth++++++++++++
               function onenumber(){
                 const firstname="Samanvith"
                  function twonumber(){
                        const lastname="Reddy"
                        //console.log(firstname)-->Samanvith
                  }
                  twonumber()
               }
                onenumber()
                //console.log(lastname)--> we cannot access the lastname because it is in the local scope
                //+++++++++++++Basic Hosting+++++++++++++++
                //console.log(adduserDetails("Samanvith "))
                // here we can access the function before declaring the function
                function adduserDetails(addname){
                          return addname+"Reddy"
                }
                 console.log(loginUserMessage("Sam"));
                 // here we cannot access the function before declaring the function
             const loginUserMessage=function(name){
                 return name
             } 
              