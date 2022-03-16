<?php
//AQUI SE METEN LAS FUNCIONES DE COMPROBACIÓN
function validarCampoTexto($texto)
{
    $patron = '/^[a-zA-Z\s]+$/';
    if (preg_match($patron, $texto)) {
        return true;
    } else {
        return false;
    }
}

function validarDni($dato)
{
    $dato = strtoUpper(trim($dato));
    $letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
    $patron = '/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/';

    if (!preg_match($patron, $dato)) {
        return false;
    }

    $num_dni = (int)($dato . substr(0, 8));
    $resto = $num_dni % 23;

    //Se comprueba que la letra que ha metido el usuario sea igual que la de la posición del array
    if ($dato[8] != $letrasDNI[$resto]) {
        return false;
    } else {
        return true;
    }
}

function validarFormatoFecha($campo)
{
    $patron = '/^([0][1-9]|[1-2]\d|3[01])\/(0[1-9]|1[012])\/\d{4}$/';

    if (preg_match($patron, $campo)) {
        return true;
    } else {
        return false;
    }
}

function existeFecha($fecha)
{
    $array_fecha = explode("/", $fecha);
    $day = (int)$array_fecha[0];
    $month = (int)$array_fecha[1];
    $year = (int)$array_fecha[2];

    if (checkdate($month, $day, $year)) {
        return true;
    } else {
        return false;
    }
}

function validarFecha($elemento)
{
    $fecha = trim($elemento);
    if ($fecha != "") {
        if (validarFormatoFecha($fecha)) {
            if (existeFecha($fecha)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validarTelefono($elemento)
{
    $numero = trim($elemento);
    $patron = '/^[6-9]\d{2}(\s\d{2}){3}$/';

    if ($numero != "") {
        if (preg_match($patron, $numero)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validarEmail($elemento){
    $correo = trim($elemento);
    $patron = '/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/';
    
    if ($correo != "") {
        if (preg_match($patron,$correo)) 
        {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
    }
}

function validarCPostal($elemento){
    $dato = trim($elemento);
    $patron = '/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/';

    if (preg_match($patron,$dato))
    {
        return true;
    } else if ($dato == "") {
        return true;
    } else {
        return false;
    }
}

function validarSelect($elemento){
    if ($elemento == "")
    {
        return false;
    } else {
        return true;
    }
}
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <?php
    //RECOJO LOS VALORES DEL FORMULARIO QUE LE LLAMA
    $nombre = $_REQUEST['nombre'];
    $apellidos = $_REQUEST['apellidos'];
    $dni = $_REQUEST['dni'];
    $fecha = $_REQUEST['fecha'];
    $telefono = $_REQUEST['telefono'];
    $correo = $_REQUEST['correo'];
    $domicilio = $_REQUEST['domicilio'];
    $cpostal = $_REQUEST['cpostal'];
    $ocupacion = $_REQUEST['ocupacion'];
    if (isset($_REQUEST['aficiones'])) {
        $aficiones = $_REQUEST['aficiones'];
    }
    if (isset($_REQUEST['sexo'])) {
        $sexo = $_REQUEST['sexo'];
    }
    if (isset($_REQUEST['usuario'])) {
        $usuario = $_REQUEST['usuario'];
    }

    //REALIZO LAS COMPROBACIONES
    if (validarCampoTexto($nombre) == false) {
        $errores['nombre'] = "Debe rellenar el nombre correctamente.";
    }
    if (validarCampoTexto($apellidos) == false) {
        $errores['apellidos'] = "Debe rellenar los apellidos correctamente.";
    }
    if (validarDni($dni) == false) {
        $errores['dni'] = "Debe rellenar el DNI correctamente.";
    }
    if (validarFecha($fecha) == false) {
        $errores['fecha'] = "Debe rellenar la fecha de nacimiento correctamente.";
    }
    if (validarTelefono($telefono) == false) {
        $errores['telefono'] = "Debe rellenar el teléfono correctamente.";
    }
    if (validarEmail($correo) == false) {
        $errores['correo']="Debe rellenar el correo correctamente.";
    }
    if (validarCPostal($cpostal) == false) {
        $errores['cpostal']="Debe rellenar el código postal correctamente.";
    }
    if (validarSelect($ocupacion) == false) {
        $errores['ocupacion']="Debe rellenar la ocupación correctamente.";
    }
    if (!isset($aficiones)) {
        $errores['aficiones']="Debe rellenar las aficiones correctamente.";
    }
    if (!isset($sexo)) {
        $errores['sexo']="Debe rellenar el sexo correctamente.";
    }
    if (!isset($usuario)) {
        $errores['usuario']="Debe rellenar nuevo usuario correctamente.";
    }

    // La variable enviar correo valdrá true si existe el array de errores,
    // si no, valdrá false.

    $enviarcorreo = !isset($errores);

    if ($enviarcorreo == true) {
        // Se enviará el correo.
        echo "<H2>\n";
        echo "Correo enviado \n";
        echo "</H2>";
        
    } else {
        //Si existe la variable $errores es que algún campo está mal
        // y se mostrarán los errores      
        echo "<H2>\n";
        echo "Algunos campos no son correctos:";
        echo "<BR>\n";
        foreach ($errores as $valor) {
            "$valor <BR>";
        }
        echo "</H2>\n";
    }
    ?>
</body>

</html>