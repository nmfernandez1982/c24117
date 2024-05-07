
//crear una clase  --> molde de los objetos que se van a crear.
class Persona 
{
    //metodo constructor
    constructor(nombre,dni,edad)
    {
        this.nombre=nombre;
        this.dni=dni;
        this.edad=edad;
    }

    //metodo
    saludarGeneral()
    {
        console.log("Hola mundo......");
    }

    saludar()
    {
        //console.log("hola mundo soy "+this.nombre);
        console.log(`Soy ${this.nombre} y tengo ${this.edad} `);
    }



    
}

var persona=new Persona();
persona.edad=43;
persona.nombre="Nicolas";

var persona1=new Persona("Julieta",290311333,45);

var persona2=new Persona("Luz",14);


persona1.saludarGeneral();
persona1.saludar();

