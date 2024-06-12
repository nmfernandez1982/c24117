package poo;

public class Auto extends Vehiculo implements ContratoParaTodasLasClases
{
	 //atributos
	 private int cantPuertas;
	 private boolean esSedan;
	 
	public int getCantPuertas() 
	{
		return cantPuertas;
	}
	public void setCantPuertas(int cantPuertas) 
	{
		this.cantPuertas = cantPuertas;
	}
	public boolean isEsSedan() 
	{
		return esSedan;
	}
	public void setEsSedan(boolean esSedan) 
	{
		this.esSedan = esSedan;
	}
	
	
	@Override
	public void imprimir()
	 {
		 System.out.println("Marca: "+getMarca() +" Modelo:"+getModelo()+" Año:"+getAño()+" Cant. Puertas:"
	 +this.cantPuertas+" Es Sedan:"+this.esSedan);
	 }
	
	public void mensaje()
	{
		System.out.println("hola mundo.....");
	}
	 
	 

}
