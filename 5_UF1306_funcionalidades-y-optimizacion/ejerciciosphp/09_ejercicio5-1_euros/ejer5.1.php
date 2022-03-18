<html lang="es">

<head>
    <meta charset="UTF-8">
    <title>Ejercicio Euros</title>
</head>

<body>
    <?php
    //Se recoge el contenido del input que se llama "euros" en el formulario
    $f_euros = $_REQUEST['euros'];
    //Hago el cálculo y lo guardo en la variable $resultado
    $resultado = $f_euros * 166.386;
    // Muestro la línea con el resultado dentro de una etqueta h2 de HTML
    echo "<h2>Son $resultado pesetas</h2>\n"
    ?>
</body>

</html>