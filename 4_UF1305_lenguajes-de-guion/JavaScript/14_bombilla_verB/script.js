var i = 0;

function encenderBombilla() {
  var encendida = "<img id='on' src='./img/bombilla_on.jpg' alt=''>";
  var apagada = "<img id='off' src='./img/bombilla_off.jpg' alt=''>";

  if (i % 2 != 0) {
    document.getElementById("contenedor").innerHTML = apagada;
  } else {
    document.getElementById("contenedor").innerHTML = encendida;
  }

  i = ++i;
}
