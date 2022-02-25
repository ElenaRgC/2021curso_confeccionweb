Algoritmo cuenta
	
	definir clave Como Caracter
	contar = 0
	
	Mientras contar<= 3 Hacer
		Escribir "Escriba la contraseña: "
		leer clave
		
		
		// Comprobamos que la contraseña introducida es igual a la almacenada. En este caso, "alioli".
		Si clave="alioli" Entonces
			Escribir "Contraseña correcta."
			contar = 3
			
		SiNo
			Escribir "Contraseña incorrecta. Inténtelo de nuevo."
			
		FinSi
		
		// El número de intentos para hacer log-in aumenta en 1.
		contar = contar + 1
			
	FinMientras
	
	si clave = "alioli" Entonces
		
		Escribir "Ok."
		
	SiNo
		Escribir "Fin de programa."
		
	FinSi
	
FinAlgoritmo
