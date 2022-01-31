Algoritmo chinos
	Definir mano_jugador Como Entero
	Definir mano_maquina Como Entero
	
	Definir apuesta_jugador Como Entero
	Definir apuesta_maquina Como Entero
	
	Definir mano_total Como Entero
	
	// Predefinimos un valor mayor al permitido para forzar la entrada al bucle.
	mano_jugador = 4
	Mientras mano_jugador > 3
		Escribir "�Cu�ntos chinos llevas en la mano?"
		Leer mano_jugador
		
		Si mano_jugador > 3 Entonces
			Escribir "No puedes jugar m�s de 3 chinos."
		FinSi
	FinMientras
	
	mano_maquina = azar(4)
	Escribir "Tu oponente ha hecho su elecci�n."
	
	// Predefinimos un valor mayor al permitido para forzar la entrada al bucle.
	apuesta_jugador = 7
	Mientras apuesta_jugador > 6
		Escribir "�Cu�l es tu apuesta?"
		Leer apuesta_jugador
		
		Si apuesta_jugador > 6 Entonces
			Escribir "El total no puede ser mayor que 6."
		FinSi
	FinMientras
	
	// Forzamos el mismo valor para entrar al bucle que NO nos permite que la m�quina repita la misma apuesta.
	apuesta_maquina = apuesta_jugador
	
	// La m�quina apostar� un valor m�nimo igual a su mano m�s un valor al azar hasta 3.
	Mientras apuesta_maquina = apuesta_jugador
		apuesta_maquina = mano_maquina + azar (4)
	FinMientras
	
	mano_total = mano_jugador + mano_maquina
	
	Si mano_total = apuesta_jugador Entonces
		Escribir "Has jugadado " mano_jugador " y la m�quina ha jugado " mano_maquina ", para un total de " mano_total "."
		Escribir "Has apostado que el total ser�a " apuesta_jugador " y la m�quina ha apostado un resultado de " apuesta_maquina "."
		Escribir "Eres el ganador."
	FinSi
	
	Si mano_total = apuesta_maquina Entonces
		Escribir "Has jugadado " mano_jugador " y la m�quina ha jugado " mano_maquina ", para un total de " mano_total "."
		Escribir "Has apostado que el total ser�a " apuesta_jugador " y la m�quina ha apostado un resultado de " apuesta_maquina "."
		Escribir "Has perdido."
	FinSi
	
	Si mano_total <> apuesta_maquina Y mano_total <> apuesta_jugador Entonces
		Escribir "Has jugadado " mano_jugador " y la m�quina ha jugado " mano_maquina ", para un total de " mano_total "."
		Escribir "Has apostado que el total ser�a " apuesta_jugador " y la m�quina ha apostado un resultado de " apuesta_maquina "."
		Escribir "No hay ganador."
	FinSi
	
FinAlgoritmo
 