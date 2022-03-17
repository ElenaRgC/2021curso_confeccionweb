var x = $(document);
x.ready(inicia);
function inicia() {
  $("#texto").textomov();
}
$.fn.textomov = function () {
  this.each(function () {
    var $ele = $(this);
    str = $ele.text();
    progress = 0;
    $ele.text("");
    var tiempo = setInterval(function () {
      $ele.text(str.substring(0, progress++) + (progress & 1 ? "_" : ""));
      if (progress >= str.length) {
        clearInterval(tiempo);
      }
    }, 100);
  });
};
