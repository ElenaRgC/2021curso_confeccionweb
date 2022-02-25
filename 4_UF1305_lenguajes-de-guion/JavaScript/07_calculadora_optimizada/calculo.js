function calculo(operacion) {
  var valor1 = Number(document.getElementById("valor1").value);
  var valor2 = Number(document.getElementById("valor2").value);

  if (operacion == "s") {
    resultado = valor1 + valor2;
  } else if (operacion == "r") {
    resultado = valor1 - valor2;
  } else if (operacion == "m") {
    resultado = valor1 * valor2;
  } else if (operacion == "d") {
    resultado = valor1 / valor2;
  }

  document.getElementById("resultado").value = resultado;
}

function limpiar() {
  document.getElementById("valor1").value = " ";
  document.getElementById("valor2").value = " ";
  document.getElementById("resultado").value = " ";
  document.getElementById("valor1").focus();
}
