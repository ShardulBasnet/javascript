function add(){
    let a=5;
    let b=5;
    let c = a+b;
    // console.log(`the sum of ${a}+${b} is ${c} `) 
}
// console.log(`the sum of ${a}+${b} is ${c} `) /*output:error */
add();
 
// Nested scope 

let c =20;
if(true){
    let a =10;
    if(a===10){
        let b = 40;
        console.log(a)
    }
    console.log(c)
}
// console.log(c)
