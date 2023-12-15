//reduce
 const array=[2,6,4,8,9]
  const newarray=array.reduce((acc,currval)=>{
     return acc+currval
  },0)
  console.log(newarray);