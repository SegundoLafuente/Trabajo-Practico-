fetch(`https://dummyjson.com/products/category/smartphones`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let contenedorIndex = document.querySelector('.contenedor')
        let masVendidos = ''

        for (i=0; i<data.products.length;i++){
            masVendidos += `<article>
        <img class="img_home" src='${data.products[i].images[2]}' alt=${data.products[i].title}>
        <div class = "div_home">
        <h3>${data.products[i].title}</h3>
        <p class ="p_home"> ${data.products[i].description}</p> 
        <a class = "detalle_home" href="product.html?id=${data.products[i].id}"> <button class = "boton_detalle">Ver detalles</button> </a>
        </div>
</article>` 
        }
        contenedorIndex.innerHTML = masVendidos
    })
    .catch(function(error){
        console.log(error)
    })

fetch(`https://dummyjson.com/products/category/tablets`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let masProductos = document.querySelector('.derecha')
        let distintos = ''
console.log(data.products)
        for (i=0;i <data.products.length; i++){
            distintos += `<article>
            <img class="img_product" src='${data.products[i].images[1]}' alt=${data.products[i].title}>
            <div>
            <h3>${data.products[i].title}</h3>
            <p> ${data.products[i].description}</p> 
            <a href="product.html?id=${data.products[i].id}"> <button>Ver detalles</button> </a>
            </div>
            </article>`
        }
        console.log(masProductos)
        console.log(distintos)
        masProductos.innerHTML = distintos
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
        smartphones.innerHTML = `<a href="category.html?categoryId=${data[6]}">Smartphones</a>`

        let tablets = document.querySelector('#tablets')
        tablets.innerHTML = `<a href="category.html?categoryId=${data[18]}">Tablets</a>`

        let laptops = document.querySelector('#laptops')
        laptops.innerHTML = `<a href="category.html?categoryId=${data[11]}">Laptops</a>`
    })
    .catch(function(error){
        console.log(error)
    })