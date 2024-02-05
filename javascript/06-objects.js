let UserData={
    name:"shardul",
    email:"basnetsardul@gmail.com",
    isLoggedIn:true
}
/* to note: name is key and shardul is value,but both of them are considered strings*/
console.log(UserData["email"])
console.log(UserData.name)

/* objects inside objects */
let ClientData={
    FullDate:{
        name :"shardul",
        email:"basnet@gmail.com"
    }
}
console.log(ClientData)
console.log(ClientData.FullDate)
/* array and objects */
let Clientname =["shardul",'basnet',fullname={
name:"risabh",
email:"risabh@gmail.com"
}]
console.log(Clientname[2].name)

/* spread operators in objects */
let nameOne={
    fullnam:"shardul",lastnam:"basnet"
}
let nameTwo={
    fullname:"himal",
    lastname:"subedi"
}
console.log({...nameOne,...nameTwo})
// let nameThree={...nameOne,...nameTwo}
// console.log(nameThree);

