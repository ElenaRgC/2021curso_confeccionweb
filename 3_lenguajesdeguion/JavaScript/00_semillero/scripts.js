var inventario = new Array();

inventario = [
  { nombre: "pino", cantidad: 0 },
  {
    nombre: "abeto",
    cantidad: 1,
  },
  {
    nombre: "encina",
    cantidad: 2,
  },
  {
    nombre: "mimosa",
    cantidad: 3,
  },
];

var i = 0;

function buscarSemilla() {
  // Creamos la variable semilla según la búsqueda del usuario.
  var semilla = document.getElementById("busqueda").value.toLowerCase();

  // Recorreremos el objeto inventario para la variable semilla y
  // mostraremos un mensaje acorde en el contenedor designado en el HTML.
  for (i = 0; i < inventario.length; i++) {
    // El caso menos probable es que tengamos la semilla en el catálogo
    // pero con una cantidad de cero.
    if (inventario[i].nombre == semilla && inventario[i].cantidad == 0) {
      document.getElementById("contenedor").innerHTML =
        "Existen semillas de " +
        semilla +
        " en nuestro catálogo, pero no disponemos de existencias.";

      // Modificamos el valor del índice i en el caso de que se dé esta condición
      // para evitar que ejecute las siguientes.
      i = inventario.length;
    }
    // El siguiente caso menos probable es que exista esa semilla
    // con una cantidad distinta de 0.
    if (inventario[i].nombre == semilla) {
      document.getElementById("contenedor").innerHTML =
        "Actualmente disponemos de " +
        inventario[i].cantidad +
        " semillas de " +
        semilla +
        ".";
      // Igual que en el caso anterior, paramos el bucle for mudificando el índice i.
      i = inventario.length;
    }
    // Por último, comprobamos el caso más probable, que la semilla no se encuentre en nuestro inventario.
    if (inventario[i].nombre != semilla) {
      document.getElementById("contenedor").innerHTML =
        "No disponemos de existencias de semillas de " + semilla + ".";
    }
  }
}

function masSemilla() {
  // Creamos la variable tipoSemilla según la entrada del usuario.
  var tipoSemilla = document.getElementById("anadir").value.toLowerCase();

  // Preguntamos con un prompt cuántas semillas se quieren añadir.
  var cantidadSemilla = Number(
    prompt("¿Cuántas semillas de " + tipoSemilla + " desea añadir?")
  );

  // Comprobamos que se haya introducido un valor numérico en el prompt.
  if (typeof cantidadSemilla != "number") {
    document.getElementById("contenedor").innerHTML =
      "Por favor, introduzca un valor numérico.";
  } else {
    // Se crean dos bucles independientes para que no corramos el riesgo de
    // añadir en múltiples ocasiones la cantidad de semillas introducida.
    for (i = 0; i < inventario.length; i++) {
      // En el primer caso comprobamos si existe ese tipoSemilla.
      // Si existe incrementaremos la cantidad.
      if (inventario[i].nombre == tipoSemilla) {
        inventario[i].cantidad = inventario[i].cantidad + cantidadSemilla;
        document.getElementById("contenedor").innerHTML =
          "Ahora disponemos de " +
          inventario[i].cantidad +
          " semillas de " +
          tipoSemilla +
          ".";
        i = inventario.length;
      }
    }

    for (i = 0; i < inventario.length; i++) {
      // En el caso de que no exista esa semilla,
      // la añadiremos al objeto en la cantidad indicada.
      if (inventario[i].nombre != tipoSemilla) {
        inventario.push({
          nombre: tipoSemilla,
          cantidad: cantidadSemilla,
        });
        document.getElementById("contenedor").innerHTML =
          "Se han añadido " +
          cantidadSemilla +
          " semillas de " +
          tipoSemilla +
          " al inventario.";
        i = inventario.length;
      }
    }
  }
}
