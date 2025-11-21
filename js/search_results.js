let busqueda = document.querySelector('#input_busqueda').value
formBus = document.querySelector('.busqueda')

formBus.addEventListener('submit', function(event){
    event.preventDefault()
    fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){

        let contenedorBusqueda = document.querySelector('productos_result')
        let articuloBus = ""
        let h1Busqueda = document.querySelector('#h1_busqueda')

        h1Busqueda.innerText = `Resultado de Busqueda: ${busqueda}`

        for (let i=0; i<data.products.lenght; i++){
            articuloBus += `<article> <img src= ' ${data.products[i].images[1]}' alt= ${data.products[i].title} > 
                <div> 
                <h3>${data.products[i].title}</h3>
                <p>${data.products[i].description}</p>
                <a href ="product.html"> <button> Ver Detalle </button> </a>
                </div>
                <article>`
        }
        contenedorBusqueda.innerHTML = articuloBus

    })
    .catch(function(error){
        console.log(error)
    })
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