let formBusqueda = document.querySelector(".busqueda")
let barraBusqueda = document.querySelector(".busquedaBarra")
let errorBusqueda = document.querySelector(".busqueda-invalida")

formBusqueda.addEventlistener("submit" , function(event) {
    event.preventDefault();
    if ((barraBusqueda.value == "") || ((barraBusqueda.value).length <3)) {
        if (barraBusqueda.value == ""){
            errorBusqueda.innerHTML = "<p>No buscaste nada</p>"
            errorBusqueda.style.display = "block"
        }
        if(barraBusqueda.value != ""){
            errorBusqueda.style.display = "none"
        }
        if ((barraBusqueda).length < 3){
            errorBusqueda.innerHTML = "<p>El termino buscado debe contener al menos 3 caracteres</p>"
            errorBusqueda.style.display = "block"
        }
        if((barraBusqueda.value).length >= 3){
            barraBusqueda.style.display = 'none'
        }
    }
    else{
        this.submit()
    }
})