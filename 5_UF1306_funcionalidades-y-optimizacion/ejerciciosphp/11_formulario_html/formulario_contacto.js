function validarCampoTexto(elemento, mensaje){
    var dato = elemento.value.trim();
    var patron =/^[a-zA-Z\s]+$/;

    if (patron.test(dato))
    {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    } else {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "Debe rellenar este campo correctamente.";
        return false;
    }
}

function validarCampoNoObligatorio(elemento, mensaje){
    var dato = elemento.value.trim();
    
    if (dato != "")
    {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    } else {
        document.getElementById(mensaje).innerHTML = "";
        return true;
    }
}

function validarDni(elemento, mensaje){
    var dato = elemento.value.trim();
    var letrasDNI = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E'];
    var patron=/^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

    if (!patron.test(dato))
    {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "Formato de DNI incorrecto.";
        return false;
    }

    var num_dni = parseInt(dato.substring(0,8));
    var resto = num_dni % 23;
    //Se comprueba que la letra que ha metido el usuario sea igual que la de la posición del array
    if (dato.charAt(8) != letrasDNI[resto]){
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "Debe rellenar este campo correctamente.";
        return false;
    } else {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    }
}

function validarCPostal(elemento, mensaje){
    var dato = elemento.value.trim();
    var patron=/^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;

    if (patron.test(dato))
    {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    } else if (dato == "") {
        document.getElementById(mensaje).innerHTML = "";
        return true;
    } else {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "Debe rellenar este campo correctamente.";
        return false;
    }
}

function validarFormatoFecha(campo) {
    var patron = /^([0-2][0-9]|3[01])[/](0[1-9]|1[012])[/]\d{4}$/;
    if (patron.test(campo)) {
            return true;
    } else {
            return false;
    }
}

function existeFecha(fecha){
    var array_fecha = fecha.split("/");
    var day = array_fecha[0];
    var month = array_fecha[1];
    var year = array_fecha[2];
    var fecha_sin_dia = new Date(year,month,'0');

    var num_dias_mes = fecha_sin_dia.getDate();
    if(parseInt(day)>(num_dias_mes)){
            return false;
    }
    return true;
}

function validarFecha(elemento, mensaje){
    var fecha = elemento.value.trim();
    if (fecha != "") {
        if(validarFormatoFecha(fecha)){
            if(existeFecha(fecha)){
                document.getElementById(mensaje).className = "textoOK";
                document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
                return true;
            }else{
                document.getElementById(mensaje).className = "textoError";
                document.getElementById(mensaje).innerHTML = "La fecha introducida no existe.";
                return false;
            }
        }else{
            document.getElementById(mensaje).className = "textoError";
            document.getElementById(mensaje).innerHTML = "El formato de la fecha es incorrecto.";
            return false;
        }
    } else {
        document.getElementById(mensaje).innerHTML = "";
        return true;
    }
}

function validarTelefono(elemento, mensaje){
    numero = elemento.value.trim();
    var patron = /^[6-9]\d{2}(\s\d{2}){3}$/;
    
    if (numero != "") {
        if (patron.test(numero))
        {
            document.getElementById(mensaje).className = "textoOK";
            document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
            return true;
        } else {
            document.getElementById(mensaje).className = "textoError";
            document.getElementById(mensaje).innerHTML = "Formato de nº de teléfono incorrecto.";
            return false;
        }
    } else {
        document.getElementById(mensaje).innerHTML = "";
        return true;
    }
}

function validarEmail(elemento, mensaje){
    correo = elemento.value.trim();
    var patron = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;
    
    if (correo != "") {
        if (patron.test(correo))
        {
            document.getElementById(mensaje).className = "textoOK";
            document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
            return true;
        } else {
            document.getElementById(mensaje).className = "textoError";
            document.getElementById(mensaje).innerHTML = "Formato de email incorrecto.";
            return false;
        }
    } else {
        document.getElementById(mensaje).innerHTML = "";
        return true;
    }
}

function validarSelect(elemento, mensaje){
    var opcion = elemento.value;

    if (opcion == "")
    {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "No se ha seleccionado una opción.";
        return false;
    } else {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    }
}

function validarCheckbox(grupo, mensaje){
    var lista = document.getElementsByName(grupo);
    var contador = 0;

    for (var posicion in lista){
        if (lista[posicion].checked) {
            contador++;
        }
    }
    if (contador == 0)
    {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "No se ha seleccionado una opción.";
        return false;
    } else {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    }
}

function validarRadioButton(grupo, mensaje){
    var lista = document.getElementsByName(grupo);
    var marcado;
    
    for (var posicion in lista){
        if (lista[posicion].checked) {
            marcado = lista[posicion].value;
        }
    }

    if (marcado == null)
    {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML = "No se ha seleccionado una opción.";
        return false;
    } else {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML = "Campo rellenado correctamente.";
        return true;
    }
}

function limpiarSpansFormulario() {
    var mensajes = document.getElementsByTagName('span');
    for (var i in mensajes) {
        mensajes[i].innerHTML="";
    }
}

function validarFormulario() {
    bool_nombre=validarCampoTexto(document.formulario.nombre,'mensaje_nombre');
    bool_apellidos=validarCampoTexto(document.formulario.apellidos,'mensaje_apellidos');
    bool_dni=validarDni(document.formulario.dni,'mensaje_dni');
    bool_fecha=validarFecha(document.formulario.fecha,'mensaje_fecha');
    bool_telefono=validarTelefono(document.formulario.telefono,'mensaje_telefono');
    bool_correo=validarEmail(document.formulario.correo,'mensaje_correo');
    bool_ocupacion=validarSelect(document.formulario.ocupacion,'mensaje_ocupacion');
    bool_aficiones=validarCheckbox('aficiones','mensaje_aficiones');
    bool_sexo=validarRadioButton('sexo','mensaje_sexo');
    bool_domicilio=validarCampoNoObligatorio(document.formulario.domicilio,'mensaje_domicilio');
    bool_cpostal=validarCPostal(document.formulario.cpostal,'mensaje_cpostal');
    bool_usuario=validarRadioButton('usuario', 'mensaje_usuario');

    return bool_nombre && bool_apellidos && bool_dni && bool_fecha &&
    bool_telefono && bool_correo && bool_ocupacion && bool_aficiones &&
    bool_sexo && bool_domicilio && bool_cpostal && bool_usuario;
}