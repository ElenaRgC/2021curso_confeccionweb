<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Ejercicio Euros</title>
</head>

<body>
    <?php

    // Funciones de validación.

    function validarCampoTexto($texto) {
        $patron = "/^[a-zA-Z\s]+$/";
        if (preg_match($patron, $texto)) {
            return true;
        } else {
            return false;
        }
    }

    function validarDNI($dni) {
        $f_dni = strtoUpper(trim($dni));

        $patron = "/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/"; 
        if(!preg_match($patron, $f_dni)) {
            return false;
        }
        
        $letras_dni = array("T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E",);
        
        $numero_dni = intval(substr($f_dni,0,-1));
        $letra_dni = substr($f_dni,-1);

        $resto = $numero_dni % 23;

        if ($letras_dni[$resto] == $letra_dni) {
            return true;
        } else {
            return false;
        }

    }

    function validarFormatoFecha($fecha) {
        $f_fecha = trim($fecha);
        $patron = "/^([0][1-9]|[1-2]\d|3[01])\/(0[1-9]|1[012])\/\d{4}$/"; 

        if(preg_match($patron, $f_fecha)) {
            return true;
        } else {
            return false;
        }
    }

    function existeFecha($fecha) {
        $f_fecha = explode("/",trim($fecha));
        $day = $f_fecha[0];
        $month = $f_fecha[1];
        $year = $f_fecha[2];

        if (checkdate($month, $day, $year)) {
            return true;
        } else {
            return false;
        }
    }

    function validarFecha($elemento) {
        $fecha = trim($elemento);
        if ($fecha !="") {
            if(validarFormatoFecha($fecha)) {
                if(existeFecha($fecha)) {
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

    function validarTelefono($telefono) {
        $f_telefono = trim($telefono);
        $patron ="/^[6-9]\d{2}(\s\d{2}){3}$/";

        if(preg_match($patron, $f_telefono) or $f_telefono == "") {
            return true;
        } else {
            return false;
        }
    }

    function validarEmail($email) {
        $f_email = trim($email);
        $patron = "/^\w+(\.\-\w+)*@\w+(\.\-\w+)*\.\w{2,4}$/";
        if(preg_match($patron, $f_email) or $f_email == "") {
            return true;
        } else {
            return false;
        }
    }

    function validarCPostal($c_postal) {
        $f_postal = trim($c_postal);
        $patron = "/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/";
        if(preg_match($patron, $f_postal) or $f_postal == "") {
            return true;
        } else {
            return false;
        }
    }

    function validarSelect($opcion) {
        if ($opcion != "-Seleccione una ocupación-") {
            return true;
        }
        else {
            return false;
        }
    }

    function validarCheckbox($opciones) {
        if (!isset($opciones)) {
            return false;
        }
        else {
            foreach($opciones as $index => $seleccion) {
                $aficiones[$index] = $seleccion;
            }
            return true;
        }
    }

    function validarRadioButton($radio) {
        if ($radio == "Varón" or $radio == "Mujer" or $radio == "Otro" or $radio =="Prefiero no decirlo") {
            return true;
        }
        else if ($radio == "Si" or $radio == "No") {
            return true;
        }
        else {
            return false;
        }
    }

    // Llamada a los campos del formulario.

    $nombre = $_REQUEST['nombre'];
    $apellidos = $_REQUEST['apellidos'];
    $dni = $_REQUEST["dni"];
    $fecha = $_REQUEST["fecha"];
    $telefono = $_REQUEST["telefono"];
    $email = $_REQUEST["correo"];
    $c_postal = $_REQUEST["cpostal"];
    $ocupacion = $_REQUEST["ocupacion"];
    if (isset($_REQUEST["sexo"])) {
        $sexo = $_REQUEST["sexo"];
    }
    if (isset($_REQUEST["usuario"])) {
        $usuario = $_REQUEST["usuario"];
    }
    if (isset($_REQUEST["aficiones"])) {
        $aficion = $_REQUEST["aficiones"];
    }

    // Llamada a las funciones de validación.

    if (!validarCampoTexto($nombre)) {
        $errores['nombre'] = "Debe rellenar su nombre correctamente.";
    }

    if (!validarCampoTexto($apellidos)) {
        $errores['apellido'] = "Debe rellenar sus apellidos correctamente.";
    }

    if (!validarDNI($dni)) {
        $errores['dni'] = "Debe rellenar su DNI correctamente.";
    }

    if (!validarFecha($fecha)) {
        $errores['fecha'] = "Debe rellenar su fecha de nacimiento correctamente.";
    }

    if (!validarTelefono($telefono)) {
        $errores['telefono'] = "Debe rellenar su teléfono correctamente.";
    }

    if (!validarEmail($email)) {
        $errores['email'] = "Debe rellenar su dirección de email correctamente.";
    }

    if (!validarCPostal($c_postal)) {
        $errores['c_postal'] = "Debe rellenar su código postal correctamente.";
    }

    if (!validarSelect($ocupacion)) {
        $errores['ocupacion'] = "Debe seleccionar su ocupación.";
    }

    if (isset($sexo)) {
        if (!validarRadioButton($sexo)) {
           $errores['sexo'] = "Debe indicar su sexo correctamente.";
        }
    }

    if (isset($usuario)) {
        if (!validarRadioButton($usuario)) {
            $errores['usuario'] = "Debe indicar si es un nuevo usuario.";
        }
    }

    if (isset($aficion)) {
        if (!validarCheckbox($aficion)) {
            $errores['aficiones'] = "Debe indicar alguna afición.";
        }
    }
    
    // Devuelvo el array errores

    if(isset($errores)) {
    // Si existe la variable errores es que algún campo está mal.
        echo "<h2>\n";
        echo "Algunos campos no son correctos:";
        echo "<br>\n";
        echo "</h2> <h4>\n";
        foreach($errores as $valor) {
            echo "$valor <br>";
        }
        echo "</h4>\n";
    } else {
    // Si no existe, es porque todos estaban bien.
        echo "<h2>\n";
        echo "Todo correcto. <br> \n";
        echo "</h2> <h4>\n";
        echo "El nombre es $nombre. <br>";
        echo "Los apellidos son $apellidos. <br> \n";
        echo "El DNI es $dni. <br> \n";
        echo "La fecha de nacimiento es $fecha. <br> \n";
        echo "El número de teléfono es $telefono. <br> \n";
        echo "El email es $email. <br> \n";
        echo "El código postal es $c_postal. <br> \n";
        echo "Su ocupación es $ocupacion. <br> \n";
        if (isset($sexo) and $sexo != "Prefiero no decirlo") {
            echo "Su sexo es $sexo. <br> \n"; }
        if (isset($usuario)){
            echo "$usuario es un nuevo usuario. <br> \n";
        }
        if (isset($aficion)){
            $n_aficiones = count($aficiones);
            echo "Tienes $n_aficiones:  ";
        }

        echo "</h4>\n";

    }
    

    ?>
</body>

</html>