<html>

<head>
    <meta charset="UTF-8">
    <title>Ejercicio 6</title>
</head>

<body>
    <center>
        <table border=1>
            <?php  
            define("TAM",10);
            function potencia ($base, $exponente) {
                $resultado = pow($base, $exponente);
                return $resultado;
            }

            for ($fila = 1; $fila <= 10; $fila++) {
                echo"<tr>\n";
                for ($columna = 1; $columna <= TAM; $columna++) {
                    echo "<td>".potencia($fila, $columna)."</td>\n";
                }
                echo "</tr>\n"; 
            }        
            ?>
        </table>
    </center>
</body>

</html>