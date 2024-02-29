const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){

        resolve ({username:"shardul",email:"shardul.com"}) /* passing the parameters as object */
    },1000)
})
promiseTwo.then(function(object){ /*parameters ko value access garna milcha */
console.log(object)
})