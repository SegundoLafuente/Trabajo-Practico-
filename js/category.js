let params = new URLSearchParams(location.search);
let categoryParam = params.get('category');

let title1 = document.querySelector('.h1_category');

if (title1 && categoryParam){
    title1.textContent = 'Categoria: ' + categoryParam
}

if (categoryParam) {
  fetch('https://dummyjson.com/products')
    .then(function(response){
      return response.json();
    })
    .then(function(data){
        let productos = data.products || [];
        let filtrados = [];
        for (let i=0; i<productos.length; i++){
            if (productos[i].category === categoryParam) filtrados.push(productos[i])
        }
    let main = document.querySelector('main');

    let div = document.createElement('div');    
    div.className = 'div_category'

    if (filtrados.length === 0) {
        div.innerHTML = '<p>No hay productos para la categoría: ' + categoryParam + '</p>';
      }
      else{
        for (let a=0; a< filtrados.length; a++) {
          let nuevaLista = filtrados[a];
          let articulo = document.createElement('article');
          articulo.innerHTML = '<a href="product.html?id=' + nuevaLista.id + '">\
                                <img src="' + (nuevaLista.thumbnail || '') + '" alt="' + nuevaLista.title + '">\
                                <p>' + nuevaLista.title + '</p>\
                                <p class="precio_category">$' + nuevaLista.price + '</p>\
                                </a>';
          div.append(articulo)
      }
    }
    })
    .catch(function(error){
      console.log('El error es: ' + error);
    });
}
else{
      let main = document.querySelector('main');
    if (main){
        let nuevoParrafo = document.createElement('p');
        nuevoParrafo.textContent = 'Categoria no Especificada';
        main.append(nuevoParrafo);
    }
}