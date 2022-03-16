var x = $(document);
x.ready(inicia);
function inicia() {
  $("#imagenessec .imagensec").each(function (secuencia) {
    $(this)
      .delay(secuencia * 1500)
      .fadeTo(1500, 1);
  });
  $("#imagenessec .imagensec").each(function (secuencia) {
    $(this)
      .delay(4500 + secuencia * 1500)
      .fadeTo(1500, 0);
  });
}
