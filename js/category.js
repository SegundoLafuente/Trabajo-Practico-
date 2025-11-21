let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let idCategory = queryStringObj('idCategory')

fetch(`https://dummyjson.com/products/category/${idCategory}`)
	.then(function(response){
		return response.json();
	})
	.then(function(data){
        let tituloCategory = document.querySelector('h1_category')
        tituloCategory.innerText = `${idCategory}`
        let categoria = document.querySelector('productos_category')

        let productos = ''
        for(i=0; i<data.products.length; i++){
            productos += `<article>
			<img src='${data.products[i].images[0]}' alt=${data.products[i].title}>
			<div>
			<h3>${data.products[i].title}</h3>
			<p> ${data.products[i].description}</p> 
			<a href="product.html?id=${data.products[i].id}"> <button>Ver detalles</button> </a>
		    </div>
			</article>`
        }
        categoria.innerHTML =productos
	})
	.catch(function(error){
		console.log(error)
	})

fetch('https://dummyjson.com/products/category-list')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let smartphones = document.querySelector('#smartphones')
        smartphones.innerHTML = `<a href="category.html?categoryId=${data[6]}">Celulares</a>`

        let tablets = document.querySelector('#tablets')
        tablets.innerHTML = `<a href="category.html?categoryId=${data[18]}">Ipads</a>`

        let laptops = document.querySelector('#laptops')
        laptops.innerHTML = `<a href="category.html?categoryId=${data[11]}">Celulares</a>`
    })
    .catch(function(error){
        console.log(error)
    })  