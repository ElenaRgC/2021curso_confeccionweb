# La ecuación de una recta
Podemos representar una recta de múltiples maneras:
* Mediante dos de sus puntos.
* Con una ecuación vectorial.
* Con un punto y un vector.
* Con las ecuaciones paramétricas.
* Con una ecuación contínua.
* Con una ecuación punto pendiente.
* Con la ecuación general de la recta.
* Con la ecuación explícita de la recta.
* Con la ecuación canónica de la recta.
## Dos puntos de una recta
***
Cuando definimos un único punto en el plano (o en el espacio), por él pueden pasar infinitas rectas. Sin embargo, definiendo **dos puntos** en el plano (o en el espacio), únicamente existirá una recta que pase por esos dos puntos. 

Así, una forma de representar una recta podría ser:

$$P_{1}=(4,3), P_{2}=(12,18)$$
## Un punto y un vector
***
[![Un punto y un vector](https://www.superprof.es/apuntes/wp-content/uploads/2019/07/ecuacion-de-la-recta-2.gif)](https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta.html)
>Definimos una recta $$r$$ como el conjunto de los puntos del plano, alineados con un punto $$P$$ y con una dirección dada $$\vec{v}$$.


Conocidos dos puntos de una recta, podemos obtener su **vector director**, de forma que podríamos definir la recta anterior mediante su vector director y uno de los puntos conocidos.  

El **vector director** se obtiene a través de la diferencia entre **punto final** ($$P_{2}$$) y el **punto origen** ($$P_{1}$$). 

Así, nuestro **vector director** sería:
$$\overrightarrow{v}=(x_{2}-x_{1},y_{2}-y_{1})=(12-4,18-3)=(8,15)$$

$$\overrightarrow{v}=(8,15)$$  

Y nuestra recta quedaría definida por:

$$P_{1}=(4,3), \overrightarrow{v}=(8,15)$$ 
## Ecuación vectorial
***
> El vector director de una recta es un vector paralelo a la misma. En este sentido, una forma de calcular el vector director es conociendo dos puntos que pertenezcan a la recta.

Conocido el **vector director** de una recta y uno de sus puntos, se puede obtener la **ecuación vectorial** de una recta fácilmente sustituyendo en la siguiente igualdad:

$$(x,y)=(x_{1},y_{1})+k·(v_{1},v_{2})$$

Donde $$(x_{1},y_{1})$$ son las coordenadas del **punto origen** y $$(v_{1},v_{2})$$ son las direcciones del **vector director**.

Por lo que ésta sería la **ecuación vectorial** de nuestra recta: 

$$(x,y)=(4,3)+k·(8,15)$$
## Ecuaciones paramétricas
***
La **ecuaciones paramétricas** se obtienen realizando la igualdad de las coordenadas $$x$$ e $$y$$ de nuestra recta en la **ecuación vectorial** con la dirección del **vector director**. Si trabajamos en el plano, igualaríamos también las coordenadas $$z$$.

$$\left.
\begin{array}{rcl}
     x = x_{1}+k·v_{1}
  \\ y = y_{1}+k·v_{2}
\end{array}
\right\}$$

Por lo que las **ecuaciones paramétricas** de nuestra recta serían las siguientes:

$$\left.
\begin{array}{rcl}
     x = 4+8k
  \\ y = 3+15k
\end{array}
\right\}$$

## Ecuación contínua
***
La **ecuación contínua** de una recta se obtiene igualando el parámetro $$k$$ de las **ecuaciones paramétricas**.

Por ejemplo, para nuestra recta:

$$\left.
\begin{array}{rcl}
     k=\dfrac{x-4}{8}
  \\ k=\dfrac{y-3}{15}
\end{array}
\right\} \dfrac{x-4}{8}=\dfrac{y-3}{15}$$

### Ejercicio
***
Antes de aprender a representar nuestra recta de otras maneras, vamos a practicar lo que hemos aprendido con un ejercicio:

1. Obten el **vector director**, la **ecuación vectorial**, las **ecuaciones paramétricas** y la **ecuación contínua** de los siguientes pares de puntos.
2. Represéntalos con Látex.

| $$x_{1}$$ | $$y_{1}$$| $$x_{2}$$ | $$y_{2}$$ |
|---|---|---|---|
| 0 | 4 |-2 | 2 |
| 3 | -1| 4 | 4 |
| -2| 0 | -1| 6 |
| 4 | 0 | 7 | -3|

*Nota: puedes aprovechar estos ejemplos para representar tus ecuaciones.*

$$P_{1}=(4,3), \overrightarrow{v}=(v_{1},v_{2})$$ 
```
P_{1}=(x_{1},y_{1}), \overrightarrow{v}=(v_{1},v_{2})
```

$$\left.
\begin{array}{rcl}
     x = x_{1}+k·v_{1}
  \\ y = y_{1}+k·v_{2}
\end{array}
\right\}$$

```
\left.
\begin{array}{rcl}
     x = x_{1}+k·v_{1}
  \\ y = y_{1}+k·v_{2}
\end{array}
\right\}
```
## Bibliografía
***
[Brainly](https://brainly.lat/tarea/10220667)
[Superprof](https://www.superprof.es/apuntes/escolar/matematicas/analitica/recta/ecuacion-de-la-recta.html)
