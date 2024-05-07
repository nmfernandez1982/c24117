/*
float =15.4;  --> datos primitivos
Float  -->wrapper--->lo mismo que el primitivo + agregados
*/

//mi primer objeto

var miAuto=new Object();
miAuto.marca='Renault';
miAuto.modelo='Clio'
miAuto.año=2015;
miAuto.color='Rojo';

console.log("El auto es: "+miAuto.marca+" el modelo es:"+miAuto.modelo+" El año es "+ miAuto.año+" COlor:"+miAuto.color);
console.log(miAuto);

//mi segundo objeto

var MiSegundoAuto={
     //variables -->propiedades 
     marca:'Fiat',
     modelo:'Cronos',
     año:2022,
     cantCombustible:3,
    //funciones --> metodos
    detalleAuto: function() {return "Marca: "+this.marca +" Año:"+this.año;},
    acelerar: function()
    {
    if(this.cantCombustible>0)
    {    
    this.cantCombustible--;//cantCombustible=cantCombustible-1; 
    return "El auto acelero, quedan "+this.cantCombustible+" Litros de nafta"; 
    }
    else
    {
        return "Tenemos que cargar nafta";
    }
}
}

console.log("El auto es: "+MiSegundoAuto.marca+" el modelo es:"+MiSegundoAuto.modelo+" El año es "+ MiSegundoAuto.año+" Color"+MiSegundoAuto.color);
console.log(MiSegundoAuto);

console.log(MiSegundoAuto.detalleAuto());

console.log(MiSegundoAuto.acelerar());
console.log(MiSegundoAuto.acelerar());
console.log(MiSegundoAuto.acelerar());
console.log(MiSegundoAuto.acelerar());
