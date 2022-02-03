Algoritmo vencimiento
	
	// Datos introducidos por el usuario.
	Definir fecha Como Caracter
	Definir tipo_pago Como Entero
	
	// Datos obtenidos a partir de los introducidos.
	Definir dia Como Entero
	Definir mes Como Entero
	Definir contador Como Entero
	Definir dia_vencimiento Como Entero
	Definir mes_vencimiento Como Entero
	
	// Datos independientes de los valores del usuario.
	Definir nombre_mes Como Caracter
	Definir meses Como Entero	
	Dimension meses[365]
	Definir dia_mes Como Entero
	
	// Bucle tipo para comprobar que el formato de fecha es correcto.
	Mientras Longitud(fecha) <> 10 Hacer
		Escribir "Indique la fecha del cargo en formato DD-MM-YYY."
		leer fecha
		
		Si Longitud(fecha) <> 10 Entonces 
			Escribir "Por favor, use el formato de fecha indicado."
		FinSi
		
	FinMientras
	
	// Extraemos el día y el mes de la fecha.
	dia = ConvertirANumero(Subcadena(fecha,1,2))
	mes = ConvertirANumero(Subcadena(fecha,4,5))
	
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
	
	
	// Para cada mes, sumamos los días (excepto del mes indicado en la fecha, por eso llegamos hasta mes -1).
	// Para enero no tenemos que sumar el total de días, solo los que han transcurrido, por eso indicamos mes > 1.
	Si mes > 1 Entonces
		
		Para i <- 1 Hasta (mes - 1) Hacer
			
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
			
			contador = contador + k
			
		FinPara
		
	FinSi
	
	// Añadimos los días que han pasado en ese mes y el tipo de pago.
	
	contador = contador + dia + tipo_pago
	
	Si contador > 365 Entonces
		
		contador = contador - 365
		
	FinSi
	
	// Podemos saber el día de vencimiento extrayéndolo de la array meses.
	dia_vencimiento = meses[contador]
	
	Segun mes Hacer
		
		1: dia_mes = 31
		2: dia_mes = 28
		3: dia_mes = 31
		4: dia_mes = 30
		5: dia_mes = 31
		6: dia_mes = 30
		7: dia_mes = 31
		8: dia_mes = 31
		9: dia_mes = 30
		10: dia_mes = 31
		11: dia_mes = 30
		12: dia_mes = 31
		
	FinSegun
	
	// El 1 de enero vencería el 31 del mismo mes, pero el 1 de febrero vencería el 2 de marzo.
	// Esto solo se da si el mes tiene 31 días y el pago entra el día 1.
	
	Si tipo_pago = 30 Entonces
		
		Si tipo_pago + dia > dia_mes Entonces 
			
			mes_vencimiento = mes + 1
			
		FinSi
		
		SiNo mes_vencimiento = mes
		
	FinSi
	
	// Con 60 y 90 días seguimos la misma lógica.
	Si tipo_pago = 60 Entonces
		
		Si tipo_pago/2 + dia > dia_mes Entonces
			
			mes_vencimiento = mes + 2
			
		FinSi
		
		Si tipo_pago/2 + dia < dia_mes O dia_mes = 31 Entonces
			
			mes_vencimiento = mes + 1
			
		FinSi
		
	FinSi
	
	Si tipo_pago = 90 Entonces
		
		Si tipo_pago/3 + dia > dia_mes Y dia_mes = 30 Entonces
			
			mes_vencimiento = mes + 3
			
		FinSi
		
		Si tipo_pago/3 + dia < dia_mes O dia_mes = 31 Entonces
			
			mes_vencimiento = mes + 2
			
		FinSi
		
	FinSi
	
	Si mes_vencimiento > 12 Entonces
		
		mes_vencimiento = mes_vencimiento - 12
		
	FinSi
	
	Escribir "El día de vencimiento es el " dia_vencimiento " del " mes_vencimiento "."

	// Permite comprobar que se han generado los meses correctamente.
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
	
FinAlgoritmo
