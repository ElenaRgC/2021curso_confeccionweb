var x = $(document);
var imagen_oculta = "imagen2";
x.ready(inicia);

function inicia() {
  $("#imagen2").hide();
  $("#boton").click(desplazar);
}

function desplazar() {
  if (imagen_oculta == "imagen2") {
    $("#imagen1").animate({ left: "+=25em", opacity: "0.25" }, 1000).hide(1000);
    $("#imagen2").delay(1000).fadeIn(1000);
    imagen_oculta = "imagen1";
  } else {
    $("#imagen2").fadeOut(1000);
    $("#imagen1")
      .delay(1000)
      .show(1000)
      .animate({ left: "-=25em", opacity: "1" }, 1000);
    imagen_oculta = "imagen2";
  }
}

/* $(document).ready(function () {
  $("#boton").click(function () {
    $("#imagen2").animate(
      {
        opacity: 0.25,
        left: "400px",
      },
      {
        duration: 1000,
      }
    );
    $("#imagen2").animate(
      {
        opacity: 0,
        width: "toggle",
        height: "toggle",
      },
      {
        duration: 1000,
      }
    );
    $("#imagen1").delay(1000).animate(
      {
        opacity: 1,
      },
      {
        duration: 500,
      }
    );
  });
}); */

/* $(document).ready(function () {
  $("button").click(function () {
    $("#imagen2").animate({ left: "250px" });
  });
}); */
