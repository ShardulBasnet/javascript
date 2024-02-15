// let numbers =[1,2,3,4,5]
// const storednumbers=numbers.forEach((val)=>{   storing like this wont work with foreach
//     return val *5
// })
// console.log(storednumbers)

let numbers =[1,2,3,4,5]
numbers.forEach((val)=>{
    console.log(val*5)
})

let numbersmap=[1,2,3,45,55]
const storenumbers=numbersmap.map((val)=>{
    return val
})
console.log(storenumbers)