const randomColor=function(){
    let hex= "0123456789ABCDEF";
    let color = "#"
    for(let i=0;i<6;i++){
        color +=hex[Math.floor(Math.random()*16)]
    }
    return color;

}
let changecolor=function(){
    document.body.style.backgroundColor=randomColor()
}
let intervalId;
let startchangingcolor=function(){
    intervalId=setInterval(changecolor,1000)

}
let stopcolor=function(){
    clearInterval(intervalId)
    
}
let initialcolor=function(){
    document.body.style.backgroundColor = randomColor()
}
document.addEventListener('DOMContentLoaded', initialcolor);
document.querySelector("#changecolor").addEventListener('click',startchangingcolor)
document.querySelector("#stopcolor").addEventListener('click',stopcolor)