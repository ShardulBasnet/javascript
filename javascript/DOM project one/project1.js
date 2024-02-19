let body=document.querySelector("body")
        let buttons=document.querySelectorAll(".button");
        buttons.forEach(val => {
val.addEventListener('click',function(e){
console.log(e.target.id)
if(e.target.id==='green'){
    body.style.backgroundColor='green'; /* or e.target.id instead of green*/
}
if(e.target.id==="blue"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id==="red"){
    body.style.backgroundColor=e.target.id;
}
if(e.target.id==="yellow"){
    body.style.backgroundColor=e.target.id;
}
})
   });