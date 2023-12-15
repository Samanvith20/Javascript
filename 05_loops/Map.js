//map
// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array
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