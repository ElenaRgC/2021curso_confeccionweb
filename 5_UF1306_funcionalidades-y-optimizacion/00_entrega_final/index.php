<?php
// Funciones de validación
function validarCampoTexto($elemento)
{
    $texto = trim($elemento);
    $patron = '/^[a-zA-Z\s]+$/';
    
    if (preg_match($patron, $texto)) {
        return true;
    } else {
        return false;
    }
}

function validarDomicilio($elemento)
{
    $patron = '/([a-zA-Z\d\s]+[-.,]?)+/';
    
    if (preg_match($patron, $elemento)) {
        return true;
    } else {
        return false;
    }
}

function validarCPostal($elemento)
{
    $patron = '/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/';

    if (preg_match($patron, $elemento)) {
        return true;
    } else {
        return false;
    }
}

function validarEmail($elemento)
{
    $correo = trim($elemento);
    $patron = '/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/';

    if (preg_match($patron, $correo)) {
        return true;
    } else {
        return false;
    }
}

function validarSelect($elemento)
{
    if ($elemento == "") {
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
    <link rel="stylesheet" href="style.css">
    <script src="scripts.js"></script>
    <title>Formulario</title>
</head>

<body>

    <?php
//Por defecto, no se tiene que enviar el correo hasta que pase las validaciones
$enviarcorreo = false;

if (isset($_REQUEST['btn_Enviar'])) {
    //Sólo entra si viene de una llamada del botón Enviar del formulario 
    //Se recogen los valores del formulario
    $nombre = $_REQUEST['nombre'];
    $apellidos = $_REQUEST['apellidos'];
    $domicilio = $_REQUEST['domicilio'];
    $cpostal = $_REQUEST['cpostal'];
    $correo = $_REQUEST['correo'];
    if (isset($_REQUEST['ingles'])) {
        $ingles = $_REQUEST['ingles'];
    }
    if (isset($_REQUEST['informatica'])) {
        $informatica = $_REQUEST['informatica'];
    }
    if (isset($_REQUEST['tratamiento'])) {
        $tratamiento = $_REQUEST['tratamiento'];
    }
    if (isset($_REQUEST['otra-info'])) {
        $comentarios = $_REQUEST['otra-info'];
    }


    //REALIZO LAS COMPROBACIONES
    // El contenido de estos errores podría ser cualquiera, ya que no se están mostrando los mensajes.
    // Su única funcionalidad es comprobar si están o no vacíos para determinar si se envía el correo.
    if (!isset($tratamiento)) {
        $errores['tratamiento'] = "Debe seleccionar su tratamiento.";
    }
    if (validarCampoTexto($nombre) == false) {
        $errores['nombre'] = "Debe rellenar el nombre correctamente.";
    }
    if (validarCampoTexto($apellidos) == false) {
        $errores['apellidos'] = "Debe rellenar los apellidos correctamente.";
    }
    if (validarDomicilio($domicilio) == false) {
        $errores['domicilio'] = "Debe rellenar el domicilio correctamente.";
    }
    if (validarCPostal($cpostal) == false) {
        $errores['cpostal'] = "Debe rellenar el código postal correctamente.";
    }
    if (validarEmail($correo) == false) {
        $errores['correo'] = "Debe rellenar el correo correctamente.";
    }
    if (!isset($ingles)) {
        $errores['ingles'] = "Debe indicar su nivel de inglés.";
    }
    
    //La variable $enviarcorreo valdrá true si no existe el array de errores, si existe, valdrá false
    $enviarcorreo = !isset($errores);
}

if ($enviarcorreo == false) {

?>

    <form name="formulario" action="index.php" method="POST" onsubmit="validarFormulario()">

        <h1>Formulario de contacto</h1>
        <small>(*) Datos obligatorios</small>

        <div id="radio" class="tratamiento columna-uno">
            <label for="tratamiento">* Tratamiento:</label>
            <input type="radio" name="tratamiento" id="Sr" value="Sr."
                <?php if ( (isset($tratamiento)) && ($tratamiento=='Sr.') ) echo 'checked';?> />
            <label for="Sr">Sr.</label>
            <input type="radio" name="tratamiento" id="Sra" value="Sra."
                <?php if ( (isset($tratamiento)) && ($tratamiento=='Sra.') ) echo 'checked';?> />
            <label for="Sra">Sra.</label>
            <input type="radio" name="tratamiento" id="Srta" value="Srta."
                <?php if ( (isset($tratamiento)) && ($tratamiento=='Srta.') ) echo 'checked';?> />
            <label for="Srta">Srta.</label>
        </div>

        <label for="nombre" class="columna-uno">* Nombre:</label>
        <input id="nombre" name="nombre" type="text" class="columna-dos
        <?php if (isset($errores['nombre']))  
            echo 'input-error'; 
              else if ($nombre != '')
            echo 'input-bien';?>" onblur="validarCampoTexto(this);"
            value="<?php if (isset($nombre)) echo $nombre; ?>" />

        <label for="apellidos" clase="columna-tres">* Apellidos:</label>
        <input id="apellidos" name="apellidos" type="text" class="columna-cuatro
        <?php if (isset($errores['apellidos']))  
            echo 'input-error'; 
              else if ($apellidos != '')
            echo 'input-bien';?>" onblur="validarCampoTexto(this);"
            value="<?php if (isset($apellidos)) echo $apellidos; ?>" />

        <label for="domicilio" class="columna-uno">* Domicilio:</label>
        <input id="domicilio" name="domicilio" type="text" class="columna-dos
        <?php if (isset($errores['domicilio']))  
            echo 'input-error'; 
              else if ($domicilio != '')
            echo 'input-bien';?>" onblur="validarDomicilio(this);"
            value="<?php if (isset($domicilio)) echo $domicilio; ?>" />

        <label for="cpostal" class="columna-uno">* Código Postal:</label>
        <input id="cpostal" name="cpostal" type="text" class="columna-dos
        <?php if (isset($errores['cpostal']))  
            echo 'input-error'; 
              else if ($cpostal != '')
            echo 'input-bien';?>" onblur="validarCPostal(this);"
            value="<?php if (isset($cpostal)) echo $cpostal; ?>" />

        <label for="correo" class="columna-tres">* Email:</label>
        <input id="correo" name="correo" type="text" class="
        <?php if (isset($errores['correo']))  
            echo 'input-error'; 
              else if ($correo != '')
            echo 'input-bien';?>" onblur="validarEmail(this);" value="<?php if (isset($correo)) echo $correo; ?>" />

        <label for="ingles" class="columna-uno">* Conocimientos de inglés:</label>
        <select name="ingles" id="ingles" class="columna-uno
        <?php if (isset($errores['ingles'])) 
            echo 'input-error'; 
              else if ($ingles != '')
            echo 'input-bien';?>" onchange="validarSelect(this);">
            <option value="" disabled selected>
                Seleccione un nivel</option>
            <option value="ninguno" <?php if ( (isset($ingles)) && ($ingles=='ninguno') ) echo 'selected';?>>
                Ninguno</option>
            <option value="A1" <?php if ( (isset($ingles)) && ($ingles=='A1') ) echo 'selected';?>>A1</option>
            <option value="B2" <?php if ( (isset($ingles)) && ($ingles=='A2') ) echo 'selected';?>>A2</option>
            <option value="B1" <?php if ( (isset($ingles)) && ($ingles=='B1') ) echo 'selected';?>>B1</option>
            <option value="B2" <?php if ( (isset($ingles)) && ($ingles=='B2') ) echo 'selected';?>>B2</option>
            <option value="C1" <?php if ( (isset($ingles)) && ($ingles=='C1') ) echo 'selected';?>>C1</option>
            <option value="C2" <?php if ( (isset($ingles)) && ($ingles=='C2') ) echo 'selected';?>>C2</option>
        </select>

        <label for="informatica" class="columna-uno">Conocimientos informáticos:</label>
        <div class="checkbox columna-uno">
            <input type="checkbox" name="informatica[]" id="ofimatica" value="Ofimática"
                <?php if ( (isset($informatica)) && (in_array('ofimatica',$informatica)) ) echo 'checked';?> />
            <label for="ofimatica">Ofimática</label>

            <input type="checkbox" name="informatica[]" id="programacion" value="Programación"
                <?php if ( (isset($informatica)) && (in_array('programacion',$informatica)) ) echo 'checked';?> />
            <label for="programacion">Programación</label>

            <input type="checkbox" name="informatica[]" id="html" value="HTML"
                <?php if ( (isset($informatica)) && (in_array('html',$informatica)) ) echo 'checked';?> />
            <label for="html">HTML</label>
        </div>
        <div class="checkbox columna-dos">
            <input type="checkbox" name="informatica[]" id="diseno" value="Diseño"
                <?php if ( (isset($informatica)) && (in_array('diseno',$informatica)) ) echo 'checked';?> />
            <label for="diseno">Diseño gráfico</label>

            <input type="checkbox" name="informatica[]" id="bases-datos" value="Bases de datos"
                <?php if ( (isset($informatica)) && (in_array('bases-datos',$informatica)) ) echo 'checked';?> />
            <label for="bases-datos">Bases de datos</label>

            <input type="checkbox" name="informatica[]" id="js" value="JavaScript"
                <?php if ( (isset($informatica)) && (in_array('js',$informatica)) ) echo 'checked';?> />
            <label for="js">JavaScript</label>
        </div>

        <label for="otra-info" class="columna-tres">Otra información de interés:</label>
        <textarea class="columna-tres" name="otra-info" id="otra-info">
            <?php if (isset($comentarios)) echo $comentarios; ?></textarea>
        <input type="submit" name="btn_Enviar" value="Enviar">
        <input type="reset" name="btn_Limpiar" value="Limpiar" onclick="limpiarClases();">
    </form>
    <?php
} else {
    // Asunto y receptor del mensaje.
    $asunto = "FORMULARIO CONTACTO";
    $para = "ejercicio1@cursoweb.com";
    
    // Cuerpo del mensaje.
    $descripcion= "<HTML><HEAD>\n";
    $descripcion.= "<meta charset='UTF-8'>\n";
    $descripcion.= "<style type='text/css'>\n";
    $descripcion.= "body {\n";
    $descripcion.= "font-family: sans-serif;\n";
    $descripcion.= "line-height: 1.5rem;\n";
    $descripcion.= "}\n";
    $descripcion.= "div {\n";
    $descripcion.= "border: solid 1px black;\n";
    $descripcion.= "padding: 1rem\n";
    $descripcion.= "width: fit-content;\n";
    $descripcion.= "margin: auto;\n";
    $descripcion.= "}\n";
    $descripcion.= "</style>\n";
    $descripcion.= "<TITLE>Formulario de contacto recibido</TITLE></HEAD><BODY>";
    $descripcion.= "<H3>Se han tramitado los siguientes datos del siguiente usuario:</H3>\n";
    $descripcion.= "<em>$tratamiento $nombre $apellidos </em>";
    $descripcion.= " con residencia en $domicilio (Código Postal: $cpostal).<BR>";
    $descripcion.= "<B>E-mail: </B><a href='mailto:$correo'>$correo</a><BR>";
    $descripcion.= "<B>Nivel de inglés: </B>$ingles<BR>";
    // Comprobamos que se haya seleccionado algún conocimiento informático,
    // y si es así, mostramos los que se hayan seleccionado.
    if (isset($informatica)) {
        $descripcion.= "<B>Conocimientos informáticos: </B>";
        foreach ($informatica as $conocimiento) {
            $descripcion.= "$conocimiento, ";
        }
        $descripcion.= "<BR>";
    }
    // Se comprueba que se haya introducido algún comentario.
    if (isset($comentarios)) {
        $descripcion.= "<B>Otra información de interés: </B>$comentarios<BR>";
    }
    $descripcion.= "</BODY></HTML>";
    
    // Content-type para que el correo se formatee correctamente.
    $cabeceras  = 'MIME-Version: 1.0' . "\n";
    $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\n";
    $cabeceras .= 'From: elenarodriguezcalderon@gmail.com';

    // Mensaje en caso de fallo en el envío y opción para volver a realizar el formulario.
    if (mail($para, $asunto, $descripcion, $cabeceras))
    {
        echo "<H2>Formulario enviado correctamente.</H2>";
    } else {
        echo "<H2>Se ha producido un error al enviar el formulario.</H2>";
    }

    echo "<a href='index.php'><button>Volver al formulario</button></a>";
}
?>
</body>

</html>