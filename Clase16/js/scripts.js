


saludar();
saludar();
saludar();
saludar();

function saludar()
{
    var x=0;
    do{
        console.log("Hola Mundo......");
        x++;
    }while(x<5);
}



function login(usuario,pass)
{    
    if(usuario=="usuarioDesdeDB" & pass=="1234")
    {
        //alert("Acceso Permitido");
        return true;
    }
    else
    {
        //alert("Acceso No Permitido");
        return false;
    }

  
}








var habilitado=login("Nicolas","1234");
console.log(habilitado);

var habilitado=login("Luz","1234");
console.log(habilitado);

var habilitado=login("usuarioDesdeDB","1234");
console.log(habilitado);





function saludarConNombre(dato1)
{
    var x=0;
    do{
        console.log("Hola Mundo......"+dato1);
        x++;
    }while(x<5); 
}


saludarConNombre("Nicolas");


saludarConNombre("Julieta");

saludarConNombre(1234);




function sumar(dato1,dato2)
{
    resultado=dato1+dato2;    
    return resultado;
}



//var datoFinal=sumar(5,5);

console.log(sumar(5,15));

function promedio(nota1=1,nota2=1)
{
    prom=(nota1+nota2)/2;
    return prom;
}

console.log("promedio"+promedio());

if( promedio() >=7)
{
    console.log("El alumno esta aprobado");
}
else
{
    console.log("El alumno no esta aprobado");
}