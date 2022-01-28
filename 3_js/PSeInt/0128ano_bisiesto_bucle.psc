Algoritmo ano_bisiesto
	definir fecha Como Caracter
	definir ano Como Entero
	definir respuesta Como Entero
	
	// Los a�os m�ltiplos de 100 no son bisiestos, excepto que sean m�ltiplos de 400. Definimos las comprobaciones que haremos.		
	definir resto4 Como Entero
	definir resto100 Como Entero
	definir resto400 Como Entero
	
	Mientras respuesta <> 2 Hacer
		
		Escribir "�Quiere comprobar si una fecha fue en a�o bisiesto?"
		Escribir " Introduzca 1 para S�. "
		Escribir " Introduzca 2 para No. "
		leer respuesta
		
		Segun respuesta Hacer
			
			1: 
				Escribir "Introduzca la fecha que desee comprobar en formato DD-MM-AAAA."
				Leer fecha
				
				// Comprobamos que los datos est�n bien introducidos.
				Mientras Longitud(fecha) <> 10 Hacer
					Escribir "Introduzca sus datos en el formato especificado (DD-MM-AAAA)."
					leer fecha
				FinMientras
	
				// Extraemos el a�o de la fecha introducida.
				ano=ConvertirANumero(SubCadena(fecha,7,11))
					
				// Podemos precalcular los restos, aunque no es necesario. Si lo calculamos ahora, el if siguiente ser� m�s legible.
				resto4 = ano mod 4
				resto100 = ano mod 100
				resto400 = ano mod 400
		
				// El a�o ser�a bisiesto si resto4 y resto400 son 0 pero resto100 es distinto de 0.
				Si resto4 = 0 Y resto400 = 0 Y resto100 <> 0 Entonces
					Escribir "El a�o " ano " fue bisiesto."
			
				SiNo
					Escribir "El a�o " ano " no fue bisiesto."
				FinSi
				
			2: 
				Escribir "Fin."
				
		De Otro Modo:
			
			Escribir "Introduza un valor v�lido."
			
		FinSegun	
	
	
	// Primer algoritmo
	//Extraemos el a�o de la fecha introducida.
	//	Si Longitud(fecha) = 10 Entonces
	//		ano=ConvertirANumero(SubCadena(fecha,7,11))
	//	SiNo
	//		Escribir "Ha vuelto a introducir el formato de fecha incorrecto, el resultado no ser� correcto. Reinicie el algoritmo e int�ntelo de nuevo."
	//	FinSi
	//	
	//	resto4 = ano mod 4
	//	resto100 = ano mod 100
	//	resto400 = ano mod 400
	//	
	//	// Los a�os m�ltiplos de 100 no son bisiestos, excepto que sean m�ltiplos de 400.
	//	// El a�o ser�a bisiesto si resto4 y resto400 son 0 pero resto100 es distinto de 0
	//	
	//	Si resto4 = 0 Y resto400 = 0 Y resto100 <> 0 Entonces
	//		Escribir "El a�o " ano " fue bisiesto."
	//		
	//	SiNo
	//		Escribir "El a�o " ano " no fue bisiesto."
		//	FinSi
		
	FinMientras
FinAlgoritmo
