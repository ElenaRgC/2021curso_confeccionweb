Algoritmo cambio
	definir metros Como Entero
	definir cp Como Entero
	definir pulgadas Como Real
	definir pies Como Real
	
	Mientras cp < 3 Hacer
	
		Escribir "Escriba los metros que desea convertir: "
		leer metros
		
		Escribir "Pulsa 1 para convertir a pulgadas."
		Escribir "Pulsa 2 para convertir a pies."
		//Escribir "Pulsa 3 para salir."
	
		leer cp
	
		Segun cp Hacer
			1: 
				//Cálculos para pulgadas
				Escribir "El resultado es: " pulgadas " pulgadas."
			
			2: 
				//Cálculos para pies
				Escribir "El resultado es: " pies " pies."
				
			//3: 
			//	Escribir "Fin del algoritmo."
				
			De Otro Modo
				Escribir "Seleccione una opción válida."
		FinSegun
	
	FinMientras
	
FinAlgoritmo
