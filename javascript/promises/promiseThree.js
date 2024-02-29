const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
let error = false;
if (!error){
    resolve ({username:"shardul",email:"shardul.com"})
}
else{
    reject('error: this is an error message')
}

    },1000)
})
promiseThree.then(function(user){
    return user.username
}).then (function(username){
    console.log(username)
    // this is promise chaining
    // mathi return gareko kura tala ko then ma aaaucha
})
.catch(function(error){
    console.log(error)
})
.finally (function(){
    console.log("it logs whether the code catches a error or not")
})