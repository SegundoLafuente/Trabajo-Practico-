fetch('https://dummyjson.com/products/category-list')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let smartphones = document.querySelector('#smartphones')
        smartphones.innerHTML = `<a href="category.html?categoryId=${data[6]}">Celulares</a>`

        let tablets = document.querySelector('#tablets')
        tablets.innerHTML = `<a href="category.html?categoryId=${data[18]}">Tablets</a>`

        let laptops = document.querySelector('#laptops')
        laptops.innerHTML = `<a href="category.html?categoryId=${data[11]}">Laptops</a>`
    })
    .catch(function(error){
        console.log(error)
    })

let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString)

let idDispositivos = queryStringObj.get('id');

fetch(`https://dummyjson.com/products/${idDispositivos}`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        let tituloProduct = document.querySelector('#h1_product')
        tituloProduct.innerText = data.title
        let img = document.querySelector('#img_product')
        img.src = data.images[0]
        let slogan = document.querySelector('#h2_product')
        slogan.innerText = data.title
        let descripcion = document.querySelector('.descripcion')
        descripcion.innerText = data.description
        let listaCar = document.querySelector('.lista_caracteristicas')
        listaCar.innerText = data.description
        let disponible = document.querySelector('.disponibilidad')
        disponible.innerText = data.title
        let costo = document.querySelector('.precio')
        costo.innerText = "$" + data.price


    })
    .catch(function(error){
        console.log(error)
    })