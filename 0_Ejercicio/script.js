var inventario = new Array();

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

  for (i = 0; i < inventario.length; i++) {
    // Comprobamos que la semilla buscada se encuentre en la array inventario.
    if (inventario[i].nombre == semilla) {
      // Existe una excepción y es que esa semilla exista pero tenga cantidad 0.
      if (inventario[i].cantidad == 0) {
        document.getElementById("contenedor").innerHTML =
          "Disponemos de semillas de " +
          semilla +
          " en nuestro catálogo, pero no hay stock.";
      } else {
        document.getElementById("contenedor").innerHTML =
          "La semilla " +
          semilla +
          " tiene " +
          inventario[i].cantidad +
          " unidades.";
      }
      return;
    } else {
      // Si no hay, nos lo dice.
      document.getElementById("contenedor").innerHTML =
        "No existe " + semilla + " en el catálogo.";
    }
  }
}

function anadirSemilla() {
  var nuevasemilla = prompt("¿Qué semilla quiere añadir?").toLowerCase();

  var nuevacantidad = Number(
    prompt("¿Cuántas semillas de " + nuevasemilla + " se van a añadir.")
  );

  //Dependiendo de si existe o no ya esa semilla, se añadirá a la array o se modificará la cantidad.
  for (i = 0; i < inventario.length; i++) {
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

  inventario.push({ nombre: nuevasemilla, cantidad: nuevacantidad });
  document.getElementById("contenedor").innerHTML =
    "Hemos añadido " + nuevacantidad + " semillas de " + nuevasemilla + ".";
}

function verInforme() {
  // Limpiamos el contenido del contenedor.
  document.getElementById("contenedor").innerHTML = "";
  // Para ver el informe simplemente escribimos en el contenedor el par de nombre y cantidad de la array inventario.
  for (i = 0; i < inventario.length; i++) {
    document.getElementById("contenedor").innerHTML +=
      "Disponemos de " +
      inventario[i].cantidad +
      " semillas de " +
      inventario[i].nombre +
      ".<br>";
  }
}
