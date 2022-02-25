function encenderBombilla() {
  // Comprobamos el checkmark.
  if (document.getElementById("bombilla").checked) {
    // Si está marcado, quitamos la imagen de la bombilla apagada
    // y activamos la bombilla encendida.
    document.getElementById("on").style.display = "inline";
    document.getElementById("off").style.display = "none";
  } else {
    // En caso contrario, los display irán al revés.
    document.getElementById("off").style.display = "inline";
    document.getElementById("on").style.display = "none";
  }
}
