//var inventario = new Array();

var inventario = [
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

function consultarExistencias() {
  var semilla = prompt("¿Qué semilla quiere consultar?").toLowerCase();

  for (i = 0; inventario.length; i++) {
    // Comprobamos que la semilla buscada se encuentre en la array inventario.
    if (inventario[i].nombre == semilla) {
      document.getElementById("contenedor").innerHTML =
        "La semilla " +
        semilla +
        " tiene " +
        inventario[i].cantidad +
        " unidades.";
    } else {
      // Si no hay, nos lo dice.
      document.getElementById("contenedor").innerHTML =
        "No disponemos de existencias de " + semilla + ".";
    }
  }
}

function anadirSemilla() {
  var nuevasemilla = prompt("¿Qué semilla quiere añadir?").toLowerCase();

  var nuevacantidad = Number(
    prompt("¿Cuántas semillas de " + nuevasemilla + " se van a añadir.")
  );

  // Dependiendo de si existe o no ya esa semilla, se añadirá a la array o se modificará la cantidad.
  for (i = 0; inventario.length; i++) {
    if (inventario[i].nombre == nuevasemilla) {
      inventario[i].cantidad = inventario[i].cantidad + nuevacantidad;
      document.getElementById("contenedor").innerHTML =
        "Hemos añadido " +
        nuevacantidad +
        " semillas de " +
        nuevasemilla +
        " y ahora disponemos de " +
        inventario[i].cantidad +
        ".";
      return;
    }
  }
}
