Algoritmo difletras
	
	definir letras1 Como caracter
	definir letras2 Como caracter
	
	escribir "Dame un texto, por favor: "
	leer letras1
	escribir "Ahora dame otro: "
	leer letras2
	
	resultado=letras1+letras2
	
	si letras1 > letras2 Entonces
		
		Escribir "El número " letras1 " es mayor que " letras2 "."
		
	SiNo
		
		si letras1=letras2 entonces 
			
			Escribir letras1 " y " letras2 " son iguales."
			
		SiNo
			
			Escribir letras2 " es mayor que " letras1 "."
			
		FinSi
		
	FinSi
	
FinAlgoritmo
