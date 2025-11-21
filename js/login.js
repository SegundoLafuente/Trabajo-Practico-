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