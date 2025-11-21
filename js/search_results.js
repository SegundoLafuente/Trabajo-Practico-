let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get('busqueda')


let buscarResultado = document.querySelector('#input_busqueda')
let formBus = document.querySelector('.busqueda')


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