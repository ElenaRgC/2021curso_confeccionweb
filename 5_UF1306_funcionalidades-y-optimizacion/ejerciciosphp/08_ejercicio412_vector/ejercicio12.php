<html>

<head>
    <meta charset="UTF-8">
    <title>Ejercicio 12</title>
</head>

<body>
    <?php
    // Se rellena un vector de 10 elementos con los primeros 10 números pares
    for($i = 0; $i < 10; $i++) {
        $vector[$i] = $i * 2;
    }
    // Se muestra con un for y contando el número de elementos.
    // Podría usarse la función sizeof()
    for($i = 0; $i < count($vector); $i++) {
        echo "$vector[$i] - ";
    }
    echo "<br><br>";

    // Se muestra con un foreach, sin necesidad de poner el número de elementos.
    foreach($vector as $valor) {
        echo "El elemento vale $valor - ";
    }
    echo "<br><br>";

    // Se muestra con un foreach, sin necesidad de poner número de elementos
    // y sabiendo la posición de cada valor en la variable ($indice)
    foreach($vector as $indice => $valor) {
        echo "El elemento de posición $indice vale $valor - ";
    }

    ?>
</body>

</html>