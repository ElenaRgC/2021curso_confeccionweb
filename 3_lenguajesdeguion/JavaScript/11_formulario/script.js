function enviarDatos() {
  // Se definen las variables.
  var nombreUsuario,
    apellido1Usuario,
    apellido2Usuario,
    dniUsuario,
    fechaNacimientoUsuario,
    domicilioUsuario,
    localidadUsuario,
    provinciaUsuario,
    cPostalUsario,
    nHijosUsuario,
    tratamiento,
    aficiones = "",
    datosPersonales,
    datosDomicilio,
    datosAficiones;

  // Se extraen las variables tipo texto.
  nombreUsuario = document.getElementById("nombre").value;
  apellido1Usuario = document.getElementById("apellido1").value;
  apellido2Usuario = document.getElementById("apellido2").value;
  dniUsuario = document.getElementById("dni").value;
  fechaNacimientoUsuario = document.getElementById("fecha_nacimiento").value;
  domicilioUsuario = document.getElementById("domicilio").value;
  nHijosUsuario = document.getElementById("hijos").value;

  // Se extraen las variables de tipo radio (género).
  // Según el género elegido cambiará la forma en la que nos dirigiremos al usuario.

  if (document.getElementById("hombre").checked) {
    tratamiento = document.getElementById("hombre").value;
  }
  if (document.getElementById("mujer").checked) {
    tratamiento = document.getElementById("mujer").value;
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
    cPostalUsario +
    " .";

  datosAficiones =
    "Entre sus aficiones se encuentran: " + aficiones + "entre otras.";

  document.getElementById("datos1").value = datosPersonales;
  document.getElementById("datos2").value = datosDomicilio;
  document.getElementById("datos3").value = datosAficiones;
}
