let btnCEl = document.getElementById("btnC")
let btnDelEl = document.getElementById("btn-del")
let btnPlusEL = document.getElementById("btn-plus")
let equationEl = document.getElementById("output")
let btn1EL=document.getElementById("btn-1")
let btn2EL=document.getElementById("btn-2")
let btn3EL=document.getElementById("btn-3")
let btnMinusEL=document.getElementById("btn-minus")
let counter01 = 0
document.title=("Calculator25")

btnCEl.addEventListener("click",function(){
    location.reload()
})

btn1EL.addEventListener("click",function(){
    let num01=1
    equationEl.innerHTML+=`${num01}`
})