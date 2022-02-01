Algoritmo vencimiento
	Definir fecha Como Caracter
	Definir tipo_pago Como Entero
	Definir nombre_mes Como Caracter
	Definir meses Como Entero
	Dimension meses[365]
	Definir dia Como Entero
	Definir mes Como Entero
	
	

	// Bucle tipo para comprobar que el formato de fecha es correcto.
	Mientras Longitud(fecha) <> 10 Hacer
		Escribir "Indique la fecha del cargo en formato DD-MM-YYY."
		leer fecha
		
		Si Longitud(fecha) <> 10 Entonces 
			Escribir "Por favor, use el formato de fecha indicado."
		FinSi
		
	FinMientras
	
	// Extraemos el día y el mes de la fecha.
	dia = ConvertirANumero(Subcadena(fecha(1,2)))
	mes = ConvertirANumero(Subcadena(fecha(4,5)))
	
	Escribir "Seleccione un tipo de pago (30, 60 o 90 días)."
	
	// Bucle tipo para comprobar que el tipo de pago es el correcto.
	Mientras tipo_pago <> 30 Y tipo_pago <> 60 Y tipo_pago <> 90 Hacer
		
		Leer tipo_pago
		Si tipo_pago <> 30 Y tipo_pago <> 60 Y tipo_pago <> 90 Entonces
			
			Escribir "Escriba un valor igual a 30, 60 o 90."
			
		FinSi
		
	FinMientras
	
	
	// Bucle para generar los días del año. Nos aprovechamos de un según.
	Para i <- 1 Hasta 12
		
		Segun i Hacer
			
			1: k = 31
			2: k = 28
			3: k = 31
			4: k = 30
			5: k = 31
			6: k = 30
			7: k = 31
			8: k = 31
			9: k = 30
			10: k = 31
			11: k = 30
			12: k = 31	
			
		FinSegun
		
		Para j <- 1 Hasta k
			
			meses[j] = j
			
		FinPara
		
	FinPara
	

// La función de esto es comprobar que se han generado los meses correctamente.
//	Para i <- 1 Hasta 12
//		
//		Segun i Hacer
//			
//			1: k = 31
//				nombre_mes = "Enero"
//			2: k = 28
//				nombre_mes = "Febrero"
//			3: k = 31
//				nombre_mes = "Marzo"
//			4: k = 30
//				nombre_mes = "Abril"
//			5: k = 31
//				nombre_mes = "Mayo"
//			6: k = 30
//				nombre_mes = "Junio"
//			7: k = 31
//				nombre_mes = "Julio"
//			8: k = 31
//				nombre_mes = "Agosto"
//			9: k = 30
//				nombre_mes = "Septiembre"
//			10: k = 31
//				nombre_mes = "Octubre"
//			11: k = 30
//				nombre_mes = "Noviembre"
//			12: k = 31
//				nombre_mes = "Diciembre"
//			
//		FinSegun
//		
//		Escribir nombre_mes
//		
//		Para j <- 1 Hasta k
//			
//			Escribir meses[j]
//			
//		FinPara
//		
//	FinPara
	
	
	// Vencimiento: introduces fecha > tipo pago (X días) > vence el día Y.
	// 30, 60, 90 días.
	
FinAlgoritmo
