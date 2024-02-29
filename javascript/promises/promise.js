const promiseOne=new Promise(function(resolve,reject){
    // async code

    setTimeout(function(){
console.log("seting time out")
resolve();
    },1000)
})
// resolve always comes with then 
promiseOne.then(function(){
    console.log('the code has been resolved')
})
//  or we can do this way
new Promise(function(resolve,reject){
    // async code

    setTimeout(function(){
console.log("seting time out")
resolve();
    },1000)
})
.then(function(){
    console.log('the code has been resolved')
})