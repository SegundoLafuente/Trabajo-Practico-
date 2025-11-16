let formulario = document.querySelector(".formulario")
let mail = document.querySelector(".emails input")
let contraseña = document.querySelector(".contraseña input")
let repetirCon = document.querySelector(".reContraseña input")

let mailError = document.querySelector(".mail-invalido")
let contraseñaError = document.querySelector(".contraseña-invalida")
let repetirConError = document.querySelector(".reContraseña-invalida")

formulario.addEventListener("submit" , function(event) {
    event.preventDefault();
    if (mail.value == "" || contraseña.value == ""|| (contraseña.value).lenght<6 || contraseña.value != repetirCon.value){
        if (mail.value == ""){
            mailError.innerHTML = "<p>Este campo es obligatorio</p>"
            mailError.style.display = "block"
        }
        if (contraseña.value == ""){
            contraseñaError.innerHTML = "<p>Este campo es obligatorio</p>"
            contraseñaError.style.display = "block"
        }
        if ((contraseña.value).lenght <6){
            contraseñaError.innerHTML = "<p>La contraseña debe contener al menos 6 caracteres</p>"
            contraseñaError.style.display = "block"
        }
        if (repetirCon.value != contraseña.value){
            repetirConError.innerHTML = "<p>La contraseña no es la misma</p>"
            repetirConError.style.display = "block"
        }
        if(mail.value != ""){
            mailError.style.display = "none"
        }
        if(contraseña.value != ""){
            contraseñaError.style.display = "none"
        }
        if((contraseña.value).length >= 6 ){
            contraseñaError.style.display = "none"
        }
        if(repetirCon.value == contraseña.value){
            repetirConError.style.display = "none"
        }
    }
    else{
        this.submit()
    }
})
console.log("submit")