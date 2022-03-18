function modificarLetra() {
  document.getElementById("contenedor").innerHTML = "";
  var texto = document.getElementById("cuadro-texto").value;
  var letra = "";

  for (i = 0; i < texto.length; i++) {
    spans = document.createElement("span");
    spans.setAttribute("id", "span" + i);
    document.getElementById("contenedor").appendChild(spans);
    letra = texto[i];
    document.getElementById("span" + i).innerHTML = letra;
    document.getElementById("span" + i).style.fontSize = 100 - i * 5 + "px";
  }
}
