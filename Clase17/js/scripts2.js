/* Variable Global */

var global="Hola soy Global......";

function escribirTexto()
{
    console.log(global);
    var x=0;
    do{
        x++;
        console.log(global);
      }while(x<5);
}

escribirTexto();
console.log(global);


function escribirTexto20()
{
    var local="Hola soy Local......";
    console.log(local);
    var x=0;
    do{
        x++;
        console.log(local);
      }while(x<5);
}


escribirTexto20();

//console.log(local);


function escribirTexto30()
{
    var x=0;
    do{
        //scope let y const
        let local="Hola soy Local 3.0";
        x++;
        console.log(local);
      }while(x<5);
    
      console.log(local);  
}

escribirTexto30();