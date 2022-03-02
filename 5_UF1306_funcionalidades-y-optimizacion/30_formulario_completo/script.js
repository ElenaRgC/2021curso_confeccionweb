function validarCampoTexto(elemento, mensaje) {
  var dato = elemento.value.trim();
  var patron = /^[a-zA-Z\s]+$/;

  if (patron.test(dato)) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
    return true;
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
    return false;
  }
}

function validarCampoDNI(elemento, mensaje) {
  dniCadena = elemento.value.trim();

  var dniNumero = "";
  (letras = "TRWAGMYFPDXBNJZSQVHLCKE"), (resto = 0);

  var letraDNI = dniCadena[8];
  for (i = 0; i < dniCadena.length - 1; i++) {
    dniNumero = dniNumero + dniCadena[i];
  }

  resto = Number(dniNumero) % 23;

  var patron = /^\d{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/;

  if (patron.test(dniCadena) && letras[resto] == letraDNI) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
  }
}

/*function validarFechaNacimiento(elemento, mensaje) {
  var fecha = elemento.value.trim();
  if (fecha != "") {
    if (validarFormatoFecha(fecha)) {
      if (existeFecha(fecha)) {
        document.getElementById(mensaje).className = "textoOK";
        document.getElementById(mensaje).innerHTML =
          "Campo rellenado correctamente.";
        return true;
      } else {
        document.getElementById(mensaje).className = "textoError";
        document.getElementById(mensaje).innerHTML =
          "La fecha introducida no existe.";
        return false;
      }
    } else {
      document.getElementById(mensaje).className = "textoError";
      document.getElementById(mensaje).innerHTML =
        "El formato de la fecha es incorrecto.";
      return false;
    }
  } else {
    document.getElementById(mensaje).innerHTML = "";
    return true;
  }
}*/

function validarNumeroTelefono(elemento, mensaje) {
  var dato = elemento.value.trim();
  var patron = /^[6-9]\d{2}(\s\d{2}){3}$/;

  if (patron.test(dato)) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
    return true;
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
    return false;
  }
}

function validarCampoAlfanumerico(elemento, mensaje) {
  var dato = elemento.value.trim();
  var patron = /\w/;

  if (dato == "") {
    document.getElementById(mensaje).innerHTML = "";
    return true;
  } else if (patron.test(dato)) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
    return true;
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
    return false;
  }
}

function validarCampoCodigoPostal(elemento, mensaje) {
  var dato = elemento.value.trim();
  var patron = /^((0[1-9])|([1-4]\d)|(5[0-2]))\d{3}$/;

  if (dato == "") {
    document.getElementById(mensaje).innerHTML = "";
    return true;
  } else if (patron.test(dato)) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
    return true;
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
    return false;
  }
}

function validarCheckBox(nombre, mensaje) {
  var opciones = document.getElementsByName(nombre);
  opcion = new Array();

  for (i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      opcion[i] = opciones[i].value;
    }
  }

  // Solo entrará en el bucle si hay al menos un elemento,
  // es decir, si opción tiene longitud.
  // Es lo mismo que usar opcion == null
  if (opcion.length) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
  }
}

function validarRadioButton(nombre, mensaje) {
  var opciones = document.getElementsByName(nombre);

  for (i = 0; i < opciones.length; i++) {
    if (opciones[i].checked) {
      var opcion = opciones[i].value;
    }
  }

  if (opcion) {
    document.getElementById(mensaje).className = "textoOK";
    document.getElementById(mensaje).innerHTML =
      "Campo rellenado correctamente.";
  } else {
    document.getElementById(mensaje).className = "textoError";
    document.getElementById(mensaje).innerHTML =
      "Debe rellenar este campo correctamente.";
  }
}

function validarFormulario() {
  bool_nombre = validarCampoTexto(document.formulario.nombre, "mensaje_nombre");
  bool_apellidos = validarCampoTexto(
    document.formulario.apellidos,
    "mensaje_apellidos"
  );
  bool_dni = validarDni(document.formulario.dni, "mensaje_dni");
  // bool_fecha = validarFecha(document.formulario.fecha, "mensaje_fecha");
  bool_telefono = validarNumeroTelefono(
    document.formulario.telefono,
    "mensaje_telefono"
  );
  //bool_correo = validarEmail(document.formulario.email, "mensaje_email");
  //bool_ocupacion = validarSelect(document.formulario.ocupacion,"mensaje_ocupacion");
  bool_aficiones = validarCheckBox("aficion", "mensaje_aficiones");
  bool_sexo = validarRadioButton("sexo", "mensaje_sexo");
  bool_usuario = validarRadioButton("nuevo-usuario", "mensaje_nuevo_usuario");

  return (
    bool_nombre &&
    bool_apellidos &&
    bool_dni &&
    bool_telefono &&
    bool_aficiones &&
    bool_sexo &&
    bool_usuario
  );
}

function limpiarSpansFormulario() {
  var mensajes = document.getElementsByTagName("span");
  for (var i in mensajes) {
    mensajes[i].innerHTML = "";
  }
}
