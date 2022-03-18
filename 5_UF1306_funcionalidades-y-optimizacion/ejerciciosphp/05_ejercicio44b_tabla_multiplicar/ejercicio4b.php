<html>

<head>
    <meta charset="UTF-8">
    <title>Ejercicio 4b</title>
    <style>
    td {
        text-align: center;
        width: 2rem;
        height: 2rem;
    }
    </style>
</head>

<body>
    <center>
        <table border=1>
            <?php
            // La variable num lleva el control
            // del número que se pinta en cada celda.
            $num1 = 1;
            $num2 = 1;

            echo "<center><h1>Tablas de multiplicar</h1></center>";
        
            for ($fila = 1; $fila <= 10; $fila++) {
                // Generamos la primera fila.
                if ($fila == 1) {
                    echo "<tr style='color: red'>";
                    for ($columna = 1; $columna <= 10; $columna++) {
                        // Dejamos la primera celda en blanco.
                        if ($columna == 1) {
                            echo "<td></td>\n";
                        }
                        // No ponemos un else porque contamos del uno al diez,
                        // por lo que se crean dos celdas en el primer ciclo.
                        echo "<td>$num2</td>\n";
                        $num2++;
                    }
                    echo "</tr>";
                    // Devolvemos num2 al valor 1 para que no interfiera
                    // en el siguiente bucle.
                    $num2 = 1;
                }
                // Abrimos una fila.
                echo"<tr>\n";
                // Creamos las celdas de la primera columna, con el valor
                //num2 que se incrementa solo al acabar el bucle principal.
                // No usamos num1 porque se reinicia su valor a 1 al terminar
                // el bucle.
                echo "<td style='color: red'>$num2</td>";
                // Generamos el contenido de las multiplicaciones,
                // variando el valor de num1 por celda y manteniendo
                // num2 constante.
                for ($columna = 1; $columna <= 10; $columna++) {
                    $resultado = $num1 * $num2;
                    echo "<td>$resultado</td>\n";
                    $num1++;
                }
                // Cerramos la fila.
                echo "</tr>\n"; 
                // Aumentamos el valor de num2 para la siguiente fila.
                $num2++;
                // Devolvemos num1 al valor 1 para que vuelva a empezar
                // a multiplicar desde el valor 1.
                $num1 = 1;
            }        
            ?>
        </table>
    </center>
</body>

</html>