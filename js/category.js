let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let idCategory = queryStringObj.get('idCategory')

fetch(`https://dummyjson.com/products/category/${idCategory}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
        
        let categoria = document.querySelector('.productos_category')

        let productos = ''
        for(i=0; i<data.products.length; i++){
            productos += `<article class = "articulo_category">
			<div class = "div_category">
            <img class = "img_category" src='${data.products[i].images[0]}' alt=${data.products[i].title}>
			<h3>${data.products[i].title}</h3>
			<p> ${data.products[i].description}</p> 
			<a href="product.html?id=${data.products[i].id}"> <button class = "boton_category">Detalles</button> </a>
		    </div>
			</article>`
        }
        categoria.innerHTML =productos
	})
	.catch(function(error){
		console.log(error)
	})
    
