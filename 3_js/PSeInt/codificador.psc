Algoritmo codificador
	
	definir respuesta1 Como Caracter
	definir respuesta2 Como Caracter
	definir mensaje Como Caracter
	definir long_mensaje Como Entero
	definir mensajecodificado Como Caracter
	
	escribir "¿Quiere descodificar un mensaje? S/N"
	leer respuesta1
	
	Si respuesta1 <> "S" Entonces
		escribir "¿Quiere codificar un mensaje? S/N"
		leer respuesta2
	FinSi
	
	Si respuesta2 = "S" Entonces
		escribir "Escriba el mensaje que desea codificar"
		leer mensaje
		conversor = ConvertirANumero(mensaje)+213
//		mensajecodificado = ConvertirATexto(conversor)
	FinSi
	
	long_mensaje = Longitud(mensaje)
	
	Dimension conversor[long_mensaje]
	
	Para i<-1 Hasta long_mensaje Con Paso 1 Hacer
		conversor[i] = SubCadena(mensaje, i, i)
	Fin Para
	
	
	
FinAlgoritmo
