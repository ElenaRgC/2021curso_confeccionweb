function validarURL(valor) {
  var url = valor;
  var patron = /^\w+([.-]\w+)*\.\w{2,4}$/;

  if (patron.test(url)) {
    return true;
  } else {
    return false;
  }
}

function validarAnchura(valor) {
  var anchura = valor;
  var patron = /^\d{1,4}$/;

  if (patron.test(anchura) && anchura <= screen.width) {
    return true;
  } else {
    $("#alto").data(
      "new-placeholder",
      "Introduzca un número entre 0 y " + screen.width
    );
    return false;
  }
}

function validarAltura(valor) {
  var altura = valor;
  var patron = /^\d{1,4}$/;

  if (patron.test(altura) && altura <= screen.height) {
    return true;
  } else {
    $("#alto").data(
      "new-placeholder",
      "Introduzca un número entre 0 y " + screen.height
    );
    return false;
  }
}

function validarFormulario() {
  if (
    validarURL($("#url").val()) &&
    validarAnchura(parseInt($("#ancho").val())) &&
    validarAltura(parseInt($("#alto").val()))
  ) {
    abrirPagina();
  }
}

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
    window.open(
      protocolo + www + url,
      "_blank",
      "width=" +
        ancho +
        ", height=" +
        ancho +
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
    window.open(
      protocolo + url,
      "_blank",
      "width=" +
        ancho +
        ", height=" +
        ancho +
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
}
