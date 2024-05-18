if(typeof(Storage)!=="undefined")
    {
        //creo un local storage
        localStorage.setItem("nombre","Nicolas");
        localStorage.setItem("edad","43");

        var nombreUsuario = localStorage.getItem("nombre");

        //imprimo por consola
        console.log("El usuario es:"+nombreUsuario);
        console.log("La edad es:"+localStorage.getItem("edad"));

        //reasigno el valor
        localStorage.setItem("edad","45");
        console.log("La edad es:"+localStorage.getItem("edad"));

        
        
        //borrar local Storage
        localStorage.removeItem("edad");
        
        
        if(localStorage.getItem("edad")===null)
            {
                console.log("la edad fue eliminada");
            }




    }
    else
    {
        console.log("Navegador no soportado");
    }