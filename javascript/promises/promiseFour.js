const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
let error = true;
if (!error){
    resolve ({username:"shardul",email:"shardul.com"})
}
else{
    reject('error: this is an error message')
}

    },1000)
})
// consuming the promises
async function consumepromise(){
    try{
        const response = await promiseThree;
        console.log(response)
     }
     catch (error){
        console.log(error)
     }
    }
  consumepromise()  /* output: error: this is an error message */
//   if error = false ,output resolve wala aautheo