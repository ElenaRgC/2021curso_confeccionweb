Algoritmo ano_bisiesto
	definir fecha Como Caracter
	definir ano Como Entero
	
	// Los años múltiplos de 100 no son bisiestos, excepto que sean múltiplos de 400. Definimos las comprobaciones que haremos.
	definir resto4 Como Entero
	definir resto100 Como Entero
	definir resto400 Como Entero
	
	Escribir "Introduzca la fecha que desee comprobar en formato DD-MM-AAAA."
	Leer fecha
	
	// Comprobamos que los datos estén bien introducidos.
	Si Longitud(fecha) <> 10 Entonces
		Escribir "Introduzca sus datos en el formato especificado (DD-MM-AAAA)."
		leer fecha
	FinSi
	
	//Extraemos el año de la fecha introducida.
	Si Longitud(fecha) = 10 Entonces
		ano=ConvertirANumero(SubCadena(fecha,7,11))
		// Podemos precalcular los restos, aunque no es necesario. Si lo calculamos ahora, el if siguiente será más legible.
		resto4 = ano mod 4
		resto100 = ano mod 100
		resto400 = ano mod 400
		
		// El año sería bisiesto si resto4 y resto400 son 0 pero resto100 es distinto de 0.
		Si resto4 = 0 Y resto400 = 0 Y resto100 <> 0 Entonces
			Escribir "El año " ano " fue bisiesto."
			
		SiNo
			Escribir "El año " ano " no fue bisiesto."
		FinSi
		
	SiNo
		Escribir "Ha vuelto a introducir el formato de fecha incorrecto. Reinicie el algoritmo e inténtelo de nuevo."
	FinSi
	
	
	
	// Primer algoritmo
	//Extraemos el año de la fecha introducida.
	//	Si Longitud(fecha) = 10 Entonces
	//		ano=ConvertirANumero(SubCadena(fecha,7,11))
	//	SiNo
	//		Escribir "Ha vuelto a introducir el formato de fecha incorrecto, el resultado no será correcto. Reinicie el algoritmo e inténtelo de nuevo."
	//	FinSi
	//	
	//	resto4 = ano mod 4
	//	resto100 = ano mod 100
	//	resto400 = ano mod 400
	//	
	//	// Los años múltiplos de 100 no son bisiestos, excepto que sean múltiplos de 400.
	//	// El año sería bisiesto si resto4 y resto400 son 0 pero resto100 es distinto de 0
	//	
	//	Si resto4 = 0 Y resto400 = 0 Y resto100 <> 0 Entonces
	//		Escribir "El año " ano " fue bisiesto."
	//		
	//	SiNo
	//		Escribir "El año " ano " no fue bisiesto."
	//	FinSi
FinAlgoritmo
