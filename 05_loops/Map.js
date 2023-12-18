//map
// It is used to create a new array by applying a provided function to each element of the original array
// syntax
// const newarray=arr.map(callback(currentvalue,index,array)=>{}
   const arr=[1,2,3,4,5]
   arr.map((item)=>{
     return item*2
   })
    //console.log(arr);
     // map in map and filter
      const mynum=[23,65,78,92,56,34,67,89,90]
       const totalnum= mynum.map((item)=>item+24)
        .map((item)=>item/2)
        .filter((item)=>item>50)
        console.log(totalnum);