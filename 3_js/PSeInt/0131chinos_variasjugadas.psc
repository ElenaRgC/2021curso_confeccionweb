Algoritmo chinos
	Definir mano_jugador Como Entero
	Definir mano_maquina Como Entero
	
	Definir apuesta_jugador Como Entero
	Definir apuesta_maquina Como Entero
	
	Definir dif_jugador Como Entero
	Definir dif_maquina Como Entero
	
	Definir mano_total Como Entero
	
	Definir victorias Como Entero
	Definir victorias_jugador Como Entero
	Definir victorias_maquina Como Entero
	
	Definir aproximacion Como Caracter
	
	Escribir "¿Cuántas victorias determinan al ganador?"
	Leer victorias
	
	Mientras aproximacion <> "S" Y aproximacion <> "N" Hacer
		Escribir "¿Se permite ganar por aproximación? (S/N)"
		Leer aproximacion
		
		Si aproximacion <> "S" Y aproximacion <> "N" Entonces
			Escribir "Introduzca un valor valído."
			Leer aproximacion
		FinSi
	FinMientras
	
	Mientras victorias_jugador <> victorias o victorias_maquina <> victorias Hacer
	
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
		
		//Texto que se mostrará independientemente del resultado.
		Escribir "Has jugadado " mano_jugador " y tu oponente ha jugado " mano_maquina ", para un total de " mano_total "."
		Escribir "Has apostado que el total sería " apuesta_jugador " y tu oponente ha apostado un resultado de " apuesta_maquina "."
		
		
		// Condiciones para una partida clásica: jugador O máquina aciertan el valor exacto.
		Si mano_total = apuesta_jugador O mano_total = apuesta_maquina Entonces
			Si mano_total = apuesta_jugador Entonces
				Escribir "Eres el ganador de esta ronda."
				
				victorias_jugador = victorias_jugador + 1
			SiNo
				Escribir "Has perdido esta ronda."
				
				victorias_maquina = victorias_maquina + 1
			FinSi
		FinSi
		
		Si aproximacion = "N" Y mano_total <> apuesta_jugador Y mano_total <> apuesta_maquina Entonces
			Escribir "No hay ganador esta ronda."
		FinSi
		
		// Solo se contabilizarán estas victorias si se permite.
		Mientras aproximacion = "S" Hacer
			
			// Condiciones en caso de que no se cumpla la condición anterior, es decir, se permite ganar por aproximación.
			Si mano_total <> apuesta_jugador Y mano_total <> apuesta_maquina Entonces
				
				// Diferencia entre las apuestas y el total para ambos jugadores. Si te pasas, la diferencia será negativa (la mano es menor que tu apuesta).
				dif_jugador =  mano_total - apuesta_jugador
				dif_maquina = mano_total - apuesta_maquina
				
				// Si alguno se ha pasado, pierde. Si los dos se han pasado, no hay ganador.
				Si dif_jugador < 0 O dif_maquina < 0 Entonces
					Si dif_jugador < 0  Y dif_maquina > 0 Entonces
						Escribir "Te has pasado. Tu oponente gana esta ronda."
						
						victorias_maquina = victorias_maquina + 1
					FinSi
					
					Si dif_maquina < 0  Y dif_jugador > 0 Entonces
						Escribir "Tu oponente se ha pasado. Eres el ganador de esta ronda."
						
						victorias_jugador = victorias_jugador + 1
					FinSi
					
					Si dif_jugador < 0  Y dif_maquina < 0  Entonces
						Escribir "No hay ganador esta ronda."
					FinSi
					
				FinSi
					
				// Aquel que tenga la menor diferencia sin pasarse (valor negativo) será el ganador.
				Si dif_jugador > 0 Y dif_jugador < dif_maquina
					Escribir "Has estado más cerca esta ronda."
					
					victorias_jugador = victorias_jugador + 1
				FinSi
				
				Si dif_maquina> 0 Y dif_maquina < dif_jugador
					Escribir "Tu oponente ha estado más cerca esta ronda."
					
					victorias_maquina = victorias_maquina + 1
				FinSi
				
			FinSi
			
		FinMientras
		
		Si victorias_jugador = victorias Entonces
			Escribir "Eres el ganador " victorias_jugador " a " victorias_maquina "."
		FinSi
		
		Si victorias_maquina = victorias Entonces
			Escribir "Has perdido " victorias_jugador " a " victorias_maquina "."
		FinSi
		
	FinMientras

FinAlgoritmo
