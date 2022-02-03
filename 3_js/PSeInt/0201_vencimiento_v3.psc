Algoritmo vencimiento
	
	// Datos introducidos por el usuario.
	Definir fecha Como Caracter
	Definir tipo_pago Como Entero
	
	// Datos obtenidos a partir de los introducidos.
	Definir dia Como Entero
	Definir mes Como Entero
	Definir mes_siguiente Como Entero
	Definir mes_segundo Como Entero
	Definir contador Como Entero
	Definir dia_vencimiento Como Entero
	Definir mes_vencimiento Como Entero
	
	// Datos independientes de los valores del usuario.
	Definir meses Como Entero	
	Dimension meses[365]
	Definir dia_mes Como Entero
	Dimension dias_mes[12]
	
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
	
	// Bucle para generar los días del año en la array meses.
	// También añadimos los días de cada mes a la array dias_mes que necesitaremos más adelante.
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
			
			meses[j+n] = j
			
		FinPara
		
		n = n + k
		
		dias_mes[i] = k
		
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
				12: k = 31	// No llega a usarse.
				
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
	
	// En los Si de más adelante podría introducir [mes + 1], pero surgirían problemas en los meses finales del año, por lo que los definimos previamente.
	
	mes_siguiente = mes + 1
	
	Si mes_siguiente > 12 Entonces
		
		mes_siguiente = mes_siguiente - 12
		
	FinSi
	
	mes_segundo = mes + 2
	
	Si mes_siguiente > 12 Entonces
		
		mes_segundo = mes_segundo - 12
		
	FinSi
	
	// Para un vencimiento de 30 días, el 1 de enero vencería el 31 del mismo mes, pero el 1 de febrero vencería el 2 de marzo.
	// Este problema se acumula para 60 y 90 días, ya que hay que tener en cuanta los días de los meses siguientes y no solo del mes de entrada.
	
	// Si los días que tarda el vencimiento son más de los que tienen el total de meses (contando el día de inicio), me paso un mes más.
	// Si los días que tarda el vencimiento son menos que el total de meses (contando el día de inicio), me quedo dentro del mes.
	Segun tipo_pago Hacer
		
		30: Si dias_mes[mes] > tipo_pago + dia Entonces
				
				mes_vencimiento = mes
				
			SiNo
				
				mes_vencimiento = mes + 1
				
			FinSi
			
		60:	Si dias_mes[mes] + dias_mes[mes_siguiente] > tipo_pago + dia 	Entonces
				
				mes_vencimiento = mes + 1
				
			SiNo
				
				mes_vencimiento = mes + 2
				
			FinSi
			
		90:	Si dias_mes[mes] + dias_mes[mes_siguiente] + dias_mes[mes_segundo] > tipo_pago + dia 	Entonces
				
				mes_vencimiento = mes + 2
				
			SiNo
				
				mes_vencimiento = mes + 3
				
			FinSi
		
	FinSegun
	
	// Si pasamos de diciembre, empezamos el año desde el mes siguiente.
	Si mes_vencimiento > 12 Entonces
		
		mes_vencimiento = mes_vencimiento - 12
		
	FinSi
	
	Escribir "El día de vencimiento es el " dia_vencimiento " del " mes_vencimiento "."

	
FinAlgoritmo
