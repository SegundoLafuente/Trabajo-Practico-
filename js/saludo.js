let emailDelUsuario = localStorage.getItem("mailUsuario")
let bienvenido = document.querySelector(".bienvenido")
let home = document.querySelector(".linkhome")
let login = document.querySelector(".linklogin")
let register = document.querySelector(".linkregister")
let linkLogout = document.querySelector(".logout")

if (emailDelUsuario){
    bienvenido.innerText = "Bienvenido " + emailDelUsuario
    bienvenido.style.display = "inline"
    home.style.display = "none"
    login.style.display = "none"
    register.style.display = "none"
    linkLogout.style.display = "inline"
}
else{
    bienvenido.style.display = "none"
    linkLogout.style.display = "none"
}