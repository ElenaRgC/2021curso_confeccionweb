// FUNCIONES DE VALIDACIÓN

function validarCampoTexto(elemento) {
  var dato = elemento.value.trim();
  var patron = /^[a-zA-Z\s]+$/;

  if (patron.test(dato)) {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return true;
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return false;
  }
}

function validarDomicilio(elemento) {
  var dato = elemento.value.trim();
  var patron = /^[a-zA-Z\d\s\-\.\,]+$/;

  if (patron.test(dato)) {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return true;
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return false;
  }
}

function validarCPostal(elemento) {
  var dato = elemento.value.trim();
  var patron = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;

  if (patron.test(dato)) {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return true;
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return false;
  }
}

function validarEmail(elemento) {
  correo = elemento.value.trim();
  var patron = /^\w+([.-]\w+)*@\w+([.-]\w+)*\.\w{2,4}$/;

  if (correo != "") {
    if (patron.test(correo)) {
      elemento.classList.remove("input-error");
      elemento.classList.add("input-bien");
      return true;
    } else {
      elemento.classList.remove("input-bien");
      elemento.classList.add("input-error");
      return false;
    }
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return false;
  }
}

function validarSelect(elemento) {
  var opcion = elemento.value;

  if (opcion != "") {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return true;
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return false;
  }
}

function validarRadioButton() {
  var lista = document.getElementsByName("tratamiento");
  var marcado;

  for (var posicion in lista) {
    if (lista[posicion].checked) {
      marcado = lista[posicion].value;
    }
  }

  if (marcado != null) {
    document.getElementById("radio").classList.remove("input-error");
    //document.getElementById("radio").classList.add("input-bien");
    return true;
  } else {
    //document.getElementById("radio").classList.remove("input-bien");
    document.getElementById("radio").classList.add("input-error");
    return false;
  }
}

// Comprobaciones para el envío del formulario
function validarFormulario() {
  bool_tratamiento = validarRadioButton("tratamiento");
  bool_nombre = validarCampoTexto(document.formulario.nombre);
  bool_apellidos = validarCampoTexto(document.formulario.apellidos);
  bool_domicilio = validarDomicilio(document.formulario.domicilio);
  bool_cpostal = validarCPostal(document.formulario.cpostal);
  bool_correo = validarEmail(document.formulario.correo);
  bool_ingles = validarSelect(document.formulario.ingles);

  return (
    bool_tratamiento &&
    bool_nombre &&
    bool_apellidos &&
    bool_domicilio &&
    bool_cpostal &&
    bool_correo &&
    bool_ingles
  );
}

// Botón de limpieza

function limpiarInputs() {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    inputs[i].classList.remove("input-bien");
    inputs[i].classList.remove("input-error");
  }
}
