//basica

let persona={
    "nombre":"Nicolas",
    "edad":"43",
    "ciudad":"Quilmes"
}

console.log(persona.nombre);
console.log(persona.edad);

let pelicula=
{
"titulo":"El cavallero de la noche",
"fechaEstreno":"2018-01-01",
"publico":"mayores de 14",
"actores":["Actor1","Actor2","Actor3"],
    "director":
            {
                "nombre":"Chritopher Nolan",
                "origen":"ingles",
                "edad":"50"
            }
}

console.log(pelicula.titulo);
console.log(pelicula.actores[2]);
console.log(pelicula.director.nombre);
console.log("---------");
console.log(pelicula);

