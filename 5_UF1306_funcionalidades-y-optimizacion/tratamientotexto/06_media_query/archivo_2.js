var x = $(document);
x.ready(desliza_abajo);

function desliza_abajo() {
  $("#parrafo").animate({ top: "10em" }, 2500, desliza_arriba);
}
function desliza_arriba() {
  $("#parrafo").animate({ top: "0em" }, 2500, desliza_abajo);
}
