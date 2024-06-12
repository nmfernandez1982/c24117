package poo;

public class Principal {

	public static void main(String[] args) 
	{
		String oracion="hola Mundo...";
		int x=0;
		int y=0;
		int j=0;
		/*
		Vehiculo v1=new Vehiculo("Renault","Clio");		
		Vehiculo vehiculo=new Vehiculo("Ford","Fiesta");		
		Vehiculo otroObjeto=new Vehiculo("Motito","Zanella");
		Vehiculo v2=new Vehiculo();		
		
		v2.año=2023;
		v1.precio=2300000;
		
		//v1.imprimir();
		//vehiculo.imprimir();
		//otroObjeto.imprimir();
		//v2.imprimir();
				
		
		System.out.println(v2.imprimir2());
		
		Auto a1=new Auto();
		a1.cantPuertas=5;
		a1.esSedan=true;
		a1.año=1900;
		a1.marca="Renault";
		a1.modelo="19";
		
		Camion c1=new Camion();
		
		c1.marca="IVeco";
		c1.tieneAcoplado=true;		
		c1.imprimir();		
		System.out.println(c1.imprimir2());
			
		
		v1.setMarca("Ford");
		v1.setAño(2019);
		v1.setModelo("Fiesta");		
		System.out.println(v1.getMarca());
		*/
		
		Auto a2=new Auto();
		a2.setMarca("Fiat");
		a2.setModelo("Cronos");
		a2.setAño(2000);
		a2.setCantPuertas(5);
		a2.setEsSedan(true);
		
		a2.imprimir();
		
		

	}

}
