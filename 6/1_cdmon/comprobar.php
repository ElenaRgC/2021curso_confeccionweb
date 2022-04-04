<html>
<head></head>
<body>
<?php

//Conecta con el servidor PON LOS DATOS QUE VIENEN EN EL HOSTING:
$conexion=new mysqli("localhost","myelenarc","F4g0YnT7","ejemplopublica04");
if (!$conexion){
	echo "ERROR: Imposible establecer conexión con la base de datos para ese usuario y esa clave.<br>\n";
}else{
	echo "Conexion con la base de datos establecida correctamente...<br><br>\n";
}

$usuario= $_POST["usu"];    
$clave= $_POST["clave"];

$resul=mysqli_query($conexion,"SELECT * FROM acceso where login='$usuario' AND clave=md5('$clave');");
// Si no pudo realizarse la consulta...
if(!$resul){
	echo "ERROR: Imposible realizar consulta.<br>\n";
}else{
    echo "Consulta realizada satisfactoriamente!<br>\n";
}

# Mostraremos todos sus registros en una tabla html...

echo "Se encontraron ".mysqli_num_rows($resul)." registros.<br>";

if (mysqli_num_rows($resul) == 0) {echo "<br><b>Usuario y/o clave incorrectos!.<br></b>\n";}
else
{
	echo "<br>USUARIO CONETADO:<br>\n";
	# Visualizamos el usuario que se ha conectado:
	while ($fila = mysqli_fetch_row($resul)){
				echo "<b>USUARIO: </b>$fila[0]<b>, con CLAVE: </b>$fila[1]<b> y NOMBRE: </b>$fila[2]<b>. HAS CONSEGUIDO ENTRAR EN LA PAGINA WEB!</b><br>";
				echo "<br><a href='dominio.html'>Información sobre la contratación de un DOMINIO</a>";
				echo "<br><a href='hosting.html'>Información sobre la contratación de un HOSTING</a>";
			
	}

}

mysqli_close($conexion);
?>
</body>
</html>


