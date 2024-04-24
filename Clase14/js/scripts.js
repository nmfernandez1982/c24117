
var nota=10;

function mostrarVariable()
{
    //aca escribo el codigo JS
    var elemento=document.getElementById("resultado");
    elemento.innerHTML="Su nota es: " + nota;
    console.log("La variable por consola es: "+nota);
}


var nombre="Nicolas";
var edad=42;
var habilitado=true;
var correo;
var otroDato=null;


console.log("El tipo de dato es: "+typeof(nombre));
console.log("El tipo de dato es: "+typeof(edad));
console.log("El tipo de dato es: "+typeof(habilitado));
console.log("El tipo de dato es: "+typeof(correo));
console.log("El tipo de dato es: "+typeof(otroDato));


/*operadores aritmeticos*/

/*
+ 
-
*
/
%
*/

var dato1="15.5 años";
//dato1=Number(dato1);
//dato1=parseInt(dato1);
dato1=parseFloat(dato1);
var dato2=15;
var result=dato1+dato2;
console.log("El resultado es: "+result);

/*operadores logicos*/

/*
> mayor que
< menor que
>= mayor o igual que
<= menor o igual que
!= distinto de 
= operador de asignacion
== comparo algo (Por su valor)
===  comparo algo (Por su valor y tipo)
*/

nota=9;

function mostrarVariable2()
{
    if(nota>=9)
    {
        //si la nota es mayor o igual que 7
            //aca escribo el codigo JS
        var elemento=document.getElementById("resultado");
        elemento.innerHTML="Alumno Promocionado: " + nota; 
    }
    else if(nota>=4 & nota<9) //Y and
    {
        //si la nota es mayor o igual que 7
            //aca escribo el codigo JS
        var elemento=document.getElementById("resultado");
        elemento.innerHTML="Alumno va final: " + nota; 
    }
    else
    {
        var elemento=document.getElementById("resultado");
        elemento.innerHTML="Alumno Desaprobado: " + nota; 
    }    
}



/*tabla de verdad del and (&)*/ 
/*
V + V = V    (nota>=4 & nota<9) --> true (Verdadero)
F + V = F 
v + F = F
F + F = F
*/ 



nota =1;
trabajo=1;

function mostrarVariable3()
{
    if(nota>=7 | trabajo==10)
    {
        //si la nota es mayor o igual que 7
            //aca escribo el codigo JS
        var elemento=document.getElementById("resultado");
        elemento.innerHTML="Materia Aprobada"; 
    }  
    else
    {
        var elemento=document.getElementById("resultado");
        elemento.innerHTML="Materia desAprobada"; 
    }
}


/*tabla de verdad del | o */

/*
V + V = V
V + F = V
F + V = V
F + F = F
*/ 
