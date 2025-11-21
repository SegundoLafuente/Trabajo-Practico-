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