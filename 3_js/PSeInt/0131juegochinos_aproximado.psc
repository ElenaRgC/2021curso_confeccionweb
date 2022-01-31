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
		Escribir "¿Cuántos chinos llevas en la mano?"
		Leer mano_jugador
		
		Si mano_jugador > 3 Entonces
			Escribir "No puedes jugar más de 3 chinos."
		FinSi
	FinMientras
		
	mano_maquina = azar(4)
	Escribir "Tu oponente ha hecho su elección."
	
	// Predefinimos un valor mayor al permitido para forzar la entrada al bucle.
	apuesta_jugador = 7
	Mientras apuesta_jugador > 6
		Escribir "¿Cuál es tu apuesta?"
		Leer apuesta_jugador
		
		Si apuesta_jugador > 6 Entonces
			Escribir "El total no puede ser mayor que 6."
			FinSi
	FinMientras
	
	// Forzamos el mismo valor para entrar al bucle que NO nos permite que la máquina repita la misma apuesta.
	apuesta_maquina = apuesta_jugador
	
	// La máquina apostará un valor mínimo igual a su mano más un valor al azar hasta 3.
	Mientras apuesta_maquina = apuesta_jugador
		apuesta_maquina = mano_maquina + azar (4)
	FinMientras
	
	mano_total = mano_jugador + mano_maquina
	
	// Condiciones para una partida clásica: jugador O máquina aciertan el valor exacto.
	Si mano_total = apuesta_jugador O mano_total = apuesta_maquina Entonces
		Si mano_total = apuesta_jugador Entonces
			Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
			Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
			Escribir "Eres el ganador."
		SiNo
			Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
			Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
			Escribir "Has perdido."
		FinSi
	FinSi
	
	// Condiciones en caso de que no se cumpla la condición anterior. Podría estar dentro de un SiNo.
	Si mano_total <> apuesta_jugador Y mano_total <> apuesta_maquina Entonces
		
		// Diferencia entre las apuestas y el total para ambos jugadores.
		dif_jugador =  mano_total - apuesta_jugador
		dif_maquina = mano_total - apuesta_maquina
		
		Escribir dif_jugador
		Escribir dif_maquina
		
		// Aquel que tenga la menor diferencia sin pasarse (valor negativo) será el ganador.
		Si dif_jugador > 0 Y dif_jugador < dif_maquina // El problema es que la diferencia puede ser menor y negativa, en cuyo caso habrían ganado. Comprobar esa opción primero.
			Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
			Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
			Escribir "Has estado más cerca."
		FinSi
		
		Si dif_maquina > 0 Y dif_maquina < dif_jugador
			Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
			Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
			Escribir "Tu oponente ha estado más cerca."
		FinSi
		
		// Ambos han estado igual de próximos (imposible porque no pueden apostar el mismo valor) o se han pasado (valor negativo de la diferencia)
		Si dif_jugador = dif_maquina O dif_jugador < 0 Y dif_maquina < 0 Entonces
			Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
			Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
			Escribir "No hay ganador."
		FinSi
	FinSi
 
FinAlgoritmo
