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
  tratamiento = "",
  aficiones = "",
  datosPersonales,
  datosDomicilio,
  datosAficiones,
  datosHijos = "",
  nombresHijos = new Array();
var passwordUsuario,
  passwordSaved,
  nIntentos = 0,
  numeroUsuario;

var i = 0,
  j = 0;

// Página de log-in.

function iniciarSesion() {
  if (nIntentos > 1) {
    document.getElementById("mensaje").innerHTML =
      "Ha introducido la contraseña incorrecta 3 veces.";
    document.getElementById("inicio").disabled = true;
  }

  passwordSaved = "abc123";
  passwordUsuario = document.getElementById("password").value;

  if (passwordSaved == passwordUsuario) {
    document.getElementById("mensaje").innerHTML = "Acceso permitido.";
    nIntentos = 3;
  } else {
    document.getElementById("mensaje").innerHTML =
      "Ha introducido una contraseña incorrecta.";
    nIntentos = nIntentos + 1;
  }

  numeroUsuario = document.getElementById("usuario").value;
}
// Página de formulario

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

function quitarHijos() {
  document.getElementById("divisorHijos").innerHTML = "";
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
      k = i + 1;
      nuevoHijoLabel = document.createElement("label");
      nuevoHijoLabel.setAttribute("for", "hijo" + i);
      nuevoHijoLabel.innerHTML = "Nombre y apellidos de hijo " + k + ": ";
      nuevoHijoInput = document.createElement("input");
      nuevoHijoInput.setAttribute("type", "text");
      nuevoHijoInput.setAttribute("id", "hijo" + i);
      divHijos.appendChild(nuevoHijoLabel);
      divHijos.appendChild(nuevoHijoInput);
      divHijos.innerHTML += "<br>";
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
    fechaNacimientoUsuario;

  if (nHijosUsuario == 0) {
    datosPersonales = datosPersonales + ".";
  } else {
    datosPersonales =
      datosPersonales + " y tiene " + nHijosUsuario + " hijo/s.";
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

  datosAficiones = "Sus aficiones son " + aficiones + "entre otras.";

  // Se muestran los datos al usuario.
  document.getElementById("datos1").value = datosPersonales;
  document.getElementById("datos2").value = datosDomicilio;
  document.getElementById("datos3").value = datosAficiones;

  if (nHijosUsuario != 0) {
    datosHijos = "Los hijos de " + nombreUsuario + " son: ";

    for (i = 0; i < nHijosUsuario; i++) {
      nombresHijos[i] = document.getElementById("hijo" + i).value;
      datosHijos = datosHijos + nombresHijos[i] + " ,";

      if (i == nHijosUsuario - 2) {
        datosHijos = datosHijos + " y ";
      }
    }
    datosHijos = datosHijos + ".";
    document.getElementById("datos4").value = datosHijos;
  }
}
