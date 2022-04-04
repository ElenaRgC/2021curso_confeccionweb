Repaso Tema 2
Joaquín Rubio
•
31 mar (Última modificación: 1 abr)
100 puntos
Sigue las instrucciones del archivo adjunto y súbelo con las soluciones y los documentos que solicita.

k Repaso Tema 2 2022.odt
OpenOffice Writer

alta.html
HTML

alta.php
HTML
Comentarios de la clase
Tu trabajo
Entregado

ALTA.html
HTML

alta.php
Archivo desconocido

comprobar.php
Archivo desconocido

Repaso Tema 2
Documentos de Google
Comentarios privados
<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>

<head>

</head>

<body>
    <?php

$usuario= ($_POST["usu"]);
$clave= ($_POST["clave"]);
$nya= ($_POST["nya"]);

$mysqli = new mysqli("localhost", "root", "Sepecam2020-21", "ejemplo");


//Conecta con el servidor
$conexion=mysqli_connect("localhost","root","Sepecam2020-21");
if (!$conexion){
	echo "ERROR: Imposible establecer conexión con la base de datos para ese usuario y esa clave.<br>\n";
}else{
	echo "Conexion con la base de datos establecida correctamente...<br><br>\n";
}

//Conecta con la base de datos
$db = mysqli_select_db($conexion,"ejemplo");
if (!$db){
		echo "ERROR: Imposible seleccionar la base de datos.<br>\n";
	}
	else{
		echo "Base de datos seleccionada satisfactoriamente...<br><br>\n";
     }
if (!$db) {
    die("Database selection failed: " . mysqli_error());
}

$alta=mysqli_query($conexion,"INSERT into acceso values ('$usuario',md5('$clave'),'$nya');");

// Si no pudo realizarse la consulta...
if(!$alta){
	echo "ERROR: Imposible realizar consulta.<br>\n";
}else{
    echo "Alta realizada satisfactoriamente!<br>\n";
}

mysqli_close($conexion);
?>

</body>

</html>