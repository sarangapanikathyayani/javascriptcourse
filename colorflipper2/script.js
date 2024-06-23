const btn=document.getElementById("btn")
const colortxt=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
btn.addEventListener('click',changebg)
function changebg(){
    let hexcolor='#'
    for(let i=1;i<6;i++){
    hexcolor+=randHexValue()
}
    /*console.log(hexcolor)*/
wrap.style.backgroundColor=hexcolor
colortxt.innerHTML=hexcolor

}
function randHexValue(){
let randomIndex=Math.floor(Math.random()*16)
 return hex[randomIndex]  
}
