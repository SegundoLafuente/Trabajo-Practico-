let laptopsContainer = document.querySelector(".laptops");
let tabletsContainer = document.querySelector(".tablets");
let smartphonesContainer = document.querySelector(".smartphones");


function cargarCategoria(contenedor, nombreCategoria){
    
    fetch("https://dummyjson.com/products/category/" + nombreCategoria)
    .then(function(respuesta){
        return respuesta.json();
    })
    .then(function(data){
        let productos = data.products;
        let contenido = "";

        for (let i = 0 ; i < productos.length ; i++){
            let p = productos[i];

            contenido += 
            '<a href="product.html?id=' + p.id + '">' +
                '<article class="tarjeta">' +
                    '<img src="' + p.thumbnail + '">' +
                    '<p>' + p.title + '</p>' +
                '</article>' +
            '</a>';
        }

        contenedor.innerHTML = contenido;
    })
    .catch(function(){
        contenedor.innerHTML = "<p>Error al cargar productos</p>";
    });
}

cargarCategoria(laptopsContainer, "laptops");
cargarCategoria(tabletsContainer, "tablets");
cargarCategoria(smartphonesContainer, "smartphones");
