// Datos introducidos por el usuario.
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
  passwordUsuario;

// Variables intermedias para el funcionamiento de la página o
// datos finales a mostrar al usuario.
var tratamiento = "",
  aficiones = "",
  datosPersonales = "",
  datosDomicilio = "",
  datosAficiones = "",
  datosHijos = "",
  nombresHijos = new Array();

// Datos predefinidos de los usuarios.
// (Apellido 1, Apellido 2, Nombre, DNI, Dirección, Contraseña)
var usuarios = [
  {
    apellido1: "Barragán",
    apellido2: "Granados",
    nombre: "José Luis",
    dni: "92131280L",
    domicilio: "Avda. Alameda, 86",
    password: "abc123",
  },
  {
    apellido1: "Sánchez",
    apellido2: "Camacho",
    nombre: "Nazario",
    dni: "52762149B",
    domicilio: "Calle Comandante Izarduy, 61",
    password: "m1contrasena",
  },
  {
    apellido1: "Arriaga",
    apellido2: "Menéndez",
    nombre: "Piedad",
    dni: "02831435C",
    domicilio: "Plaza Extramuros, 68",
    password: "iniciarsesi0n",
  },
];

// Índices de los bucles.
var nIntentos = 0;
var i = 0,
  j = 0;

// Página de log-in.

function iniciarSesion() {
  // Crearemos la función de inicio de sesión con el DNI,
  // porque varias personas pueden compartir nombre o apellido,
  // pero el DNI es único.
  dniUsuario = document.getElementById("dniusuario").value;
  passwordUsuario = document.getElementById("password").value;
  localStorage.setItem("dniLogIn", dniUsuario);

  for (i = 0; i < usuarios.length; i++) {
    // Las comprobaciones se realizarán con un else if
    // para evitar que realice todas las acciones si la primera se cumple,
    // ya que aunque funcione para un usuario, fallará para todos los demás.

    // Primero comprobamos el caso menos probable y más importante.
    // Coinciden DNI y contraseña.
    if (
      usuarios[i].dni == dniUsuario &&
      usuarios[i].password == passwordUsuario
    ) {
      // Guardamos los datos en el local storage antes de irnos a otra página.
      localStorage.setItem("arrayUsuarios", JSON.stringify(usuarios));
      localStorage.setItem("dni", dniUsuario);

      document.getElementById("mensaje").innerHTML = "Acceso permitido.";
      nIntentos = 4;
      location.href = "formulario.html";
      // DNI correcto pero contraseña equivocada.
    } else if (
      usuarios[i].dni == dniUsuario &&
      usuarios[i].password != passwordUsuario
    ) {
      document.getElementById("mensaje").innerHTML =
        "Ha introducido una contraseña incorrecta.";
      nIntentos = nIntentos + 1;
      // DNI no existe en la base de datos.
    } else if (usuarios[i].dni != dniUsuario) {
      document.getElementById("mensaje").innerHTML =
        "No existe una cuenta con ese DNI.";
    }
  }

  if (nIntentos >= 3) {
    document.getElementById("mensaje").innerHTML =
      "Ha introducido la contraseña incorrecta 3 veces.";
    document.getElementById("inicio").disabled = true;
  }
}

function nuevoUsuario() {
  dniUsuario = prompt("Introduzca su DNI.");
  passwordUsuario = prompt("Introduzca una contraseña.");

  usuarios.push({
    apellido1: "",
    apellido2: "",
    nombre: "",
    dni: dniUsuario,
    domicilio: "",
    password: passwordUsuario,
  });
  document.getElementById("mensaje").innerHTML =
    "Puede iniciar sesión con su DNI y contraseña.";
}

// Página de formulario

function cargarUsuario() {
  dniUsuario = localStorage.getItem("dni");
  datosUsuarios = localStorage.getItem("arrayUsuarios");
  usuarios = JSON.parse(datosUsuarios);

  for (i = 0; i < usuarios.length; i++) {
    if (usuarios[i].dni == dniUsuario) {
      document.getElementById("apellido1").value = usuarios[i].apellido1;
      document.getElementById("apellido2").value = usuarios[i].apellido2;
      document.getElementById("nombre").value = usuarios[i].nombre;
      document.getElementById("dni").value = usuarios[i].dni;
      document.getElementById("domicilio").value = usuarios[i].domicilio;
    }
  }
}

function comprobarDNI() {
  var letraDNI,
    numeroDNI = "",
    letras = "TRWAGMYFPDXBNJZSQVHLCKE",
    resto = 0;

  dniUsuario = document.getElementById("dni").value;

  //Extraemos la letra del DNI, que se encuentra en la novena posición.
  letraDNI = dniUsuario[8];

  // El input es de tipo texto, pero tenemos que convertirlo a número para poder dividirlo entre 23.
  // Restamos uno a la longitud para no contar la letra, que irá al final.
  for (i = 0; i < dniUsuario.length - 1; i++) {
    numeroDNI = numeroDNI + dniUsuario[i];
  }

  resto = Number(numeroDNI) % 23;

  // Si la letra obtenida no se corresponde con la que se ha introducido, añadimos un estilo diferente al cuadro de texto.
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

  // Extraemos el indice y el valor de la localidad seleccionada.
  localidadSeleccionada = document.getElementById("localidad");
  localidadSeleccionadaIndice = localidadSeleccionada.selectedIndex;
  localidadSeleccionadaValor =
    localidadSeleccionada.options[localidadSeleccionadaIndice].value;

  // Al haber definido los valores en el HTML, el valor será directamente el código postal asociado a esa localidad.
  cPostalUsuario = localidadSeleccionadaValor;

  // Escribimos en el cuadro de texto el valor obtenido.
  document.getElementById("c_postal").value = cPostalUsuario;

  // Decidimos la provincia en base a los dos primeros dígitos del código postal.
  cPostalInicio = cPostalUsuario[0] + cPostalUsuario[1];

  switch (cPostalInicio) {
    case "02":
      document.getElementById("provincia").value = "Albacete";
      break;
    case "13":
      document.getElementById("provincia").value = "Ciudad Real";
      break;
    case "16":
      document.getElementById("provincia").value = "Cuenca";
      break;
    case "19":
      document.getElementById("provincia").value = "Guadalajara";
      break;
    case "45":
      document.getElementById("provincia").value = "Toledo";
      break;
  }
}

function quitarHijos() {
  // En el caso de que el usuario se equivoque en el número de hijos,
  // se eliminan los cuadros de texto.
  if (document.getElementById("divisorHijos")) {
    document.getElementById("divisorHijos").innerHTML = "";
  }
}

function anadirHijos() {
  // Si el número de hijos no cambia, NO crea nuevas casillas.
  // Esto es necesario porque cambiar el foco sin cambiar el número ejecuta esta función,
  // pero no ejecuta la función de limpieza quitarHijos que solo funciona onChange.
  if (document.getElementById("hijos").value != nHijosUsuario) {
    nHijosUsuario = document.getElementById("hijos").value;

    if (nHijosUsuario != 0) {
      // Solo se crea un div nuevo una vez, no cada vez que cambiemos la cantidad de hijos.
      if (j == 0) {
        divHijos = document.createElement("div");
        divHijos.setAttribute("id", "divisorHijos");
        document.getElementById("familia").appendChild(divHijos);
        j = j + 1;
      }

      // Por cada hijo nuevo creamos una label y un input,
      // que añadimos al contenedor divisorHijos.
      // Podría añadirse texto simple, pero es mejor añadir una label
      // para facilitar la accesibilidad de los usuarios.
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
      // Si el número de hijos es 0, eliminamos los cuadros de texto y
      // los datos que se muestran escritos.
      document.getElementById("divisorHijos").innerHTML = "";
      datosHijos = "";
      document.getElementById("datos4").value = datosHijos;
    }
  }
}

function enviarDatos() {
  // Se extraen las variables tipo texto o número
  // introducidas en el formulario.
  apellido1Usuario = document.getElementById("apellido1").value;
  apellido2Usuario = document.getElementById("apellido2").value;
  nombreUsuario = document.getElementById("nombre").value;
  dniUsuario = document.getElementById("dni").value;
  fechaNacimientoUsuario = document.getElementById("fecha_nacimiento").value;
  domicilioUsuario = document.getElementById("domicilio").value;
  nHijosUsuario = document.getElementById("hijos").value;
  cPostalUsuario = document.getElementById("c_postal").value;
  provinciaUsuario = document.getElementById("provincia").value;

  // Guardamos el nombre por separado porque lo usaremos
  // para el asunto del email.
  localStorage.setItem("nombre", nombreUsuario);

  // Se extrae la localidad (desplegable).
  localidadSeleccionada = document.getElementById("localidad");
  localidadSeleccionadaIndice = localidadSeleccionada.selectedIndex;
  localidadUsuario =
    localidadSeleccionada.options[localidadSeleccionadaIndice].text;

  // Se extraen las variables de tipo radio (género).
  // Según el género elegido cambiará la forma en la que nos dirigiremos al usuario.
  if (document.getElementById("hombre").checked) {
    tratamiento = document.getElementById("hombre").value + " ";
  }
  if (document.getElementById("mujer").checked) {
    tratamiento = document.getElementById("mujer").value + " ";
  }
  if (document.getElementById("otro").checked) {
    tratamiento = "";
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

  // Se almacenan las variables en los texto a mostrar.
  datosPersonales =
    tratamiento +
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
      datosHijos = datosHijos + nombresHijos[i];

      // Para añadir una coma entre los hijos,
      // siempre que no sean el último o el penúltimo
      if (
        nHijosUsuario > 1 &&
        i != nHijosUsuario - 1 &&
        nHijosUsuario > 1 &&
        i != nHijosUsuario - 2
      ) {
        datosHijos = datosHijos + ", ";
      }

      // Para añadir un "y" antes del último hijo,
      if (i == nHijosUsuario - 2) {
        datosHijos = datosHijos + " y ";
      }
    }
    datosHijos = datosHijos + ".";
    document.getElementById("datos4").value = datosHijos;
  }

  // Almacenamos las variables para poder llamarlas desde otras páginas.
  // En este caso no sería necesario, porque se acceden a todos los datos desde la misma página,
  // pero se aprovecha como ejemplo para el envío de email y descarga de pdf.
  localStorage.setItem("infoPersonal", datosPersonales);
  localStorage.setItem("infoDomicilio", datosDomicilio);
  localStorage.setItem("infoHijos", datosHijos);
}

function enviarCorreo() {
  var asuntoEmail, cuerpoEmail, direccionEmail;

  nombreUsuario = localStorage.getItem("nombre");
  asuntoEmail = "Datos de" + nombreUsuario;

  // Llamamos los datos que hemos guardado anteriormente.
  localStorage.setItem("infoPersonal", datosPersonales);
  localStorage.setItem("infoDomicilio", datosDomicilio);
  localStorage.setItem("infoHijos", datosHijos);

  cuerpoEmail = datosPersonales + " " + datosDomicilio + " " + datosHijos;

  direccionEmail = prompt("Introduce tu dirección de correo electrónico:");

  if (direccionEmail != null) {
    var datosEmail =
      direccionEmail + "?subject=" + asuntoEmail + "&body=" + cuerpoEmail;
    window.open("mailto:" + datosEmail);
  }
}

function descargarPDF() {
  // Llamamos los datos guardados.
  datosPersonales = localStorage.getItem("infoPersonal");
  datosDomicilio = localStorage.getItem("infoDomicilio");
  datosHijos = localStorage.getItem("infoHijos");
  titulo = "Datos de " + nombreUsuario;

  // Introducimos cada dato en una línea.
  // El segundo valor indica el margen superior de cada línea,
  // por lo que si ponemos el mismo se superpondrían entre ellas.
  var documento = new jsPDF();
  documento.text(25, 25, titulo);
  documento.setFontSize(12);
  documento.text(25, 35, datosPersonales);
  documento.text(25, 42, datosDomicilio);
  documento.text(25, 49, datosHijos);

  documento.save("Datos formulario.pdf");
}
