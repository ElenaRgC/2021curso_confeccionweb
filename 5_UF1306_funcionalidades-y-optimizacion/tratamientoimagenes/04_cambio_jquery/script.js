var x = $(document);
x.ready(inicia);

function inicia() {
  $("#imagen2").mouseover(function () {
    $(this).fadeOut(700);
  });
  $("#imagen1").mouseout(function () {
    $("#imagen2").fadeIn(700);
  });
}
