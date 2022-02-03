Algoritmo secuencianumeros
	
	Definir n Como Entero
	Definir x Como Entero
	Definir i Como Entero
	Definir min Como Entero
	Definir max Como Entero
	
	Escribir "�Cu�ntos n�meros quieres comprobar?"
	Leer n
	
	i = 0
	Mientras i < n Hacer
		Escribir "Introduce un n�mero."
		Leer x
		
		Si i = 0 Entonces // Nada m�s empezar, el valor introducido es el mayor y el menor.
			min = x
			max = x
		FinSi
		
		Si i <> 0 Entonces
			
			Si x < min Entonces // Si el nuevo n�mero es menor, reemplaza al anterior.
				
				min = x
				
			FinSi
			
			Si x > max Entonces // Si el nuevo n�mero es mayor, reemplaza al anterior.
				
				max = x
				
			FinSi
			
		FinSi
		
		i = i + 1
		
	FinMientras
	
	Escribir "El n�mero m�s peque�o es " min "."
	Escribir "El n�mero m�s grande es " max "."

FinAlgoritmo
