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
<html>

<head>
    <title>FORMULARIO CONTACTO</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="formulario_contacto.css">
    <script src="formulario_contacto.js"></script>
</head>

<body onload="limpiarFormulario()">
    <?php
    // Por defecto, no se envía el correo, se carga el formulario
    $enviarcorreo = false;

    if (isset($_REQUEST["btn_Enviar"])) {
        // Solo entra si viene de una llamada del botón Enviar del formulario.
        // Se recogen los valores introducidos.

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
            $errores['correo'] = "Debe rellenar el correo correctamente.";
        }
        if (validarCPostal($cpostal) == false) {
            $errores['cpostal'] = "Debe rellenar el código postal correctamente.";
        }
        if (validarSelect($ocupacion) == false) {
            $errores['ocupacion'] = "Debe rellenar la ocupación correctamente.";
        }
        if (!isset($aficiones)) {
            $errores['aficiones'] = "Debe rellenar las aficiones correctamente.";
        }
        if (!isset($sexo)) {
            $errores['sexo'] = "Debe rellenar el sexo correctamente.";
        }
        if (!isset($usuario)) {
            $errores['usuario'] = "Debe rellenar nuevo usuario correctamente.";
        }

        // La variable enviar correo valdrá true si existe el array de errores,
        // si no, valdrá false.
        $enviarcorreo = !isset($errores);
    }

    if ($enviarcorreo == false) {
    ?>

    <form name="formulario" action="index.php" method="POST" onsubmit="validarFormulario()">
        <table>
            <tr>
                <td>*Nombre:</td>
                <td>
                    <input type="text" id="nombre" name="nombre" onblur="validarCampoTexto(this, 'mensaje_nombre')"
                        value="<?php if (isset($nombre)) echo $nombre; ?>">
                </td>
                <td>
                    <span id="mensaje_nombre" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["nombre"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["nombre"])) {
                                echo $errores["nombre"];
                            } else if (isset($nombre)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>*Apellidos:</td>
                <td>
                    <input type="text" id="apellidos" name="apellidos"
                        onblur="validarCampoTexto(this, 'mensaje_apellidos')"
                        value="<?php if (isset($apellidos)) echo $apellidos; ?>">
                </td>
                <td>
                    <span id="mensaje_apellidos" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["apellidos"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["apellidos"])) {
                                echo $errores["apellidos"];
                            } else if (isset($apellidos)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>*D.N.I.:</td>
                <td>
                    <input type="text" id="dni" name="dni" onblur="validarDni(this, 'mensaje_dni')"
                        value="<?php if (isset($dni)) echo $dni; ?>">
                </td>
                <td>
                    <span id=" mensaje_dni" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["dni"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">

                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["dni"])) {
                                echo $errores["dni"];
                            } else if (isset($dni)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Foto:</td>
                <td>
                    <input type="file" id="foto" name="foto" accept="image/jpeg, image/png"><br />
                </td>
                <td><small>Solo JPG, JPEG o PNG</small></td>
            </tr>
            <tr>
                <td>Fecha de nacimiento (dd/mm/aaaa):</td>
                <td>
                    <input type="text" id="fecha" name="fecha" onblur="validarFecha(this, 'mensaje_fecha')"
                        value="<?php if (isset($fecha)) echo $fecha; ?>">
                </td>
                <td>
                    <span id="mensaje_fecha" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["fecha"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["fecha"])) {
                                echo $errores["fecha"];
                            } else if ((isset($fecha)) and (trim($fecha) != "")) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Número de teléfono (NNN NN NN NN):</td>
                <td>
                    <input type="text" id="telefono" name="telefono" onblur="validarTelefono(this, 'mensaje_telefono')"
                        value="<?php if (isset($telefono)) echo $telefono; ?>">
                </td>
                <td>
                    <span id="mensaje_telefono" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["telefono"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["telefono"])) {
                                echo $errores["telefono"];
                            } else if ((isset($telefono)) && (trim($telefono) != "")) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Email:</td>
                <td>
                    <input type="text" id="correo" name="correo" onblur="validarEmail(this, 'mensaje_correo')"
                        value="<?php if (isset($correo)) echo $correo; ?>">
                </td>
                <td>
                    <span id="mensaje_correo" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["correo"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["correo"])) {
                                echo $errores["correo"];
                            } else if ((isset($correo)) && (trim($correo) != "")) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>Domicilio:</td>
                <td>
                    <input type="text" id="domicilio" name="domicilio"
                        onblur="validarCampoNoObligatorio(this, 'mensaje_domicilio')"
                        value="<?php if (isset($domicilio)) echo $domicilio; ?>">
                </td>
                <td>
                    <!-- No se valida el domicilio -->
                </td>
            </tr>
            <tr>
                <td>Código Postal:</td>
                <td>
                    <input type="text" id="cpostal" name="cpostal" onblur="validarCPostal(this, 'mensaje_cpostal')"
                        value="<?php if (isset($cpostal)) echo $cpostal; ?>">
                </td>
                <td>
                    <span id=" mensaje_cpostal" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["cpostal"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["cpostal"])) {
                                echo $errores["cpostal"];
                            } else if ((isset($cpostal)) && (trim($cpostal) != "")) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>*Ocupación:</td>
                <td>
                    <select id="ocupacion" name="ocupacion" onchange="validarSelect(this, 'mensaje_ocupacion')">
                        <option value="" <?php if ((isset($ocupacion) && ($ocupacion == ''))) echo 'selected';?>>
                            -Seleccione una ocupación-</option>
                        <option value="Empleado"
                            <?php if ((isset($ocupacion) && ($ocupacion == 'Empleado'))) echo 'selected';?>>Empleado
                        </option>
                        <option value="Desempleado"
                            <?php if ((isset($ocupacion) && ($ocupacion == 'Desempleado'))) echo 'selected';?>>
                            Desempleado
                        </option>
                        <option value="Estudiante"
                            <?php if ((isset($ocupacion) && ($ocupacion == 'Estudiante'))) echo 'selected';?>>Estudiante
                        </option>
                    </select>
                </td>
                <td>
                    <span id="mensaje_ocupacion" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["ocupacion"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["ocupacion"])) {
                                echo $errores["ocupacion"];
                            } else if (isset($ocupacion)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                    </span>
                </td>
            </tr>
            <tr>
                <td>*Aficiones:</td>
                <td>
                    <fieldset id="grupo_aficiones" onclick="validarCheckbox('aficiones[]', 'mensaje_aficiones')">
                        <input type="checkbox" value="Deporte" id="afi-1" name="aficiones[]"
                            <?php if ( (isset($aficiones)) && (in_array('Deporte', $aficiones)) ) echo 'checked';?> />Deporte<br />
                        <input type="checkbox" value="Cine" id="afi-2" name="aficiones[]"
                            <?php if ( (isset($aficiones)) && (in_array('Cine', $aficiones)) ) echo 'checked';?> />Cine<br />
                        <input type="checkbox" value="Lectura" id="afi-3" name="aficiones[]"
                            <?php if ( (isset($aficiones)) && (in_array('Lectura', $aficiones)) ) echo 'checked';?> />Lectura<br />
                    </fieldset>
                    <br />
                </td>
                <td>
                    <span id="mensaje_aficiones" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["aficiones"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["aficiones"])) {
                                echo $errores["aficiones"];
                            } else if (isset($aficiones)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>

                    </span>
                </td>
            </tr>
            <tr>
                <td>*Sexo:</td>
                <td>
                    <fieldset id="grupo_sexo" onclick="validarRadioButton('sexo', 'mensaje_sexo')">
                        <input type="radio" value="Varón" id="sexo-1" name="sexo"
                            <?php if ( (isset($sexo)) && ($sexo == 'Varón') ) echo 'checked';?> /> Varón<br />
                        <input type="radio" value="Mujer" id="sexo-2" name="sexo"
                            <?php if ( (isset($sexo)) && ($sexo == 'Mujer') ) echo 'checked';?> /> Mujer<br />
                        <input type="radio" value="Otro" id="sexo-3" name="sexo"
                            <?php if ( (isset($sexo)) && ($sexo == 'Otro') ) echo 'checked';?> /> Otro<br />
                        <input type="radio" value="Prefiero no decirlo" id="sexo-4" name="sexo"
                            <?php if ( (isset($sexo)) && ($sexo == 'Prefiero no decirlo') ) echo 'checked';?> />
                        Prefiero no
                        decirlo<br />
                    </fieldset>
                    </span>
                </td>
                <td>
                    <span id="mensaje_sexo" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["sexo"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["sexo"])) {
                                echo $errores["sexo"];
                            } else if (isset($sexo)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>
                </td>
            </tr>
            <tr>
                <td>*Nuevo Usuario:</td>
                <td>
                    <fieldset id="grupo_usuario" onclick="validarRadioButton('usuario', 'mensaje_usuario')">
                        <input type="radio" value="Si" id="usuario-1" name="usuario"
                            <?php if ( (isset($usuario)) && ($usuario == 'Si') ) echo 'checked';?> /> Sí<br />
                        <input type="radio" value="No" id="usuario-2" name="usuario"
                            <?php if ( (isset($usuario)) && ($usuario == 'No') ) echo 'checked';?> /> No<br />
                    </fieldset>
                </td>
                <td>
                    <span id="mensaje_usuario" class="
                    <?php // Aquí se escribe el nombre de la clase.
                    if (isset($errores["usuario"])) {
                        echo 'textoError';
                    } else {
                        echo 'textoOK';
                    } ?>
                    ">
                        <?php // Aquí se escribe el contenido del span
                            if (isset($errores["usuario"])) {
                                echo $errores["usuario"];
                            } else if (isset($usuario)) {
                                echo 'Campo rellenado correctamente.';
                            } ?>

                    </span>
                </td>
            </tr>
        </table>
        <div>
            <input type="submit" name="btn_Enviar" value="Enviar" />
            <input type="reset" name="btn_Limpiar" value="Limpiar" onclick="limpiarSpansFormulario()" />
        </div>
        <br>(*) Campos obligatorios
    </form>

    <?php

    } else {
        // En el casi de que esté bien, aquí se enviaría el correo.
        echo "<H2>\n";
        echo "Correo enviado \n";
        echo "</H2>";
    }
    ?>

</body>

</html>