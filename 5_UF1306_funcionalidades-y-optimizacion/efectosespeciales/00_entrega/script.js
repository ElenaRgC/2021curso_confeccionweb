// Función para validad la URL.
function validarURL(valor, error) {
  var url = valor;
  var patron = /^\w+([.-]\w+)*\.\w{2,4}$/;

  if (patron.test(url)) {
    ocultarError(error);
    return true;
  } else {
    mostrarError(error);
    return false;
  }
}

// Función para validar el ancho de la página.
function validarAnchura(valor, error) {
  var anchura = valor;
  var patron = /^\d{1,4}$/;

  if (patron.test(anchura) && anchura <= screen.width) {
    ocultarError(error);
    return true;
  } else {
    mostrarError(error);
    return false;
  }
}

//Función para validar el alto de la página.
function validarAltura(valor, error) {
  var altura = valor;
  var patron = /^\d{1,4}$/;
  if (patron.test(altura) && altura <= screen.height) {
    ocultarError(error);
    return true;
  } else {
    mostrarError(error);
    return false;
  }
}

// Función para cambiar la opacidad del span con la clase error a 1 con una transición.
function mostrarError(span) {
  // Quitar la clase correcto.
  span.removeClass("correcto");
  span.addClass("error");
  span.text("Formato incorrecto.");
  span.css("opacity", "1");
  span.css("transition", "all 1s");
}

// Funcion ocultar error, cuando se valida el contenido de los inputs.
function ocultarError(span) {
  span.removeClass("error");
  span.addClass("correcto");
  span.text("Formato correcto.");
  span.css("opacity", "1");
  span.css("transition", "all 1s");
}

// Función para validar el contenido de los inputs antes de abrir la página.
function validarFormulario() {
  if (
    validarURL($("#url").val()) &&
    validarAnchura(parseInt($("#ancho").val())) &&
    validarAltura(parseInt($("#alto").val()))
  ) {
    abrirPagina();
  }
}

// Función para abrir la página con los datos introducidos.
function abrirPagina() {
  var protocolo = $("input[name='protocolo']:checked").val();
  var url = $("#url").val();
  var ancho = parseInt($("#ancho").val());
  var alto = parseInt($("#alto").val());
  if ($("input[name='www']:checked")) {
    var www = $("input[name='www']:checked").val();
  }
  var redimension = $("#redimension").val();
  var direcciones = $("#direcciones").val();
  var menu = $("#menu").val();
  var scroll = $("#scroll").val();
  var estado = $("#estado").val();
  var titulo = $("#titulo").val();

  if (www) {
    var ventana = window.open(
      protocolo + www + url,
      "_blank",
      "width=" +
        ancho +
        ", height=" +
        alto +
        "resizable=" +
        redimension +
        "toolbar=" +
        direcciones +
        "menubar=" +
        menu +
        "scrollbar=" +
        scroll +
        "statusbar=" +
        estado +
        "titlebar=" +
        titulo
    );
  } else {
    var ventana = window.open(
      protocolo + url,
      "_blank",
      "width=" +
        ancho +
        ", height=" +
        alto +
        "resizable=" +
        redimension +
        "toolbar=" +
        direcciones +
        "menubar=" +
        menu +
        "scrollbar=" +
        scroll +
        "statusbar=" +
        estado +
        "titlebar=" +
        titulo
    );
  }

  // Si la variable ventana es igual a null, se muestra un mensaje de error.
  if (ventana == null) {
    alert(
      "No se pudo abrir la página. Compruebe si ha desactivo el bloqueo de popups."
    );
  } else {
    // Seleccionar todos los inputs y vaciar su contenido.
    $("input").val("");
  }
}
