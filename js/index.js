let busqueda = document.querySelector('#input_busqueda').value
formBus = document.querySelector('.busqueda')

formBus.addEventListener('submit', function(event){
    event.preventDefault()

    if (busqueda.value == ''){
        alert("No puede estar vacia la busqueda estimado")
    }
    else if ((busqueda.value).lenght < 3){
        alert("Su busqueda tiene que tener mas de 3 Caracteres")
    }
    else{
        this.submit()
    }
})

fetch(`https://dummyjson.com/products/category/smartphones`)
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        
    })
    .catch(function(error){
        console.log(error)
    })