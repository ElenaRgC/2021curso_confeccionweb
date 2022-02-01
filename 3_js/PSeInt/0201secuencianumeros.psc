Algoritmo secuencianumeros
	
	Definir n Como Entero
	Definir x Como Entero
	Definir i Como Entero
	Definir min Como Entero
	Definir max Como Entero
	
	Escribir "¿Cuántos números quieres comprobar?"
	Leer n
	
	i = 0
	Mientras i < n Hacer
		Escribir "Introduce un número."
		Leer x
		
		Si i = 0 Entonces // Nada más empezar, el valor introducido es el mayor y el menor.
			min = x
			max = x
		FinSi
		
		Si i <> 0 Entonces
			
			Si x < min Entonces // Si el nuevo número es menor, reemplaza al anterior.
				
				min = x
				
			FinSi
			
			Si x > max Entonces // Si el nuevo número es mayor, reemplaza al anterior.
				
				max = x
				
			FinSi
			
		FinSi
		
		i = i + 1
		
	FinMientras
	
	Escribir "El número más pequeño es " min "."
	Escribir "El número más grande es " max "."

FinAlgoritmo
