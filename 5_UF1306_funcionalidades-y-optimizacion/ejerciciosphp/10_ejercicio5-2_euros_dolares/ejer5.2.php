<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Ejercicio Euros</title>
</head>

<body>
    <?php
    //Se recoge el contenido del radio que se llama "conv" en el formulario
    $f_conv = $_REQUEST['conv'];
    // Se recoge la cantidad introducida por el usuario
    $f_cantidad = $_REQUEST['cantidad'];

    if ($f_conv == 1) {
        $resultado = round(1.11 * $f_cantidad, 2);
        echo "<h2>$f_cantidad euros son $resultado dólares</h2>\n";
    }
    else {
        $resultado = round($f_cantidad / 1.11, 2);        
        echo "<h2>$f_cantidad dólares son $resultado euros</h2>\n";
    }

    ?>
</body>

</html>