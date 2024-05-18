function agregarImagen()
{
    //crear un nuevo elemento
    var nuevaImagen=document.createElement("img");
    nuevaImagen.src="messi.jpeg";
    nuevaImagen.alt="Messi";
    var nuevo=document.getElementById("nuevo");
    nuevo.appendChild(nuevaImagen);
}

var btnNueva=document.getElementById("btnNueva");

btnNueva.addEventListener("click",agregarImagen);
