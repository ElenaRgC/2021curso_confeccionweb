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

function validarCPostal(elemento) {
  var dato = elemento.value.trim();
  var patron = /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/;

  if (patron.test(dato)) {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return true;
  } else if (dato == "") {
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
  }
}

function validarSelect(elemento) {
  var opcion = elemento.value;

  if (opcion != "") {
    elemento.classList.remove("input-error");
    elemento.classList.add("input-bien");
    return false;
  } else {
    elemento.classList.remove("input-bien");
    elemento.classList.add("input-error");
    return true;
  }
}

function validarRadioButton(grupo) {
  var lista = document.getElementsByName(grupo);
  var marcado;

  for (var posicion in lista) {
    if (lista[posicion].checked) {
      marcado = lista[posicion].value;
    }
  }

  // TODO: comprobar elemento no definido

  if (marcado != null) {
    document.getElementById(radio).classList.remove("input-error");
    document.getElementById(radio).classList.add("input-bien");
    return false;
  } else {
    document.getElementById(radio).classList.remove("input-bien");
    document.getElementById(radio).classList.add("input-error");
    return true;
  }
}

function limpiarSpansFormulario() {
  var mensajes = document.getElementsByTagName("span");
  for (var i in mensajes) {
    mensajes[i].innerHTML = "";
  }
}
