package poo;

public abstract class Vehiculo
{
	//atributos
	 private String marca;
	 private String modelo;
	 private int año;
	 private String color;
	 private double precio;
	 private int tanque;
	 private int cantCombustible;
	 
	 
	 	 
	 public String getMarca() 
	 {
		return marca;
	 }

	public void setMarca(String marca) 
	{
		this.marca = marca;
	}

	public String getModelo() 
	{
		return modelo;
	}

	public void setModelo(String modelo) 
	{
		this.modelo = modelo;
	}

	public int getAño() 
	{
		return año;
	}

	public void setAño(int año) 
	{
		this.año = año;
	}

	public String getColor() 
	{
		return color;
	}

	public void setColor(String color) 
	{
		this.color = color;
	}

	public double getPrecio() 
	{
		return precio;
	}

	public void setPrecio(double precio) 
	{
		this.precio = precio;
	}

	//metodo contructor por defecto
	 public Vehiculo()
	 {
		 this.marca="Desconocida";
		 this.modelo="Desconocida";
		 this.año=0;
		 this.color="Desconocida";
		 this.precio=0;
	 }
	 
	 //metodos contructores
	 public Vehiculo(String marca,String modelo)
	 {
		 this.marca=marca;
		 this.modelo=modelo;
	 }
	 
	  


	public Vehiculo(String marca,String modelo,int año)
	 {
		 this.marca=marca;
		 this.modelo=modelo;
		 this.año=año;
	 }
	  
	 
	 //metodo
	 public void imprimir()
	 {
		 System.out.println("Marca: "+this.marca+" Modelo:"+this.modelo+" Año:"+this.año);
	 }
	 
	 public String imprimir2()
	 {
		return "Marca: "+this.marca+" Modelo:"+this.modelo+" Año:"+this.año;
	 }
	 
	 //acelerar --> consume 1 litro de nafta.
	 
	 //cargar nafta-->hasta la capacidad del tanque.
	 
	 
	 
	 
}


