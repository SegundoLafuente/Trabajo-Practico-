let queryString = location.search
let queryStringObj = new URLSearchParams(queryString)
let busqueda = queryStringObj.get('busquedaBarra')


let buscarResultado = document.querySelector('#input_busqueda')
let formBus = document.querySelector('.busqueda')

fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)

        let contenedorBusqueda = document.querySelector('.div_busqueda')
        let articuloBus = ''
        let h1Busqueda = document.querySelector('#busqueda_h1')

        if (data.products.length>0){
            h1Busqueda.innerText = `Resultado de su Busqueda: ${busqueda}`
    
        for (let i=0; i<data.products.length; i++){
            articuloBus += `<article class = "articulo_busqueda">
            <img class = "img_busqueda" src='${data.products[i].images[0]}' alt=${data.products[i].title}>
            <div>
            <h3>${data.products[i].title}</h3>
            <p> ${data.products[i].description}</p>
            <h3> ${data.products[i].price}</h3> 
            <a href="product.html?id=${data.products[i].id}"> <button class = "boton_detalle">Ver detalle</button> </a>
            </div>
            </article>`
        }
        contenedorBusqueda.innerHTML = articuloBus
        }
        else{
            h1Busqueda.innerText = `No se encontro: ${busqueda}`
        }
    })
    .catch(function(error){
        console.log(error)
    })