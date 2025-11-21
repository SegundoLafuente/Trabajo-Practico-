let emailDelUsuario2 = localStorage.getItem("mailUsuario")
let containerMenu2 = document.querySelector(".lista_arriba")
let bienvenido2 = document.querySelector(".bienvenido")
let containerBienvenida2 = document.querySelector(".saludo")
let home2 = document.querySelector(".linkhome")
let login2 = document.querySelector(".linklogin")
let register2 = document.querySelector(".linkregister")
let linkLogout2 = document.querySelector(".logout")

linkLogout.addEventListener("click" , function(){
    console.log("hola");
    
    localStorage.clear()
    containerBienvenida2.style.display = "none"
    containerMenu2.style.display = "inline"

})