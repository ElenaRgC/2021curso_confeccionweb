# MARKDOWN

---

- Elementos de bloque
  - Párrafos
  - Saltos de línea
  - Encabezados
  - Citas
  - Listas
  - Códigos de bloque
  - Líneas horizontales
- Elementos de línea
  - Énfasis
  - Links o enlaces
  - Código
  - Imágenes
- Otros elementos
  - Links automáticos
  - Omitir Markdown
  - Símbolos matemáticos

## Párrafos

---

Para génerar un párrafo en Markdown simplemente separa el texto mediante una línea en blanco pulsando dos veces **Enter**.

Aquí tendría el segundo párrafo.

## Saltos de línea

---

Para realizar un salto de línea y empezar una frase en una línea a continuación sin cambiar de párrafo, hay que dejar dos especios al final del texto antes de pulsar **Enter**,  
tal y como hemos hecho aquí.

## Encabezados

---

Las almohadillas (**#**)son unos de los métodos que usa **Markdown** para crear encabezados. Debes usarlos añadiendo uno por nivel.

## Encabezado 2

### Encabezado 3

#### Encabezado 4

##### Encabezado 5

###### Encabezado 6

## Citas

---

Las citas se utilizan utilizando el caracter **>** al inicio del texto.

> Este es un ejemplo de cita.

## Listas

- Elemento A
  1. Elemento 1
  2. Elemento 2
     - Elemento 2a
- Elemento B

También pueden hacerse listas con _checks_ o _radiobuttons_ usando **[ ]**.
[x] Elemento marcado
[ ] Elemento sin marcar

## Códigos de bloque

---

Puedo citar código usando los acentos graves **\`\`\`**.

```html
<table>
  <tr>
    <te></te>
  </tr>
</table>
```

```js
alert("Esto es una prueba");
```

## Líneas horizontales

Para hacer una línea separatoria, deberán usarse tres de los siguientes elementos: asteriscos \*, guiones - o guiones bajos \_.

## Tablas

---

| Primera columna       | Segunda columna |
| --------------------- | --------------- |
| Contenido de la celda | Más contenido   |

## Enfatizar negritas y cursiva

---

Por ejemplo **negrita**, _cursiva 1_ y _cursiva 2_.

## Links o enlaces

---

El texto del enlace se pone entre corchetes **[]** y el enlace entre **()**.
Por ejemplo: [Dillinger](http://www.dillinger.io) .

También puedo enlazar direztamente metiendo el enlace entre **\< \>**.

## Código de línea

---

Podemos resaltar una línea de código en la misma línea que estamos escribiendo si encierro el código entre comillas graves (**\`**) `<body> </body>`

## Imágenes

---

[![Icono html5](https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png)](https://es.wikipedia.org/wiki/HTML5)

## Omitir Markdown

---

Para que los caracteres especiales no se interpreten como parte del código, simplemente se les añadirá una barra invertida \*\*\*\* delante y los interpretará como texto.

## Símbolos matemáticos

---

Para que una fórmula se interprete como Latex, se debe meter entre un doble dólar **\$\$**.

- $$(a+b)^2 = a^2 + 2ab + b^2$$
- $$a^2 - b^2 = (a+b)(a-b)$$
- $$\sqrt{a^2-b^2}$$
- $$x=\frac{-b \pm \sqrt{b^2-4ac}}{2a}$$
- $$\left(\frac{\sqrt{x^3}}{\pi}\right)^2$$
