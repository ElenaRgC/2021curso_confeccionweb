Algoritmo cuenta
	
	definir clave Como Caracter
	contar = 0
	
	Mientras contar<= 3 Hacer
		Escribir "Escriba la contrase�a: "
		leer clave
		
		
		// Comprobamos que la contrase�a introducida es igual a la almacenada. En este caso, "alioli".
		Si clave="alioli" Entonces
			Escribir "Contrase�a correcta."
			contar = 3
			
		SiNo
			Escribir "Contrase�a incorrecta. Int�ntelo de nuevo."
			
		FinSi
		
		// El n�mero de intentos para hacer log-in aumenta en 1.
		contar = contar + 1
			
	FinMientras
	
	si clave = "alioli" Entonces
		
		Escribir "Ok."
		
	SiNo
		Escribir "Fin de programa."
		
	FinSi
	
FinAlgoritmo
