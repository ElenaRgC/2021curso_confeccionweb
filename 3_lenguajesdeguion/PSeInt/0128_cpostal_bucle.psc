Algoritmo codpostal
	
	definir cpostal_num Como Entero
	definir cpostal_letras Como caracter
	definir si_o_no Como Caracter
	
	si_o_no = "S"
	
	Mientras si_o_no = "S" Hacer
		
		escribir "Introduzca el C�digo Postal: "
		leer cpostal_letras
	
		cpostal_num=ConvertirANumero(SubCadena(cpostal_letras,0,2))
		
		Segun cpostal_num Hacer
			2:
				Escribir "La provincia es Albacete."
				
			13:
				Escribir "La provincia es Ciudad Real."
				
			16:
				Escribir "La provincia es Cuenca."
			
			19:
				Escribir "La provincia es Guadalajara."
				
			45:
				Escribir "La provincia es Toledo."
				
			De Otro Modo:
				
				Escribir "La provincia de " cpostal_letras " no pertenece a Castilla-La Mancha."
				
		FinSegun
		
		si_o_no = " "
		
		Mientras si_o_no <> "S" Y si_o_no <> "N" Hacer
			Escribir "�Quiere comprobar otro C�digo Postal? (S/N)"
			leer si_o_no
			
			Si si_o_no <> "S" Y si_o_no <> "N" Entonces
				Escribir "Escriba un comando v�lido."
			FinSi
		FinMientras
		
	FinMientras
FinAlgoritmo
