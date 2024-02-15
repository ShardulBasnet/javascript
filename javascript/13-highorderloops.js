let fruits =["mango","apple","grapes"]
for (const falful of fruits) {
    // console.log(falful)
    
}
let name ="shardul basnet"
for (const naming of name) {
    if (naming === " " ){
        break;
    }
    // console.log(naming)
    
}
// For each loops 
let country=["nepal","US","Indonesia"]
country.forEach(function(val){
    // console.log(val)
})
//  looping objects inside an array
let coding =[

    {
        fullname :"javascript",
        shortcutname:"js"
    },
    {
        fullname:"python",
        shortcutname:"py"   
    },
    {

        fullname:"cprogramming",
        shortcutname:"c"
    }
]
coding.forEach(function(val){ /*callback function */
    console.log(val.shortcutname)
})
/* for in loops */
 let myObject={
    name :"shardul",
    class :"bachelor"
 }
 for (const key in myObject) {
    console.log(key,myObject[key])
    
        
    }
 