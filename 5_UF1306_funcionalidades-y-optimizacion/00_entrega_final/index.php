<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="scripts.js"></script>
    <title>Formulario</title>
</head>

<body>
    <form name="formulario" action="index.php" method="POST" onsubmit="validarFormulario()">
        <div class="tratamiento columna-uno">
            *<span id="radio">
                <input type="radio" name="tratamiento" id="Sr"><label for="Sr">Sr.</label>
                <input type="radio" name="tratamiento" id="Sra"><label for="Sra">Sra.</label>
            </span>
            <label for="nombre">*Nombre:</label>
        </div>
        <input id="nombre" type="text" class="columna-dos" onblur="validarCampoTexto(this);">
        <label for="apellidos" clase="columna-tres">*Apellidos:</label>
        <input id="apellidos" type="text" class="columna-cuatro" onblur="validarCampoTexto(this);">
        <label for="domicilio" class="columna-uno">*Domicilio:</label>
        <input id="domicilio" type="text" clase="columna-dos" onblur="validarDomicilio(this);">
        <label for="cpostal" class="columna-uno">*Código Postal:</label>
        <input id="cpostal" type="text" clase="columna-dos" onblur="validarCPostal(this);">
        <label for="correo" class="columna-tres">*Email:</label>
        <input id="correo" type="text" onblur="validarEmail(this);">
        <label for="ingles" class="columna-uno">*Conocimientos de inglés:</label>
        <select name="ingles" id="ingles" class="columna-uno" onchange="validarSelect(this);">
            <option value="" disabled>Seleccione un nivel</option>
            <option value="ninguno">Ninguno</option>
            <option value="a1">A1</option>
            <option value="a2">A2</option>
            <option value="b1">B1</option>
            <option value="b2">B2</option>
            <option value="c1">C1</option>
            <option value="c2">C2</option>
        </select>
        <label for="informatica" class="columna-uno">Conocimientos informáticos:</label>
        <div class="checkbox columna-uno">
            <input type="checkbox" name="informatica" id="ofimatica">
            <label for="ofimatica">Ofimática</label>
            <input type="checkbox" name="informatica" id="diseno">
            <label for="diseno">Diseño gráfico</label>
            <input type="checkbox" name="informatica" id="programacion">
            <label for="programacion">Programación</label>
        </div>
        <div class="checkbox columna-dos">
            <input type="checkbox" name="informatica" id="bases-datos">
            <label for="bases-datos">Bases de datos</label>
            <input type="checkbox" name="informatica" id="html">
            <label for="html">HTML</label>
            <input type="checkbox" name="informatica" id="js">
            <label for="js">JavaScript</label>
        </div>
        <label for="otra-info" class="columna-tres">Otra información de interés:</label>
        <textarea class="columna-tres" name="otra-info" id="otra-info" cols="30" rows="10"></textarea>
        <input type="submit" value="Enviar">
        <input type="reset" value="Limpiar">
    </form>
</body>

</html>