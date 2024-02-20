let body=document.querySelector("body")
        let buttons=document.querySelectorAll(".button");
        buttons.forEach(val => {
val.addEventListener('click',function(e){
console.log(e.target.id)
body.style.backgroundColor=e.target.id;

})
   });