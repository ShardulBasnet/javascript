// there are three types of scope in js Global scope,function scope and block scope(es6)

// 1)Block scope 

// let number = 4;
// if (true){
//     let number =5;
//     console.log(`inner number is ${number}`)output:5
// }
// console.log(` this is outer ${number}`) output:4
// let number = 4;
if (true){
    let number =5;
    // console.log(`inner number is ${number}`)
}
console.log(` this is outer ${number}`) /*this will not execute because let is block scope so it wont come outside the {}*/

if(true){
    var something =6;
}
console.log(something);/* this will execute because var is a global scoped */

