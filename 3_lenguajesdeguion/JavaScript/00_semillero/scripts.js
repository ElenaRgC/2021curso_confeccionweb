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

// TODO: Añadir patrón a la búsqueda.

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

  var patron = /[a-zA-zá-úÁ-Ú]+/;

  // La función sólo continuará si la semilla está compuesta únicamente por letras.
  if (patron.test(tipoSemilla)) {
    var cantidadSemilla = Number(
      // Preguntamos con un prompt cuántas semillas se quieren añadir.
      prompt("¿Cuántas semillas de " + tipoSemilla + " desea añadir?")
    );
    if (typeof cantidadSemilla != "number" || cantidadSemilla <= 0) {
      // Comprobamos los casos que podrían dar error para detener la función.
      document.getElementById("contenedor").innerHTML =
        "Por favor, introduzca un valor numérico válido.";
    } else {
      // Existen dos opciones posibles a la hora de añadir semillas.
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

          // Modificamos el índice i para salir del bucle,
          // y añadimos un marcador p para saber que la semilla ya existía.
          i = inventario.length;
          var p = 1;
        }
      }

      // En el caso de que no exista esa semilla,
      // la añadiremos al objeto en la cantidad indicada.
      if (p != 1) {
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
  } else {
    // La función avisará al usuario de que ha introducido
    // un nombre incorrecto para la semilla,
    document.getElementById("contenedor").innerHTML =
      "El nombre de la semilla no puede estar vacío ni contener números.";
  }

  // Comprobamos que se haya introducido un valor numérico en el prompt.
}

function mostrarInventario() {
  // Borramos el contenido del contenedor antes de llenarlo.
  document.getElementById("contenedor").innerHTML = "";

  // Creamos una tabla en la que introducir los datos.
  var tabla = document.createElement("table");
  tabla.setAttribute("id", "tablaSemillas");
  document.getElementById("contenedor").appendChild(tabla);

  // Creamos una cabecera para la tabla, sirviéndonos de un for y un switch.
  var filaCabecera = document.createElement("thead");
  filaCabecera.setAttribute("id", "cabecera");
  document.getElementById("tablaSemillas").appendChild(filaCabecera);

  for (i = 0; i < 2; i++) {
    var celdaCabecera = document.createElement("th");
    celdaCabecera.setAttribute("id", "th" + i);
    switch (i) {
      case 0:
        document.getElementById("cabecera").appendChild(celdaCabecera);
        document.getElementById("th" + i).innerHTML = "Semillas";
        break;
      case 1:
        document.getElementById("cabecera").appendChild(celdaCabecera);
        document.getElementById("th" + i).innerHTML = "Cantidad";
        break;
    }
  }

  // Añadimos el contenido a la tabla, creando filas nuevas en el bucle i,
  // el cual recorre todo el inveentario.
  // Creamos celdas en el bucle j que añade a las filas el nombre y
  // la cantidad de semillas.
  for (i = 0; i < inventario.length; i++) {
    var fila = document.createElement("tr");
    fila.setAttribute("id", "fila" + i);
    document.getElementById("tablaSemillas").appendChild(fila);

    for (j = 0; j < 2; j++) {
      var celda = document.createElement("td");
      celda.setAttribute("id", "celda " + i + "_" + j);

      switch (j) {
        case 0:
          document.getElementById("fila" + i).appendChild(celda);
          document.getElementById("celda " + i + "_" + j).innerHTML =
            inventario[i].nombre;
          break;
        case 1:
          document.getElementById("fila" + i).appendChild(celda);
          document.getElementById("celda " + i + "_" + j).innerHTML =
            inventario[i].cantidad;
          break;
      }
    }
  }
}
