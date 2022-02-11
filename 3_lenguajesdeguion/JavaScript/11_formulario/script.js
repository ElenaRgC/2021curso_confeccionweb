// Se definen las variables globales.
var nombreUsuario,
  apellido1Usuario,
  apellido2Usuario,
  dniUsuario,
  fechaNacimientoUsuario,
  domicilioUsuario,
  localidadUsuario,
  provinciaUsuario,
  cPostalUsuario,
  nHijosUsuario,
  tratamiento,
  aficiones = "",
  datosPersonales,
  datosDomicilio,
  datosAficiones;

var i,
  j = 0;

function comprobarDNI() {
  var letraDNI,
    numeroDNI = "",
    letras = "TRWAGMYFPDXBNJZSQVHLCKE",
    resto = 0;

  dniUsuario = document.getElementById("dni").value;

  letraDNI = dniUsuario[8];

  for (i = 0; i < dniUsuario.length - 1; i++) {
    numeroDNI = numeroDNI + dniUsuario[i];
  }

  resto = Number(numeroDNI) % 23;

  if (letras[resto] != letraDNI) {
    document.getElementById("dni").classList.add("rojo");
  } else {
    document.getElementById("dni").classList.remove("rojo");
  }
}

function codigoPostal() {
  var cPostalInicio,
    localidadSeleccionada,
    localidadSeleccionadaIndice,
    localidadSeleccionadaValor;

  localidadSeleccionada = document.getElementById("localidad");
  localidadSeleccionadaIndice = localidadSeleccionada.selectedIndex;
  localidadSeleccionadaValor =
    localidadSeleccionada.options[localidadSeleccionadaIndice].value;

  cPostalUsuario = localidadSeleccionadaValor;
  document.getElementById("c_postal").value = cPostalUsuario;

  cPostalInicio = cPostalUsuario[0] + cPostalUsuario[1];

  if (cPostalInicio == "02") {
    document.getElementById("provincia").value = "Albacete";
  }
  if (cPostalInicio == "13") {
    document.getElementById("provincia").value = "Ciudad Real";
  }
  if (cPostalInicio == "16") {
    document.getElementById("provincia").value = "Cuenca";
  }
  if (cPostalInicio == "19") {
    document.getElementById("provincia").value = "Guadalajara";
  }
  if (cPostalInicio == "45") {
    document.getElementById("provincia").value = "Toledo";
  }
}

function anadirHijos() {
  nHijosUsuario = document.getElementById("hijos").value;

  if (nHijosUsuario != 0) {
    // Solo se crea un div nuevo una vez, no cada vez que cambiemos la cantidad de hijos.
    if (j == 0) {
      divHijos = document.createElement("div");
      divHijos.setAttribute("id", "divisorHijos");
      document.getElementById("familia").appendChild(divHijos);
      j = j + 1;
    }

    for (i = 0; i < nHijosUsuario; i++) {
      nuevoHijoLabel = document.createElement("label");
      nuevoHijoLabel.setAttribute("for", "hijo" + i);
      nuevoHijoLabel.text = "Nombre y apellidos de hijo " + i + ":";
      nuevoHijoInput = document.createElement("input");
      nuevoHijoInput.setAttribute("type", "text");
      divHijos.appendChild(nuevoHijoLabel);
      divHijos.appendChild(nuevoHijoInput);
    }
  } else {
    document.getElementById("divisorHijos").innerHTML = "";
  }
}

function enviarDatos() {
  // Se extraen las variables tipo texto o número.
  nombreUsuario = document.getElementById("nombre").value;
  apellido1Usuario = document.getElementById("apellido1").value;
  apellido2Usuario = document.getElementById("apellido2").value;
  dniUsuario = document.getElementById("dni").value;
  fechaNacimientoUsuario = document.getElementById("fecha_nacimiento").value;
  domicilioUsuario = document.getElementById("domicilio").value;
  nHijosUsuario = document.getElementById("hijos").value;
  cPostalUsuario = document.getElementById("c_postal").value;
  provinciaUsuario = document.getElementById("provincia").value;

  // Se extrae la localidad (desplegable).
  localidadSeleccionada = document.getElementById("localidad");
  localidadSeleccionadaIndice = localidadSeleccionada.selectedIndex;
  localidadUsuario =
    localidadSeleccionada.options[localidadSeleccionadaIndice].text;

  // Se extraen las variables de tipo radio (género).
  // Según el género elegido cambiará la forma en la que nos dirigiremos al usuario.

  if (document.getElementById("hombre").checked) {
    tratamiento = document.getElementById("hombre").value + "";
  }
  if (document.getElementById("mujer").checked) {
    tratamiento = document.getElementById("mujer").value + "";
  }
  if (document.getElementById("otro").checked) {
    tratamiento = document.getElementById("otro").value;
  }

  // Se extraen las variables de tipo check (aficiones).

  if (document.getElementById("cocina").checked) {
    aficiones = aficiones + document.getElementById("cocina").value + ", ";
  }
  if (document.getElementById("viajar").checked) {
    aficiones = aficiones + document.getElementById("viajar").value + ", ";
  }
  if (document.getElementById("idiomas").checked) {
    aficiones = aficiones + document.getElementById("idiomas").value + ", ";
  }
  if (document.getElementById("cine").checked) {
    aficiones = aficiones + document.getElementById("cine").value + ", ";
  }
  if (document.getElementById("lectura").checked) {
    aficiones = aficiones + document.getElementById("cocina").value + ", ";
  }
  if (document.getElementById("deportes").checked) {
    aficiones = aficiones + document.getElementById("deportes").value + ", ";
  }

  // Se almacenan las variables en el texto a mostrar.

  if (nHijosUsuario != 0) {
    datosPersonales =
      tratamiento +
      " " +
      nombreUsuario +
      " " +
      apellido1Usuario +
      " " +
      apellido2Usuario +
      " con DNI " +
      dniUsuario +
      " nació el " +
      fechaNacimientoUsuario +
      " y tiene " +
      nHijosUsuario +
      " hijo/s.";
  } else {
    datosPersonales =
      tratamiento +
      " " +
      nombreUsuario +
      " " +
      apellido1Usuario +
      " " +
      apellido2Usuario +
      " con DNI " +
      dniUsuario +
      " nació el " +
      fechaNacimientoUsuario +
      ".";
  }

  datosDomicilio =
    "Reside en " +
    domicilioUsuario +
    " en " +
    localidadUsuario +
    " (" +
    provinciaUsuario +
    ") con código postal " +
    cPostalUsuario +
    " .";

  datosAficiones =
    "Entre sus aficiones se encuentran: " + aficiones + "entre otras.";

  document.getElementById("datos1").value = datosPersonales;
  document.getElementById("datos2").value = datosDomicilio;
  document.getElementById("datos3").value = datosAficiones;
}
