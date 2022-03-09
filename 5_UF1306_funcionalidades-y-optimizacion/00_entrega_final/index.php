<?php
// Funciones de validación
function validarCampoTexto($texto)
{
    $patron = '/^[a-zA-Z\s]+$/';
    if (preg_match($patron, $texto)) {
        return true;
    } else {
        return false;
    }
}

function validarDomicilio($domicilio)
{
    $patron = '/^([a-zA-Z]+\d\s[-]?[.]?[,]?)+$/';
    if (preg_match($patron, $domicilio)) {
        return true;
    } else {
        return false;
    }
}

function validarCPostal($elemento)
{
    $dato = trim($elemento);
    $patron = '/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/';

    if (preg_match($patron, $dato)) {
        return true;
    } else if ($dato == "") {
        return true;
    } else {
        return false;
    }
}

function validarEmail($elemento)
{
    $correo = trim($elemento);
    $patron = '/^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/';

    if ($correo != "") {
        if (preg_match($patron, $correo)) {
            return true;
        } else {
            return false;
        }
    } else {
        return true;
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
    $nombre = trim($_REQUEST['nombre']);
    $apellidos = trim($_REQUEST['apellidos']);
    $domicilio = trim($_REQUEST['domicilio']);
    $cpostal = trim($_REQUEST['cpostal']);
    $correo = trim($_REQUEST['correo']);
    if (isset($_REQUEST['ingles'])) {
        $ingles = $_REQUEST['ingles'];
    }
    if (isset($_REQUEST['informatica'])) {
        $informatica = $_REQUEST['informatica'];
    }
    if (isset($_REQUEST['tratamiento'])) {
        $tratamiento = $_REQUEST['tratamiento'];
    }
    $comentarios = trim($_REQUEST['otra-info']);

    //REALIZO LAS COMPROBACIONES
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
    if (validarEmail($correo) == false) {
        $errores['correo'] = "Debe rellenar el correo correctamente.";
    }
    if (validarCPostal($cpostal) == false) {
        $errores['cpostal'] = "Debe rellenar el código postal correctamente.";
    }
    if (!isset($ingles) || validarSelect($ingles) == false) {
        $errores['ingles'] = "Debe indicar su nivel de inglés.";
    }
    
    //La variable $enviarcorreo valdrá true si no existe el array de errores, si existe, valdrá false
    $enviarcorreo = !isset($errores);
}

if ($enviarcorreo == false) {

?>

    <form name="formulario" action="index.php" method="POST" onsubmit="validarFormulario()">
        <div id="radio" class="tratamiento columna-uno">
            <label for="tratamiento">* Tratamiento:</label>
            <input type="radio" name="tratamiento" id="Sr" value="sr"
                <?php if ( (isset($tratamiento)) && ($tratamiento=='sr') ) echo 'checked';?> />
            <label for="Sr">Sr.</label>
            <input type="radio" name="tratamiento" id="Sra" value="sra"
                <?php if ( (isset($tratamiento)) && ($tratamiento=='sra') ) echo 'checked';?> />
            <label for="Sra">Sra.</label>
            <input type="radio" name="tratamiento" id="Srta" value="srta"
                <?php if ( (isset($tratamiento)) && ($tratamiento=='srta') ) echo 'checked';?> />
            <label for="Srta">Srta.</label>
        </div>
        <label for="nombre" class="columna-uno">* Nombre:</label>
        <input id="nombre" name="nombre" type="text" class="columna-dos
        <?php if (isset($errores['nombre']) || $nombre == "")  
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onblur="validarCampoTexto(this);"
            value="<?php if (isset($nombre)) echo $nombre; ?>" />
        <label for="apellidos" clase="columna-tres">* Apellidos:</label>
        <input id="apellidos" name="apellidos" type="text" class="columna-cuatro
        <?php if (isset($errores['apellidos']) || $apellidos == "")  
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onblur="validarCampoTexto(this);"
            value="<?php if (isset($apellidos)) echo $apellidos; ?>" />
        <label for="domicilio" class="columna-uno">* Domicilio:</label>
        <input id="domicilio" name="domicilio" type="text" clase="columna-dos
        <?php if (isset($errores['domicilio']) || $domicilio == "")  
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onblur="validarDomicilio(this);"
            value="<?php if (isset($domicilio)) echo $domicilio; ?>" />
        <label for="cpostal" class="columna-uno">* Código Postal:</label>
        <input id="cpostal" name="cpostal" type="text" clase="columna-dos
        <?php if (isset($errores['cpostal']) || $cpostal == "" )  
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onblur="validarCPostal(this);"
            value="<?php if (isset($cpostal)) echo $cpostal; ?>" />
        <label for="correo" class="columna-tres">* Email:</label>
        <input id="correo" name="correo" type="text" class="
        <?php if (isset($errores['correo']) || $correo == "")  
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onblur="validarEmail(this);" value="<?php if (isset($correo)) echo $correo; ?>" />
        <label for="ingles" class="columna-uno">* Conocimientos de inglés:</label>
        <select name="ingles" id="ingles" class="columna-uno
        <?php if (isset($errores['ingles']) || $ingles == "") 
            echo 'input-error'; 
              else 
            echo 'input-bien';?>" onchange="validarSelect(this);">
            <option value="" disabled selected>
                Seleccione un nivel</option>
            <option value="ninguno" <?php if ( (isset($ingles)) && ($ingles=='ninguno') ) echo 'selected';?>>
                Ninguno</option>
            <option value="a1" <?php if ( (isset($ingles)) && ($ingles=='a1') ) echo 'selected';?>>A1</option>
            <option value="a2" <?php if ( (isset($ingles)) && ($ingles=='a2') ) echo 'selected';?>>A2</option>
            <option value="b1" <?php if ( (isset($ingles)) && ($ingles=='b1') ) echo 'selected';?>>B1</option>
            <option value="b2" <?php if ( (isset($ingles)) && ($ingles=='b2') ) echo 'selected';?>>B2</option>
            <option value="c1" <?php if ( (isset($ingles)) && ($ingles=='c1') ) echo 'selected';?>>C1</option>
            <option value="c2" <?php if ( (isset($ingles)) && ($ingles=='c2') ) echo 'selected';?>>C2</option>
        </select>
        <label for="informatica" class="columna-uno">Conocimientos informáticos:</label>
        <div class="checkbox columna-uno">
            <input type="checkbox" name="informatica[]" id="ofimatica" value="ofimatica"
                <?php if ( (isset($informatica)) && (in_array('ofimatica',$informatica)) ) echo 'checked';?> />
            <label for="ofimatica">Ofimática</label>
            <input type="checkbox" name="informatica[]" id="diseno" value="diseno"
                <?php if ( (isset($informatica)) && (in_array('diseno',$informatica)) ) echo 'checked';?> />
            <label for="diseno">Diseño gráfico</label>
            <input type="checkbox" name="informatica[]" id="programacion" value="programacion"
                <?php if ( (isset($informatica)) && (in_array('programacion',$informatica)) ) echo 'checked';?> />
            <label for="programacion">Programación</label>
        </div>
        <div class="checkbox columna-dos">
            <input type="checkbox" name="informatica[]" id="bases-datos" value="bases-datos"
                <?php if ( (isset($informatica)) && (in_array('bases-datos',$informatica)) ) echo 'checked';?> />
            <label for="bases-datos">Bases de datos</label>
            <input type="checkbox" name="informatica[]" id="html" value="html"
                <?php if ( (isset($informatica)) && (in_array('html',$informatica)) ) echo 'checked';?> />
            <label for="html">HTML</label>
            <input type="checkbox" name="informatica[]" id="js" value="js"
                <?php if ( (isset($informatica)) && (in_array('js',$informatica)) ) echo 'checked';?> />
            <label for="js">JavaScript</label>
        </div>
        <label for="otra-info" class="columna-tres">Otra información de interés:</label>
        <textarea class="columna-tres" name="otra-info"
            id="otra-info"><?php if (isset($comentarios)) echo $comentarios; ?></textarea>
        <input type="submit" name="btn_Enviar" value="Enviar">
        <input type="reset" name="btn_Limpiar" value="Limpiar">
    </form>
    <?php
} else {
    //Aqui viene la parte de enviar el correo, ya que entra cuando no hay que mostrar el formulario
    $para = "elenarodriguezcalderon@gmail.com";
    $asunto = "FORMULARIO CONTACTO";
    
    // Se construye el cuerpo del correo como un documento con etiquetas HTML
    $descripcion= "<HTML><HEAD>\n";
    $descripcion.= "<meta charset='UTF-8'>\n";
    $descripcion.= "<style type='text/css'>\n";
    /*$descripcion.= ".textoRojo{\n";
    $descripcion.= "color: red;\n";
    $descripcion.= "}\n";
    $descripcion.= ".textoVerde{\n";
    $descripcion.= "color: green;\n";
    $descripcion.= "}\n";
    $descripcion.= "</style>\n";
    $descripcion.= "<TITLE>Formulario de contacto recibido</TITLE></HEAD><BODY>";
    $descripcion.= "<H2 class='textoRojo'>Se ha recibido un nuevo contacto:</H2>\n";
    $descripcion.="<H3 class='textoVerde'>Nombre : </H3>$nombre<BR>";
    $descripcion.="<H3 class='textoVerde'>Apellidos : </H3>$apellidos<BR>";
    $descripcion.="<H3 class='textoVerde'>DNI : </H3>$dni<BR>";
    $descripcion.="<H3 class='textoVerde'>Fecha Nacimiento : </H3>$fecha<BR>";
    $descripcion.="<H3 class='textoVerde'>Teléfono : </H3>$telefono<BR>";
    $descripcion.="<H3 class='textoVerde'>E-mail : </H3>$correo<BR>";
    $descripcion.="<H3 class='textoVerde'>Domicilio : </H3>$domicilio<BR>";
    $descripcion.="<H3 class='textoVerde'>Código Postal : </H3>$cpostal<BR>";
    $descripcion.="<H3 class='textoVerde'>Ocupación : </H3>$ocupacion<BR>";
    $descripcion.="<H3 class='textoVerde'>Aficiones : </H3>";
    foreach ($aficiones as $aficion) {
        $descripcion.="$aficion -";
    }
    $descripcion.="<BR>";
    $descripcion.="<H3 class='textoVerde'>Sexo : </H3>$sexo<BR>";*/
    $descripcion.= "</BODY></HTML>";
    
    // Para enviar un correo con formato HTML, debe establecerse la cabecera Content-type
    $cabeceras  = 'MIME-Version: 1.0' . "\n";
    $cabeceras .= 'Content-type: text/html; charset=UTF-8' . "\n";
    $cabeceras .= 'From: elenarodriguezcalderon@gmail.com';

    //Finalmente se muestra un mensaje informando y un enlace para volver a cargar el formulario vacío
    if (mail($para, $asunto, $descripcion, $cabeceras))
    {
        echo "<H2>Formulario enviado correctamente.</H2>";
    } else {
        echo "<H2>Se ha producido un error al enviar el formulario.</H2>";
    }
    echo "<H3><a href='index.php'>Pulse para continuar</a></H3>"; 
}
?>
</body>

</html>