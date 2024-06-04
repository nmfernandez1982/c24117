package clasesBase;

import java.time.LocalDate;
import java.util.Scanner;

public class Ejercicio1 
{

	public static void main(String[] args) 
	{
		System.out.println("Hola mundo...");		
		System.out.print("Hola mundo...");
		
		//tipos de datos primitivos
		int edad=43;
		double altura=1.84;
		boolean esEstudiante=false;
		char inicial='N';
		short otroDato=1;
		long otroDato1=1000000000;
		float peso=89.9f;
		
		System.out.println("La edad es: "+edad);
		System.out.println("La altura es: "+altura);
		System.out.println("Es estudiante ? : "+esEstudiante);
		
		
		//tipos de datos no primitivos
		
		Integer numeroEntero=Integer.valueOf(43);		
		String nombre="Nicolas";		
		LocalDate fechaActual=LocalDate.now();		
		Persona p1=new Persona();
		
		p1.edad=43;
		p1.nombre="Nicolas";
		p1.imprimir();
		
		System.out.println(fechaActual);
		
		//array
		int[] arrayEnteros=new int[5];
		arrayEnteros[1]=15;
		arrayEnteros[0]=30;		
		String[] nombres= {"Nicolas","Juan","Camila"};
		
		/*
		 * pilas
		 * colas
		 * lista
		 * */
			
		//stack p1=new Stack();
		
		String numeroComoString="123";
		int numero=Integer.parseInt(numeroComoString);		
		System.out.println(numero);
		
		//int valor=(int)"123";
		
		edad=18;
		
		if(edad>18)
		{
			//true
			System.out.println("Es mayor de edad");
		}			
		else if(edad==18)
		{
			System.out.println("Tiene 18");
		}
		else
		{
			//false
			System.out.println("no Es mayor de edad");
		}	
		
		
		Scanner ingreso=new Scanner(System.in);
		System.out.print("Ingrese un Valor: ");
		int opc=ingreso.nextInt();
		
		
		switch(opc)
		{
		case 1:
			 System.out.println("Se imprimio un 1");
			 break;
		case 2:
			 System.out.println("Se imprimio un 2");
			 break;
		case 3:
			 System.out.println("Se imprimio un 3");
			 break;
		case 4:
			 System.out.println("Se imprimio un 4");
			 break;
		default:
			 System.out.println("otro");
			 break;			 
		}
		
		
		opc=0;
		
		do {
			System.out.println("Bucle do: "+opc);
			opc++;//opc=opc+1;
		}while(opc<5);
		
		opc=0;
		while(opc<5)
		{
			System.out.println("Bucle while: "+opc);
			opc++;//opc=opc+1;			
		}
		
		
		
		
	}

}
