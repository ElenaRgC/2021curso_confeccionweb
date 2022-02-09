var intentos = 0;
var pistaJS_string = "",
  p_secreta_string = "";
var p_secreta_array = new Array();
var pistaJS_array = new Array();

// Creamos una función de nueva partida porque no podemos acceder al DOM para crear la pista antes de que se cargue la página.
function nueva_partida() {
  // Activamos el botón para jugar.
  document.getElementById("boton").disabled = false;

  intentos = 0;
  pistaJS_string = "";

  p_secreta_string = "ahorcado";
  p_secreta_array = p_secreta_string.split(""); // Creamos una array para la palabra secreta para poder reemplazar posicionas concretas, ya que no es posible hacerlo con cadenas.

  if (intentos == 0) {
    // Si es el inicio de una partida, creará _ por cada letra de la palabra secreta.
    for (i = 0; i < p_secreta_string.length; i++) {
      pistaJS_string = pistaJS_string + "_";
    }
  }
  // Escribimos en el DOM la cadena de _ que hemos creado en el bucle anterior.
  document.getElementById("pistaHTML").value = pistaJS_string;

  // Creamos una array de la cadena de _ para poder reemplazar letras si se aciertan.
  pistaJS_array = pistaJS_string.split("");
}

function probar() {
  // El jugador prueba una letra en el cuadro de texto "entrada".
  var letra_jugador = document.getElementById("entrada").value;

  // Si la letra coincide con alguna de las letras contenidas en nuestra array, reemplazamos la _ de esa posición.
  for (i = 0; i < p_secreta_string.length; i++) {
    if (p_secreta_string[i] == letra_jugador) {
      pistaJS_array[i] = p_secreta_array[i];
    }
  }

  // Convertimos la array en una cadena para poder escribirla en el DOM.
  pistaJS_string = pistaJS_array.join("");

  // Si la cadena permanece igual (no cambia ningún _ ) los intentos aumentan en 1.
  if (pistaJS_string == document.getElementById("pistaHTML").value) {
    intentos++;
  } else {
    // En caso contrario, escribimos los aciertos en el cuadro de texto.
    document.getElementById("pistaHTML").value = pistaJS_string;
  }

  // Comprobamos si el jugador ha completado la palabra y, por tanto, ganado.
  if (pistaJS_string == p_secreta_string) {
    alert("¡Has ganado!");
    document.getElementById("boton").disabled = true;
  }

  // Según el número de fallos, se muestran más elementos.
  switch (intentos) {
    case 10:
      document.getElementById("boton").disabled = true; // Desactivamos el botón cuando agotamos los intentos.
      document.getElementById("fallo-10").style.visibility = "visible";
    case 9:
      document.getElementById("fallo-9").style.visibility = "visible";
    case 8:
      document.getElementById("fallo-8").style.visibility = "visible";
    case 7:
      document.getElementById("fallo-7").style.visibility = "visible";
    case 6:
      document.getElementById("fallo-6").style.visibility = "visible";
    case 5:
      document.getElementById("fallo-5").style.visibility = "visible";
    case 4:
      document.getElementById("fallo-4").style.visibility = "visible";
    case 3:
      document.getElementById("fallo-33").style.visibility = "visible";
      document.getElementById("fallo-32").style.visibility = "visible";
      document.getElementById("fallo-31").style.visibility = "visible";
    case 2:
      document.getElementById("fallo-24").style.visibility = "visible";
      document.getElementById("fallo-23").style.visibility = "visible";
      document.getElementById("fallo-22").style.visibility = "visible";
      document.getElementById("fallo-21").style.visibility = "visible";
    case 1:
      document.getElementById("fallo-12").style.visibility = "visible";
      document.getElementById("fallo-11").style.visibility = "visible";
  }
}

function ocultar() {
  // Escondemos los elementos del dibujo al iniciar una nueva
  document.getElementById("fallo-11").style.visibility = "hidden";
  document.getElementById("fallo-12").style.visibility = "hidden";
  document.getElementById("fallo-21").style.visibility = "hidden";
  document.getElementById("fallo-22").style.visibility = "hidden";
  document.getElementById("fallo-23").style.visibility = "hidden";
  document.getElementById("fallo-24").style.visibility = "hidden";
  document.getElementById("fallo-31").style.visibility = "hidden";
  document.getElementById("fallo-32").style.visibility = "hidden";
  document.getElementById("fallo-33").style.visibility = "hidden";
  document.getElementById("fallo-4").style.visibility = "hidden";
  document.getElementById("fallo-5").style.visibility = "hidden";
  document.getElementById("fallo-6").style.visibility = "hidden";
  document.getElementById("fallo-7").style.visibility = "hidden";
  document.getElementById("fallo-8").style.visibility = "hidden";
  document.getElementById("fallo-9").style.visibility = "hidden";
  document.getElementById("fallo-10").style.visibility = "hidden";
}
