document.addEventListener('DOMContentLoaded', function() 
{
var form = document.getElementById('itemForm');
var itemsTableBody = document.getElementById('itemsTableBody');

form.addEventListener('submit', function(event) 
{
    event.preventDefault();

    const formData = new FormData(form);
    const itemId = formData.get('id');
    


    const data = {
        id: formData.get('id'),
        titulo: formData.get('titulo'),     
        genero: formData.get('genero'),
        duracion: formData.get('duracion'),
        director: formData.get('director'),
        reparto: formData.get('reparto'),
        sinopsis: formData.get('sinopsis')       
    
    }; 

    if (itemId) 
        {
        updateItem(data);
    } else {
        createItem(data);
    }
});

function createItem(data) 
{
    fetch('http://localhost:8080/EntregaFinal24117/peliculas', 
        {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }) 
    .then(result => {
        console.log('Success:', result);        
        loadItems();  
        form.reset();
    })
    .catch(error => 
        {
        console.error('Error:', error);        
 	     });
}

   
// Función para cargar los elementos desde la API
function loadItems() {
    fetch('http://localhost:8080/EntregaFinal24117/peliculas')
    .then(response => response.json())
    .then(data => {
        itemsTableBody.innerHTML = '';
        if (data) 
            {
            data.forEach(pelicula => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${pelicula.id}</td>
                    <td>${pelicula.titulo}</td>                
                    <td>${pelicula.genero}</td>
                    <td>${pelicula.duracion}</td>
                    <td>${pelicula.director}</td>
                    <td>${pelicula.reparto}</td>
                    <td>${pelicula.sinopsis}</td>                    
                    <td>
                        <button class="btn btn-danger" onclick="deleteItem(${pelicula.id})">Eliminar</button>
                    </td>
                    <td>
                        <button class="btn btn-success" onclick="editItem(
                        ${pelicula.id}, 
                        '${pelicula.titulo}',                     
                        '${pelicula.genero}', 
                        '${pelicula.duracion}', 
                        '${pelicula.director}', 
                        '${pelicula.reparto}',
                        '${pelicula.sinopsis}')">Editar</button>
                    </td>
                `;
                itemsTableBody.appendChild(row);
            });
        } 
        else 
        {
            console.error('No se encontraron películas');
        }
    })
    .catch(error => console.error('Error:', error));
}
   

  // Función para borrar una pelicula
  function deleteItem(id) 
  {
    fetch(`http://localhost:8080/EntregaFinal24117/peliculas/${id}`, 
        {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(response => 
        {            
            loadItems();                  
        })
    ;
    loadItems();
}







function updateItem(data) 
{
      fetch(`http://localhost:8080/EntregaFinal24117/peliculas/${data.id}`, 
        {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }) 
    .then(result => {
        console.log('Success:', result);        
        loadItems();  
        form.reset();
    })
    .catch(error => 
        {
        console.error('Error:', error);        
 	     });
}
    
    
    


  window.editItem = function(id, titulo, genero,duracion,director,reparto,sinopsis) 
  {
    document.getElementById('id').value = id;
    document.getElementById('titulo').value = titulo;
    document.getElementById('genero').value = genero;
    document.getElementById('duracion').value = duracion;
    document.getElementById('director').value = director;
    document.getElementById('reparto').value = reparto;
    document.getElementById('sinopsis').value = sinopsis;
  };
  
   window.deleteItem = deleteItem;
    loadItems();
});