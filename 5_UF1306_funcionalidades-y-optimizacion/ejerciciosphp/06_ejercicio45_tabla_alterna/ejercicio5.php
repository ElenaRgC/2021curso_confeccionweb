<html>

<head>
    <meta charset="UTF-8">
    <title>Ejercicio 5</title>
</head>

<body>
    <center>
        <table border=1>
            <?php
            // La variable num lleva el control
            // del número que se pinta en cada celda.
            $num = 1;
        
            for ($fila = 1; $fila <= 10; $fila++) {
                if ($fila % 2 == 0) {
                echo"<tr style='background-color:lightgrey;'>\n";
                } else {
                    echo"<tr>\n";
                }
                for ($columna = 1; $columna <= 10; $columna++) {
                    echo "<td>$num</td>\n";
                $num++;
                }
                echo "</tr>\n"; 
            }        
            ?>
        </table>
    </center>
</body>

</html>