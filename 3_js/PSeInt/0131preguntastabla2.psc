Algoritmo multiplicaciones
	// a y b ser�n los valores que generaremos y c ser� el resultado.Podr�a hacerse sin definir c y comprobar si d es a*b.
	Definir a Como Entero
	Definir b Como Entero
	Definir c Como Entero
	
	// d ser� el valor introducido por el usuario.
	Definir d Como Entero
	
	// Variable para contabilizar los aciertos.
	Definir aciertos Como Entero
	
	Definir continuar Como Caracter
	
	Mientras continuar <> "N" Hacer
		Para preguntas <- 1 Hasta 10 Con Paso 1 Hacer
			a = azar(11)
			b = azar(11)
			c = a*b
		
			Escribir "�Cu�l es el resultado de " a " x " b "?"
			Leer d
		
			Si d = c Entonces
				aciertos = aciertos + 1
			FinSi
		
			// Escribir aciertos
		
		FinPara
	
		Escribir "Has acertado " aciertos " de 10 preguntas."
	
		Si aciertos <= 2 Entonces
			Escribir "�Repasa un poco y vuelve a intentarlo!"
		FinSi
	
		Si aciertos >3 Y aciertos <=4 Entonces
			Escribir "Todav�a te falta un poco, sigue as�."
		FinSi
	
		Si aciertos >= 5 Y aciertos <= 7 Entonces
			Escribir "Buen intento, sigue as�."
		FinSi
	
		Si aciertos >= 8 Y aciertos <> 10 Entonces
			Escribir "Ya casi lo tienes."
		FinSi
	
		Si aciertos = 10 Entonces
			Escribir "Perfecto, puedes tomarte un descanso."
		FinSi
	
//	Segun aciertos Hacer
//		0:
//			Escribir "Vuelve despu�s de repasar."
//		1:	
//			Escribir "�Repasa un poco y vuelve a intentarlo!"
//		2:
//			Escribir "�No te rindas, sigue intent�ndolo!"
//		3:
//			Escribir "Ya le est�s cogiendo el truco."
//		4:
//			Escribir "Todav�a te falta un poco, sigue as�."
//		5:
//			Escribir "No te conformes, sigue estudiando."
//		6:
//			Escribir "M�s de la mitad, no lo dejes aqu�."
//		7:
//			Escribir "Notable."
//		8:
//			Escribir "Buen intento, sigue as�."
//		9:
//			Escribir "Ya casi lo tienes."
//		10:
//			Escribir "Perfecto, puedes tomarte un descanso."
		//	FinSegun
		
		Escribir "�Quiere continuar practicando? (S/N)?"
		Leer continuar
		
	FinMientras
FinAlgoritmo
