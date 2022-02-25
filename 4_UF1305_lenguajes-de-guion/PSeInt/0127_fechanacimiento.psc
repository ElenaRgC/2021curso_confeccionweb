Algoritmo fechanacimiento
	definir fecha_nacimiento Como Caracter
	definir ano_nacimiento Como Entero
	definir mes_nacimiento Como Entero
	definir dia_nacimiento Como Entero
	
	definir dia_hoy Como Entero
	definir mes_hoy Como Entero
	definir ano_hoy Como Entero
	
	dia_hoy = 27
	mes_hoy = 1
	ano_hoy = 2022
	
	escribir "Escriba su fecha de nacimiento en formato DD-MM-AAAA"
	leer fecha_nacimiento
	
	// Comprobamos los datos. El problema es que pueden volver a introducirse mal. ¿No se puede meter un FinAlgoritmo aquí dentro?
	Si Longitud(fecha_nacimiento) <> 10 Entonces
		Escribir "Introduzca sus datos en el formato especificado."
		leer fecha_nacimiento
	FinSi
	
	// Extraemos el día, mes y año de la cadena dada y los convertimos a un entero.
	ano_nacimiento = ConvertirANumero(SubCadena(fecha_nacimiento,7,11))
	mes_nacimiento = ConvertirANumero(Subcadena(fecha_nacimiento,4,5))
	dia_nacimiento = ConvertirANumero(Subcadena(fecha_nacimiento,1,2))
	
	// Pequeña comprobación de que los datos introducidos por nuestra parte y por el usuario son correctos. IE algún número es igual a cero.
	escribir "Hoy es " dia_hoy " del mes " mes_hoy " del año " ano_hoy " y "
	escribir "usted nacio el dia " dia_nacimiento " del mes " mes_nacimiento " del año " ano_nacimiento " por tanto:"
	
	// No es necesario comprobar el año porque se cumplen años todos los años.
	Si mes_hoy = mes_nacimiento Y dia_hoy = dia_nacimiento
		Entonces
		Escribir "Feliz cumpleaños."
	FinSi

	Si ano_hoy - ano_nacimiento >= 18 Entonces
		Escribir "Puede acceder a este sitio web."
	
	SiNo // Se pueden quedar fuera algunos usuarios que ya hayan cumplido años, podemos comprobar con su mes y día de nacimiento.
		Si ano_hoy - ano_nacimiento = 17 Y mes_nacimiento = mes_hoy Y dia_nacimiento <= dia_hoy Entonces
		
			Escribir "Puede acceder a este sitio web."
	
		SiNo
			Escribir "No puede acceder a este sitio web."
			
		FinSi
	Fin Si

// Esta es la solución original que probé antes de  usar el operador Y:
	
//Si ano_hoy-ano_nacimiento>=18 Entonces
//	Escribir "Puede acceder a este sitio web."
//SiNo
//	Si ano_hoy-ano_nacimiento=17 Entonces
//		
//		Si mes_nacimiento=mes_hoy Entonces
//			
//			Si dia_nacimiento<=dia_hoy Entonces // Los nacidos hoy cumplirían los 18.
//				
//				Escribir "Puede acceder a este sitio web."
//				
//			SiNo
//				
//				Escribir "No puede acceder a este sitio web."
//			FinSi
//		SiNo
//			
//			Escribir "No puede acceder a este sitio web."	
//			
//		FinSi
//		
//	SiNo
//		
//		Escribir "No puede acceder a este sitio web."	
//	
//	FinSi
//Fin Si

FinAlgoritmo