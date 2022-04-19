function comprobar() {
  var valor1 = Number(document.getElementById("valor1").value);
  var valor2 = Number(document.getElementById("valor2").value);

  if (isNaN(valor1) || isNaN(valor2)) {
    console.log("Error: valor1 y valor2 deben ser números.");
    return;
  } else {
    console.log("valor1 y valor2 son números. Cálculo realizado.");
  }
}

function calculo(operacion) {
  comprobar();

  var valor1 = Number(document.getElementById("valor1").value);
  var valor2 = Number(document.getElementById("valor2").value);
  var resultado;

  if (operacion == "s") {
    resultado = valor1 + valor2;
  } else if (operacion == "r") {
    resultado = valor1 - valor2;
  } else if (operacion == "m") {
    resultado = valor1 * valor2;
  } else if (operacion == "d") {
    if (valor2 == 0) {
      resultado = "Error";
    } else {
      resultado = valor1 / valor2;
    }
  }

  document.getElementById("resultado").value = resultado;
}

function limpiar() {
  document.getElementById("valor1").value = " ";
  document.getElementById("valor2").value = " ";
  document.getElementById("resultado").value = " ";
  document.getElementById("valor1").focus();
}
