let formulario = document.querySelector(".formulario")
let mail = document.querySelector(".emails input")
let contraseña = document.querySelector(".contraseña input")

let mailError = document.querySelector(".mail-invalido")
let contraseñaError = document.querySelector(".contraseña-invalida")

formulario.addEventListener("submit" , function(event) {
    event.preventDefault();
    if (mail.value == "" || contraseña.value == ""|| (contraseña.value.length <6 && contraseña.value.length>0)){
        if (mail.value == ""){
            mailError.innerHTML = "<p>Este campo es obligatorio</p>"
            mailError.style.display = "block"
        }
        if (contraseña.value == ""){
            contraseñaError.innerHTML = "<p>Este campo es obligatorio</p>"
            contraseñaError.style.display = "block"
        }
        if (contraseña.value.length <6 && contraseña.value.length>0){
            contraseñaError.innerHTML = "<p>La contraseña debe contener al menos 6 caracteres</p>"
            contraseñaError.style.display = "block"
        }
        if(mail.value != ""){
            mailError.style.display = "none"
        }
        if(contraseña.value != ""){
            contraseñaError.style.display = "none"
        }
        if(contraseña.value.length >= 6 ){
            contraseñaError.style.display = "none"
        }
    }
    else{
        localStorage.setItem("mailUsuario" , mail.value)
        this.submit()
    }
})

let formBusqueda = document.querySelector(".busqueda")
let barraBusqueda = document.querySelector(".busqueda input")

formBusqueda.addEventListener("submit" , function(event) {
    event.preventDefault();
    if ((barraBusqueda.value == "") || ((barraBusqueda.value).length <3)) {
        if (barraBusqueda.value == ""){
            alert("No buscaste nada")
        }
        if (((barraBusqueda.value).length < 3) && ((barraBusqueda.value).length >0)){
            alert("El termino que buscas debe tener al menos 3 caracteres")
        }
    }
    else{
        this.submit()
    }
})