var imagenes = [
  "../img/imagen1.jpg",
  "../img/imagen2.png",
  "../img/imagen3.png",
  "../img/imagen4.jpg",
  "../img/imagen5.jpg",
  "../img/imagen6.jpg",
  "../img/imagen7.png",
];
var num = Math.floor(Math.random() * imagenes.length);

div = document.createElement("div");
document.write("<img src='" + imagenes[num] + "'</img>");
