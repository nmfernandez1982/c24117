//crear un elemento nuevo

var nuevoParrafo=document.createElement("p");

//crear un nuevo contenido para la p
var texto=document.createTextNode("Hola Mundo.....");
nuevoParrafo.appendChild(texto);

var nuevo=document.getElementById("nuevo");

nuevo.appendChild(nuevoParrafo);