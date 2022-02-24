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

function validarSexo(mensaje) {
  var opciones = document.getElementsByName("sexo");

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
