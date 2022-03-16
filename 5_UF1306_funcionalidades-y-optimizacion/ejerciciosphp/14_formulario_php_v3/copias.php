<label for="domicilio" class="columna-uno">* Domicilio:</label>
<input id="domicilio" name="domicilio" type="text" clase="columna-dos
        <?php if (isset($errores['domicilio']))  
            echo 'input-error'; 
              else if ($domicilio != '')
            echo 'input-bien';?>" onblur="validarDomicilio(this);"
    value="<?php if (isset($domicilio)) echo $domicilio; ?>" />

<label for="cpostal" class="columna-uno">* Código Postal:</label>
<input id="cpostal" name="cpostal" type="text" clase="columna-dos
        <?php if (isset($errores['cpostal']))  
            echo 'input-error'; 
              else if ($cpostal != '')
            echo 'input-bien';?>" onblur="validarCPostal(this);"
    value="<?php if (isset($cpostal)) echo $cpostal; ?>" />