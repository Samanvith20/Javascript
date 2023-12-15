//For Each
//syntax
// array.forEach(callback(currentValue [, index [, array]])[, thisArg])
const arr1=[4,6,7,4,85]
 arr1.forEach(item => {
      console.log(item);
 });

 //using Array with objects
 const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    //console.log(item.languageName.toUpperCase());
    console.log(item.languageFileName.toUpperCase());
} )