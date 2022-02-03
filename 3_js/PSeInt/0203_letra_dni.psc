Algoritmo dni
	// Datos introducidos por el usuario.
	Definir numero_dni Como Entero
	
	// Datos generados a partir de los datos introducidos.
	Definir letra_dni Como Caracter
	Definir modulo_dni Como Entero
	
	// Datos independientes de los datos del usuario.
	Definir letras Como Caracter
	Dimension letras[23]
	
	// Pedimos datos al usuario.
	Escribir "Por favor, introduzca el número de su DNI."
	leer numero_dni
	
	// Obtenemos el resto de nuestro DNI dividido entre 23.
	modulo_dni = numero_dni MOD 23
	
	// Creamos la array letras.
	
	Para i <- 0 Hasta 22 Hacer
		
		Segun i Hacer
			0: j = "T"
			1: j = "R"
			2: j = "W"
			3: j = "A"
			4: j = "G"
			5: j = "M"
			6: j = "Y"
			7: j = "F"
			8: j = "P"
			9: j = "D"
			10: j =	"X"
			11: j =	"B"
			12: j = "N"
			13: j =	"J"
			14: j = "Z"
			15: j = "S"
			16: j =	"Q"
			17: j = "V"
			18: j = "H"
			19: j =	"L"
			20: j = "C"
			21: j = "K"
			22: j =	"E"
		FinSegun
		
		letras[i+1] = j // Necesitamos añadir 1 ya que no existe la posición 0 en PSeInt, pero necesitamos el valor 0.
		
	FinPara
	
	// El valor del módulo da la posición del array letras, considerando el 1 que hemos añadido antes.
	// Ya podemos devolver al usuario la información.
	
	Escribir "La letra de su DNI es " letras[modulo_dni + 1] "."
	Escribir "Su DNI es " numero_dni letras[modulo_dni + 1] "."
	
	
	
FinAlgoritmo
