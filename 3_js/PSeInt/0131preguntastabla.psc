Algoritmo ejercicio
	
	// a y b serán los valores que generaremos y c será el resultado.Podría hacerse sin definir c y comprobar si d es a*b.
	Definir a Como Entero
	Definir b Como Entero
	Definir c Como Entero
	
	// d será el valor introducido por el usuario.
	Definir d Como Entero
	
	// Variable para los bucles
	Definir continuar Como Caracter
	Definir intentos Como Entero
	
	// Mientras el usuario no diga que quiere parar, se generan ejercicios.
	Mientras continuar <> "N" Hacer
		
		a = azar(11)
		b = azar(11)
		c = a*b
		
		Escribir "¿Cuál es el resultado de " a " x " b "?"
		Escribir "Tienes 3 intentos."
		Leer d
		
		// Si el usuario se equivoca, puede volver a intentarlo 3 veces. Se compara con 2 porque ya lo ha intentado una vez.
		Mientras intentos < 2
			Si c <> d Entonces
				Escribir "Inténtalo de nuevo."
				intentos = intentos + 1
				Leer d
				
			SiNo
				intentos = 3
			FinSi
			
		FinMientras
		
		Escribir "¿Quiere continuar practicando? (S/N)?"
		Leer continuar
		
	FinMientras
	
FinAlgoritmo