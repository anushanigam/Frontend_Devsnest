// 1. Write a JavaScript program to list the properties of a JavaScript object. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; Sample Output: name,sclass,rollno

function keys(obj){
    return Object.keys(obj);
}
console.log(keys({name: "David Rayy", sclass : "VI", rollno : 12 }));

// QUESTION2. : Write a JavaScript program to delete the rollno property from the following object.
// Also print the object before or after deleting the property. 
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
