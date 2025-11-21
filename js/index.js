fetch(`https://dummyjson.com/products/category/smartphones`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let contenedorIndex = document.querySelector('.contenedor')
        let masVendidos = ''

        for (i=0; i<data.products.length;i++){
            masVendidos += `<article>
        <img src='${data.products[i].images[0]}' alt=${data.products[i].title}>
        <div>
        <h3>${data.products[i].title}</h3>
        <p> ${data.products[i].description}</p> 
        <a href="product.html?id=${data.products[i].id}"> <button>Ver detalles</button> </a>
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

        for (i=0;i <data.products.lenght; i++){
            distintos += `<article>
            <img src='${data.products[i].images[1]}' alt=${data.products[i].title}>
            <div>
            <h3>${data.products[i].title}</h3>
            <p> ${data.products[i].description}</p> 
            <a href="product.html?id=${data.products[i].id}"> <button>Ver detalles</button> </a>
            </div>
            </article>`
        }
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
        smartphones.innerHTML = `<a href="category.html?categoryId=${data[6]}">Celulares</a>`

        let tablets = document.querySelector('#tablets')
        tablets.innerHTML = `<a href="category.html?categoryId=${data[18]}">Ipads</a>`

        let laptops = document.querySelector('#laptops')
        laptops.innerHTML = `<a href="category.html?categoryId=${data[11]}">Celulares</a>`
    })
    .catch(function(error){
        console.log(error)
    })