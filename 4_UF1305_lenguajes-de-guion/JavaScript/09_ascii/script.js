function codificar(convertir) {
  // El valor que entrará y el valor que saldrá.
  var codigo = "",
    salida = "";

  // Los caracteres permitidos con los que compararemos.
  var caracteres = " ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  // Los strings y arrays para los pasos intermedios.
  var mayusculas, minusculas, equivalencia, conversor;
  var mayus = new Array();
  var minus = new Array();

  // Coge el valor que introduce el usuario.
  codigo = document.getElementById("entrada").value;

  // Añadimos los valores ASCII para las letras mayúsculas a una array.
  for (i = 65; i < 91; i++) {
    mayus.push(i);
  }

  // Añadimos los valores ASCII para las letras minúsculas a una array.
  for (i = 97; i < 123; i++) {
    minus.push(i);
  }

  // Convertimos las arrays en cadenas separadas por comas.
  mayusculas = mayus.join(",");
  minusculas = minus.join(",");

  // Añadimos el valor correspondiente al espacio y unimos las dos cadenas.
  equivalencia = "32," + mayusculas + minusculas;

  // Consideramos que los datos están separados por comas.
  conversor = equivalencia.split(",");

  if (convertir == "ascii") {
    // Si el usuario pulsa en "Codificar".

    for (i = 0; i < codigo.length; i++) {
      // Para cada elemento de la cadena que ha escrito.

      for (j = 0; j < caracteres.length; j++) {
        // Para cada uno de los caracteres posibles.

        if (codigo[i] == caracteres[j]) {
          // Si un elemento de la cadena coincide con uno de los caracteres permitidos.
          salida = salida + conversor[j]; // Se añade el equivalente de la cadena a la salida.
        }
      }
    }
    // Se reemplaza el valor por el valor codificado.
    document.getElementById("entrada").value = salida;
  }

  if (convertir == "texto") {
    // Si el usuario pulsa en "Descodificar".

    for (i = 0; i < codigo.length; i = i + 2) {
      // Para cada elemento de la cadena que ha escrito.
      for (j = 0; j < conversor.length; j++) {
        // Para cada uno de los caracteres convertidos posibles.
        if (codigo[i] != "1") {
          if (codigo[i] + codigo[i + 1] == conversor[j]) {
            // Si dos elementos de la cadena coincide con uno de los caracteres permitidos.
            salida = salida + caracteres[j]; // Se añade el equivalente de la cadena a la salida.
          }
        }

        if (codigo[i] == "1") {
          // Mismo caso que el anterior para valores de tres dígitos.
          if (codigo[i] + codigo[i + 1] + codigo[i + 2] == conversor[j]) {
            salida = salida + caracteres[j];
            i++;
          }
        }
      }
    }
    // Se reemplaza el valor por el valor codificado.
    document.getElementById("entrada").value = salida;
  }
}
