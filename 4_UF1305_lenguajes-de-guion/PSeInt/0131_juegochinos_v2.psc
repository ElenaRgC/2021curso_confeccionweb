Algoritmo chinos
	Definir mano_jugador Como Entero
	Definir mano_maquina Como Entero
	
	Definir apuesta_jugador Como Entero
	Definir apuesta_maquina Como Entero
	
	Definir dif_jugador Como Entero
	Definir dif_maquina Como Entero
	
	Definir mano_total Como Entero
	
	// Predefinimos un valor mayor al permitido para forzar la entrada al bucle.
	mano_jugador = 4
	Mientras mano_jugador > 3
		Escribir "?Cu?ntos chinos llevas en la mano?"
		Leer mano_jugador
		
		Si mano_jugador > 3 Entonces
			Escribir "No puedes jugar m?s de 3 chinos."
		FinSi
	FinMientras
		
	mano_maquina = azar(4)
	Escribir "Tu oponente ha hecho su elecci?n."
	
	// Predefinimos un valor mayor al permitido para forzar la entrada al bucle.
	apuesta_jugador = 7
	Mientras apuesta_jugador > 6
		Escribir "?Cu?l es tu apuesta?"
		Leer apuesta_jugador
		
		Si apuesta_jugador > 6 Entonces
			Escribir "El total no puede ser mayor que 6."
			FinSi
	FinMientras
	
	// Forzamos el mismo valor para entrar al bucle que NO nos permite que la m?quina repita la misma apuesta.
	apuesta_maquina = apuesta_jugador
	
	// La m?quina apostar? un valor m?nimo igual a su mano m?s un valor al azar hasta 3.
	Mientras apuesta_maquina = apuesta_jugador
		apuesta_maquina = mano_maquina + azar (4)
	FinMientras
	
	mano_total = mano_jugador + mano_maquina
	
	//Texto que se mostrar? independientemente del resultado.
	Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
	Escribir "Has apostado que el total ser?a " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
	
	
	// Condiciones para una partida cl?sica: jugador O m?quina aciertan el valor exacto.
	Si mano_total = apuesta_jugador O mano_total = apuesta_maquina Entonces
		Si mano_total = apuesta_jugador Entonces
			Escribir "Eres el ganador."
		SiNo
			Escribir "Has perdido."
		FinSi
	FinSi
	
	// Condiciones en caso de que no se cumpla la condici?n anterior, es decir, se permite ganar por aproximaci?n.
	Si mano_total <> apuesta_jugador Y mano_total <> apuesta_maquina Entonces
		
		// Diferencia entre las apuestas y el total para ambos jugadores. Si te pasas, la diferencia ser? negativa (la mano es menor que tu apuesta).
		dif_jugador =  mano_total - apuesta_jugador
		dif_maquina = mano_total - apuesta_maquina
		
//		Escribir dif_jugador
//		Escribir dif_maquina
//		Escribir mano_maquina
//		Escribir apuesta_maquina
		
		// Si alguno se ha pasado, pierde. Si los dos se han pasado, no hay ganador.
		Si dif_jugador < 0 O dif_maquina < 0 Entonces
			Si dif_jugador < 0  Y dif_maquina > 0 Entonces
				Escribir "Te has pasado. Tu oponente gana."
			FinSi
			
			Si dif_maquina < 0  Y dif_jugador > 0 Entonces
				Escribir "Tu oponente se ha pasado. Eres el ganador."
			FinSi
			
			Si dif_jugador < 0  Y dif_maquina < 0  Entonces
				Escribir "No hay ganador."
			FinSi
			
		FinSi
		
		// Aquel que tenga la menor diferencia sin pasarse (valor negativo) ser? el ganador.
		Si dif_jugador > 0 Y dif_jugador < dif_maquina
			Escribir "Has estado m?s cerca."
		FinSi
		
		Si dif_maquina> 0 Y dif_maquina < dif_jugador
			Escribir "Tu oponente ha estado m?s cerca."
		FinSi
		
	FinSi
 
FinAlgoritmo
