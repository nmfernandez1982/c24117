package stringMethods;

public class StringMethods {

	public static void main(String[] args) 
	{
		int x=0;
		String oracion="Hola mundo.....";
		
		
		int cant=oracion.length();
		System.out.println("La cantidad de letras es:"+cant);
		
		String oracion2="Hola mundO.....";
		
		
		boolean soniguales=oracion.equals(oracion2);
		System.out.println("Son iguales: "+soniguales);
		
		
		soniguales=oracion.equalsIgnoreCase(oracion2);
		System.out.println("Son iguales: "+soniguales);
		
		String mayus=oracion2.toUpperCase();
		String min=oracion2.toLowerCase();
		
		System.out.println(mayus);
		System.out.println(min);
		
		String oracion3="Hola munbo.....";
		
		String oracion4=oracion3.replace('b', 'd');
		System.out.println(oracion4);		

	}

}
