let emailDelUsuario = localStorage.getItem("mailUsuario")
let containerMenu = document.querySelector(".lista_arriba")
let bienvenido = document.querySelector(".bienvenido")
let containerBienvenida = document.querySelector(".saludo")
let home = document.querySelector(".linkhome")
let login = document.querySelector(".linklogin")
let register = document.querySelector(".linkregister")
let linkLogout = document.querySelector(".logout")

if (emailDelUsuario){
    bienvenido.innerText = "Bienvenido " + emailDelUsuario
    containerBienvenida.style.display = "inline"
    containerMenu.style.display = "none"
}
else{
    containerBienvenida.style.display = "none"
}