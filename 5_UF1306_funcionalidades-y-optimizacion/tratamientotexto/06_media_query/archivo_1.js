var x = $(document);
x.ready(desliza_abajo);

function desliza_abajo() {
  $("#parrafo").animate({ top: "10em" }, 1000, desliza_arriba);
}
function desliza_arriba() {
  $("#parrafo").animate({ top: "0em" }, 1000, desliza_abajo);
}
