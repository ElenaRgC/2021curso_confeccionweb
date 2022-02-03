Algoritmo ejercicio
	
	// a y b ser�n los valores que generaremos y c ser� el resultado.Podr�a hacerse sin definir c y comprobar si d es a*b.
	Definir a Como Entero
	Definir b Como Entero
	Definir c Como Entero
	
	// d ser� el valor introducido por el usuario.
	Definir d Como Entero
	
	// Variable para el bucle
	Definir continuar Como Caracter

	// Mientras el usuario no diga que quiere parar, se generan ejercicios.
	Mientras continuar <> "N" Hacer
		
		a = azar(11)
		b = azar(11)
		c = a*b
		
		Escribir "�Cu�l es el resultado de " a " x " b "?"
		Leer d
		
		// Si el usuario se equivoca, puede volver a intentar resolver la misma cuenta (si dejamos que mientras vuelva a empezar, azar generar�a una pregunta nueva).
		Mientras c <> d Hacer
			Escribir "Int�ntalo de nuevo."
			Leer d
		FinMientras
		
		Escribir "�Quiere continuar practicando? (S/N)?"
		Leer continuar
		
	FinMientras
	
	
FinAlgoritmo
