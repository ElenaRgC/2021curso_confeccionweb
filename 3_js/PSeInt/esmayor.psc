Algoritmo esmayor
	
	definir numero1 Como Entero
	definir numero2 Como Entero
	
	escribir "Dame un número, por favor: "
	leer numero1
	escribir "Ahora dame otro: "
	leer numero2
	
	si numero1 > numero2 Entonces
		
		Escribir "El número " numero1 " es mayor que " numero2 "."
		
	SiNo
		
		si numero1=numero2 entonces 
			
			Escribir numero1 " y " numero2 " son iguales."
			
		SiNo
			
			Escribir "El número " numero2 " es mayor que " numero1 "."
			
		FinSi
		
	FinSi
	
FinAlgoritmo
