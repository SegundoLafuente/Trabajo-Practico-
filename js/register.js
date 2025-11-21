let formulario = document.querySelector(".formulario")
let mail = document.querySelector(".emails input")
let contraseña = document.querySelector(".contraseña input")
let repetirCon = document.querySelector(".reContraseña input")

let mailError = document.querySelector(".mail-invalido")
let contraseñaError = document.querySelector(".contraseña-invalida")
let repetirConError = document.querySelector(".reContraseña-invalida")

formulario.addEventListener("submit" , function(event) {
    event.preventDefault();

        if (mail.value == ""){
            mailError.innerHTML = "<p>Este campo es obligatorio</p>"
            mailError.style.display = "block"
        }
        else if (contraseña.value == ""){
            contraseñaError.innerHTML = "<p>Este campo es obligatorio</p>"
            contraseñaError.style.display = "block"
        }
        else if (contraseña.value.length <6 ){
            contraseñaError.innerHTML = "<p>La contraseña debe contener al menos 6 caracteres</p>"
            contraseñaError.style.display = "block"
        }
        else if (repetirCon.value != contraseña.value){
            repetirConError.innerHTML = "<p>La contraseña no es la misma</p>"
            repetirConError.style.display = "block"
        }
        else{
            this.submit()
        }
})