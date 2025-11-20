let queryString = location.search;
let datos = new URLSearchParams(queryString);
let idProducto = datos.get("id");

let detalle = document.querySelector(".detalle_producto");

fetch("https://dummyjson.com/products/" + idProducto)
.then(function(respuesta){
    return respuesta.json();
})
.then(function(producto){

    let html = 
        '<h1>' + producto.title + '</h1>' +
        '<img src="' + producto.thumbnail + '">' +
        '<p>' + producto.description + '</p>' +
        '<p>Precio: $ ' + producto.price + '</p>';

    detalle.innerHTML = html;
})
.catch(function(){
    detalle.innerHTML = "<p>Error al cargar el producto.</p>";
});