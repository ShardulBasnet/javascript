// var add = function(a,b){

//     return a +b;
    
    
// }
// let sum =add(2,3)
// console.log(sum)
let add = function(a, b) {
    return a + b;
}

// Call the 'add' function with arguments '2' and '3', and assign the result to 'sum'
let sum = add(2, 3);

// Log the value of 'sum' to the console
// console.log(sum); // This will log '5'

let counter={
    count:0,
    Sum:function(){
        this.count++;/*this represents the counter here */
        // console.log(this.count)
    }
    
}
counter.Sum()
counter.Sum()

    const name =function(){
        let caste="shardul"
        console.log(caste)
    }
name();