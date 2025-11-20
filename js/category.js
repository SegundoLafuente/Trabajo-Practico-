let queryString = location.search;
let datos = new URLSearchParams(queryString);
let categoria = datos.get("cat");

let contenedor = document.querySelector(".productos_categoria");

let titulo = document.querySelector(".titulo_categoria");
titulo.innerText = categoria;

fetch("https://dummyjson.com/products/category/" + categoria)
.then(function(respuesta){
    return respuesta.json();
})
.then(function(data){

    let productos = data.products;
    let html = "";

    for (let i = 0 ; i < productos.length ; i++){
        let p = productos[i];

        html += 
        '<a href="product.html?id=' + p.id + '">' +
            '<article class="tarjeta">' +
                '<img src="' + p.thumbnail + '">' +
                '<p>' + p.title + '</p>' +
            '</article>' +
        '</a>';
    }

    contenedor.innerHTML = html;
})
.catch(function(){
    contenedor.innerHTML = "<p>Error al cargar la categoría.</p>";
});