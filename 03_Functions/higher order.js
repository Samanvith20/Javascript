// higher order functions
// it is a function that takes another function as an argument or returns a function as a result
// example
//  function x(){
//         console.log('my name is samanvith')
//  }
//   function y (x){
//         x()
//   }
//       y(x)
  // Another example
   const radius=[3,1,2,4]
      const area=function(radius){
             return Math.PI*radius*radius
      }
      const circumference=function(radius){
                  return 2*Math.PI*radius
            }
            const diameter=function(radius){
                  return 2*radius
            }
       const calculate=function(radius,logic){
                  const output=[]
                  for(let i=0;i<radius.length;i++){
                        output.push(logic(radius[i]))
                  }
                  return output
       }
         console.log(calculate(radius,area));
            console.log(calculate(radius,circumference));
                  console.log(calculate(radius,diameter));

// Here we are using the higher order function and we are passing the function as an argument to the calculate function

                  // we can write the above code in a another way
                  // const calculate area= function(radius){
                  //     const output=[]
                  //     for(let i=0;i<radius.length;i++){
                  //           output.push(math.pi*radius[i]*radius[i])
                  //     }
                  //}
                  // console.log(calculate area(radius));
                  // const calculate circumference= function(radius){
                  //     const output=[]
                  //     for(let i=0;i<radius.length;i++){
                  //           output.push(2*math.pi*radius[i])
                  //     }
                  //}
                  // console.log(calculate circumference(radius));
                  // const calculate diameter= function(radius){
                  //     const output=[]
                  //     for(let i=0;i<radius.length;i++){
                  //           output.push(2*radius[i])
                  //     }
                  //}
                  // console.log(calculate diameter(radius));s