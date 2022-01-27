Algoritmo codpostal
	
	definir cpostal_num Como Entero
	definir cpostal_letras Como caracter
	
	escribir "Introduzca su Código Postal: "
	leer cpostal_letras
	
	cpostal_num=ConvertirANumero(SubCadena(cpostal_letras,0,2))
	
	Si cpostal_num=2
		Escribir "La provincia es Albacete."
	SiNo
		Si cpostal_num=13
			Escribir "La provincia es Ciudad Real."
		SiNo
			Si cpostal_num=16
				Escribir "La provincia es Cuenca."
			SiNo
				Si cpostal_num=19
					Escribir "La provincia es Guadalajara."
				SiNo
					Si cpostal_num=45
						Escribir "La provincia es Toledo."
					SiNo
						Escribir "La provincia de " cpostal_letras " no pertenece a Castilla-La Mancha."
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
FinAlgoritmo
