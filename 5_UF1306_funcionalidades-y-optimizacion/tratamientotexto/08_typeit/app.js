$("#ejemplo1").typeIt();

$("#ejemplo2").typeIt({
  strings: [
    "Esto es una línea de texto",
    "Se puede escribir en más de una línea.",
  ],
  speed: 50,
});

$("#ejemplo3").typeIt({
  strings: [
    "Texto que se escribe para ser...",
    "borrado y reemplazado por otro texto!",
  ],
  speed: 50,
  breakLines: false,
});

$("#ejemplo4").typeIt({
  strings: [
    "Se pueden personalizar como queramos <span class='lead'>, yuhuu!</span> &spades; &hearts; &clubs; &diams;",
  ],
  speed: 100,
});
