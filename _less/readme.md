# README

## 1.1 Curso 1

## 1.2 Curso 2

### 1.2.4. Array().map

Crea un nuevo array con los resultados de la llamada a la función indicada
aplicados a cada uno de sus elementos.

Sintaxis básica

Ejemplos
Procesar un array de números: iterar sobre dicho array, aplicándoles la raíz cuadrada a cada uno de sus elementos,
produciendo un nuevo array a partir del inicial, usando el argumento x como cada uno de los elementos iterados.

```js
const numeros = [1, 4, 9];
const dobleDeEsosNumeros = numeros.map( function(x) {
   return x * 2;
});
// dobleDeEsosNumeros es ahora [2, 8, 18]
// numeros es aún [1, 4, 9]

let raizDeEsosNumeros = numeros.map( function(num) {
    return Math.sqrt(num);
});
// raizDeEsosNumeros es ahora [1, 2, 3]
// numeros es aún [1, 4, 9]
```

Sintaxis que trae el método map que permite acceder a los índices

```js
const nuevoArray = arr.map( function callback(
 valorActual, indice
) {
    // Elemento devuelto de nuevoArray 
}[, esteArgumento])
```

`esteArgumento` es opcional. Valor a usar como this al ejecutar callback.

map llama a la función callback provista una vez por elemento de un array, en orden,
y construye un nuevo array con los resultados.

callback se invoca sólo para los índices del array que tienen valores asignados;
no se invoca en los índices que han sido borrados o a los que no se ha asignado valor.

Si se indica un parámetro esteArgumento a un map, se usará como valor de this en la función callback.
En otro caso, se pasará undefined como su valor this.
El valor de this observable por el callback se determina de acuerdo a las reglas habituales
para determinar el valor this visto por una función.

map no modifica el array original en el que es llamado,
aunque callback, si es llamada, puede modificarlo.

El rango de elementos procesado por map es establecido antes de la primera invocación del callback.
Los elementos que sean agregados al array después de que
la llamada a map comience no serán visitados por el callback.
Si los elementos existentes del array son modificados o eliminados,
su valor pasado al callback será el valor en el momento que el map lo visita;
los elementos que son eliminados no son visitados.

Usando map de forma genérica
Este ejemplo muestra como usar map en String para obtener un arreglo de bytes en codifcación ASCII
representando el valor de los caracteres:

```js
var map = Array.prototype.map;
var valores = map.call('Hello World', function(char) { return char.charCodeAt(0); });
// valores ahora tiene [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

Usando map para dar un nuevo formato a los objetos de un array
El siguiente código toma un array de objetos y crea un nuevo array que contiene los nuevos objetos formateados.

```js
var kvArray = [
  {clave:1, valor:10},
  {clave:2, valor:20},
  {clave:3, valor: 30}
];

var reformattedArray = kvArray.map(function(obj){
   var rObj = {};
   rObj[obj.clave] = obj.valor;
   return rObj;
});

// reformattedArray es ahora [{1:10}, {2:20}, {3:30}],

// kvArray sigue siendo: [
//  {clave:1, valor:10},
//  {clave:2, valor:20},
//  {clave:3, valor: 30}
//]
```

### 1.2.5. Array().filter

Ejemplos
Filtrando todos los valores pequeños
El siguiente ejemplo usa filter() para crear un array filtrado que excluye todos los elementos con valores inferiores a 10.

```js
const ArrayDeValoresAFiltrar = [12, 5, 8, 130, 44];

function esSuficientementeGrande(elemento) {
  return elemento >= 10;
}
const ArrayDeValoresFiltrados = ArrayDeValoresAFiltrar.filter(
  esSuficientementeGrande
);

// filtrados es [12, 130, 44]
```

Copy to Clipboard
Filtrando entradas inválidas desde un JSON
El siguiente ejemplo emplea filter() para crear un json filtrado con todos lo elementos que tengan id numérico distinto de cero.

```js
var arr = [
  {id: 15},
  {},
  {id: -1},
  {id: 0},
  {id: null},
  {id: 3},
  {id: NaN},
  {id: 12.2},
  {id: 'undefined'}
];
var entradasInvalidas = 0;
/** @returns {boolean} Comprueba si el elemento tiene un atributo id,
 * y su valor correspondiente es un numero y no es el valor NaN */
function filtrarPorID(obj) {
  if ('id' in obj && typeof(obj.id)==='number' && !isNaN(obj.id)) {
    return true;
  } else {
    entradasInvalidas++;
    return false;
  }
}
var arrPorID = arr.filter(filtrarPorID);
console.log('Array Filtrado\n', arrPorID);
// [ {id:15}, {id:-1}, {id:0}, {id:3}, {id:12.2} ]
console.log('Número de Entradas Invalidas = ', entradasInvalidas);
// 4
```

Copy to Clipboard
Búsqueda en el arreglo
El siguiente ejemplo emplea filter() para filtrar el contendio de un arreglo en función de un criterio de búsqueda.

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
Copy to Clipboard
Implementación en ES2015
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Filtra la matríz en función de un criterio de búsqueda (query)
 */
const filterItems = query => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

Array.prototype.filter()
El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.

Sintaxis

```js
var newArray = arr.filter(
  callback(currentValue[, index[, array]])[, thisArg]
)
```

Parámetros
callback
Función que comprueba cada elemento del array para ver si cumple la condición (también llamada predicado).  Retorna true si el elemento la cumple o en caso contrario retornará false. Acepta tres parámetros:
currentValue
El elemento actual del array que está siendo procesado.
index Optional
El índice del elemento actual del array que está siendo procesado.
array Optional
El array sobre el que se ha llamado filter.
thisArg Optional
Opcional. Valor a utilizar como this cuando se ejecuta callback.
Valor devuelto
Un nuevo array con los elementos que cumplen la condición. Si ningún elemento cumple la condición, se devolverá un array vacío.

Descripción
filter() llama a la función callback  sobre cada elemento del array, y construye un nuevo array con todos los valores para los cuales  callback devuelve un valor verdadero. callback es invocada sólo para índices del array que tengan un valor asignado. No se invoca sobre índices que hayan sido borrados o a los que no se les haya asignado algún valor. Los elementos del array que no cumplan la condición callback  simplemente los salta, y no son incluidos en el nuevo array.

callback se invoca con tres argumentos:

El valor de cada elemento
El índice del elemento
El objeto Array que se está recorriendo
Si se proporciona un parámetro thisArg a filter(), este será pasado a callback cuando sea invocado, para usarlo como valor this.  De lo contrario, se pasará el valor undefined como valor this.  El valor this dentro del callback se determina conforme a las las normas habituales para determinar el this visto por una función.

filter() no hace mutar el array sobre el cual es llamado.

El rango de elementos procesados por filter() se establece antes de la primera invocación de  callback. Los elementos que se añadan al array después de que comience la llamada a filter() no serán visitados por callback. Si se modifica o elimina un elemento existente del array, cuando pase su valor a callback será el que tenga cuando filter() lo recorra; los elementos que son eliminados no son recorridos.

### 1.2.12. Promesas

```js
let miPrimeraPromise = new Promise( (resolve, reject) => {
  setTimeout(
    /**Llamamos a `resolve(...)` cuando lo que estabamos haciendo finaliza con éxito
     * , y a `reject(...)` cuando falla.
     * 
     * En este ejemplo, usamos `setTimeout(...)` para simular código asíncrono.
     * 
     * En la vida real, probablemente uses algo como XHR o una API HTML5. */
    function nombreQueLeQuierasPoner(){
      resolve("¡Éxito!");
    }, 1000 // milisegundos, o 1 segundo
  );
});

miPrimeraPromise.then((successMessage) => {
  // `succesMessage` es lo que sea que pasamos en la función `resolve(...)` de arriba.
  // No tiene por qué ser un string, pero en nuestro caso lo es.
  console.log("¡Sí! " + successMessage); // Devuelve "¡Sí! ¡Éxito!"
});
```

## 1.3 Tests de Evaluación

### 1.3.1 Preguntas Declaración de variables

1. ¿Cuál es la forma más extendida de nomenclatura de variables en JavaScript?
A) camelCase
B) lowercase
C) snake_case
Respuesta correcta: A

2. ¿Cuánto vale `a` al final de ejecutar este fragmento de código?

```js
let a = 1;
function changeA() {
  a = a + 1;
}
changeA();
a = a + 1;
```

A) Undefined. Error: `a` no puede referenciarse a sí mismo al cambiar de valor.
B) 1
C) 2
D) 3
Respuesta correcta: D.

3. ¿Cuánto vale `c` al final de ejecutar este fragmento de código?

```js
const c = 3;
c -= 1;
```

A) La cadena de texto "Uncaught TypeError: Assignment to constant variable."
B) -1
C) 1
D) 3
Respuesta correcta: D.

4. ¿Cuánto vale `d` al final de ejecutar este fragmento de código?

```js
let d = 7;
if(d) {
  d--;
}
```

A) 7
B) 6
C) -1
Respuesta correcta: B.

5. ¿Cuánto vale `e` al final de ejecutar este fragmento de código?

```js
const a;
a = " ";
e = typeof(a);
```

A) undefined
B) 'undefined'
C) 'void'
D) 'character'
E) 'string'
Respuesta correcta: B.

### 1.3.2 Operadores y estructuras de control

1. ¿Qué falta en el siguiente fragmento de código marcado con un [    ] para que se escriba por consola el valor de `f` cuando no vale 0 o 1?

```js
const f = 2;
switch(f) {
  case 0:
  case 1:
    console.log("El número es pequeño");
    break;
  [    ]:
    console.log(f);
    break;
}
```

A) `case 2`
B) `default`
C) `end case`
D) `otherwise`
E) A y B son correctas, aunque es preferible B.
F) A y D son correctas, aunque es preferible D.
Respuesta correcta: E.

2. ¿Qué significa el símbolo `%` al actuar como operador?
A) El valor es un porcentaje, y se divide entre 100.
B) Cociente de la división entre la variable numérica o número de la izquierda y de la derecha.
C) Resto de la división entre la variable numérica o número de la izquierda y de la derecha.
D) Ese símbolo no actúa como operador
Respuesta correcta: C.

3. ¿Cuánto vale `g` al finalizar esta expresión?

```js
const a = {b:1};
let g = 0;
if (a?.b??false) {
  g += 1;
}
```

A) 0, y se salta la condición.
B) 0, y el programa falla al evaluar la condición.
C) 1, porque se comprueba que existe `a` y `a.a`, por lo que la condición se evalúa como `true` y `g` suma 1 a su valor inicial.
Respuesta correcta: C.

4. ¿Cuál de estas es una "Arrow function"?
A) function a(){}
B) ()=>{}
C) const a = function(){return 0;}; const b = 1; a<=b;
D) [1,2,3].filter(k=>k%2) // lo que hay entre paréntesis
E) B y D son correctas

5. Seleccione la afirmación correcta
A) "&&" es el operador "O", y "||" es el operador "Y" en condicionales.
B) "&" es el operador "O", y "|" es el operador "Y" en condicionales.
C) "&&" es el operador "Y", y "||" es el operador "O" en condicionales.
D) "&" es el operador "Y", y "|" es el operador "O" en condicionales.
Respuesta correcta: C.

### 1.3.3 Funciones

1. ¿Cuál de las siguientes es una expresión de función invocada inmediatamente (IIFE)?
A) ()=>{}
B) [1,2,3].filter(k=>k%2)
C) (()=>{})()
D) function IIFE(){}
E) (function IIFE(){})()
F) A y D son correctas, aunque es preferible nombrear la función como en D.
G) C y E son correctas, aunque es preferible nombrear la función como en E.
Respuesta correcta: G.

2. ¿Cómo se puede llamar a la función `f2`?

```js
const ff = { f1: (){}, f2: (){}};
```

A) ff.f2();
B) ff[1].f2();
C) ff[2].f2();
D) (ff.pop())();
Respuesta correcta: A.

3. ¿Cómo se escribe un fragmento de JSDoc?
A) Escribiendo `/** Loquesea */` justo antes de las funciones a documentar
B) Escribiendo comentarios mediante `//` justo antes de las funciones a documentar
C) Escribiendo comentarios mediante `/**/` justo antes de las funciones a documentar
D) Escribiendo comentarios mediante `//` al final de cualquier línea dentro de la función
E) Escribiendo comentarios mediante `/**/` en cualquier parte dentro de la función
Respuesta correcta: A.

4. ¿Cómo se importa una función en Node.JS?
A) require(“./miScriptConLaFuncion”)
B) require(“../carpetaHermana/miScriptConLaFuncion”)
C) import funcion from “./miScriptConLaFuncion”
D) import funcion from “../carpetaHermana/miScriptConLaFuncion”
E) Todas las anteriores son correctas
Respuesta correcta: E

5. ¿Cómo se importa un script en HTML?
A) <link rel="stylesheet" href="rutaRelativa/nombreDelScriptDeEstilos.css"> para scripts de estilos y <script src="rutaRelativa/nombreDelScriptEnJs.js"></script> para scripts de javascript
B) <script src="rutaRelativa/nombreDelScript.extension"></script> tanto para scripts de estilos como de javascript
C) <script>import funcion from "./miScriptConLaFuncion";</script>
Respuesta correcta: A

### 1.3.4 Variables de tipos básicos

1. ¿Qué devuelve la siguiente expresión?

```js
"asdfghjklñ3edc5rdx".lastIndexOf("d");
```

A) "asdfghjklñ3edc5rd"
B) "dx"
C) "x"
D) 16
E) 17
F) -2
G) -1
Respuesta correcta: D

2. ¿Qué devuelve la siguiente expresión?

```js
"asdfgh".slice(1,-1);
```

A) "sdfg"
B) "a"
C) "s"
Respuesta correcta: A

3. ¿Qué devuelve la siguiente expresión?

```js
typeof("a".charCodeAt(1))
```

A) 'number'
B) 'string'
C) 'undefined'
D) Error
Respuesta correcta: A

4. ¿Qué devuelve la siguiente expresión?

```js
(64).toString(16);
```

A) '64'
B) '40'
C) '64              '
D) Error
Respuesta correcta: B

5. ¿Cómo puedes sacar el valor numérico de un campo HTML?
A) Accediendo a su contenido mediante un manejador DOM y haciéndole un parseInt(contenido) o parseFloat(contenido) del resultado
B) Accediendo a su propiedad value mediante manejadores DOM si así lo permite
C) A y B son correctas
D) No se puede
Respuesta correcta: C

### 1.3.5 Gramática general

1. ¿Cuál es una recomendación de gamática general?
A) Meter toda la complejidad posible en funciones
B) Reducir la complejidad de las funciones
Respuesta correcta: B

2. ¿Cuál es una recomendación de gamática general?
A) No repetirse, reutilizar funciones para no duplicar código
B) Tener funciones idénticas aisladas entre si en diferentes archivos del proyecto
Respuesta correcta: A

3. ¿Cuál es una recomendación de gamática general?
A) La consistencia en el código es opcional, no afectará a su mantenimiento
B) Escribir con consistencia desde el principio, siempre que se pueda
Respuesta correcta: B

4. ¿Cuál es una recomendación de gamática general?
A) Cuanto más coemntado esté un código, mejor
B) Es mejor utilizar JSDoc para documentar funciones, y reducir comentarios dentro de fragmentos de código que puedan traspapelarse
Respuesta correcta: B

5. ¿Cuál es una recomendación de gamática general?
A) Tener un plan de pruebas par anticipar problemas y facilitar hacer tests de regresión
B) Se ha de evitar realizar planes de prueba en código en producción porque es un gasto de tiempo
Respuesta correcta: A

### 1.3.6 Preguntas evaluación Curso I

1. ¿Cuánto vale `b` al final de ejecutar este fragmento de código?

```js
let b = 1;
function changeB() {
  b = b + 1;
}
b = b + 1;
```

A) Undefined. Error: `b` no puede referenciarse a sí mismo al cambiar de valor.
B) 1
C) 2
D) 3
Respuesta correcta: C. No se llama a la función, así que no se ejecuta para que valga 3.

2. ¿Cuánto vale `d` al final de ejecutar este fragmento de código?

```js
let d = 6;
if(d) {
  d-=1;
}
```

A) 6
B) 5
C) -1
Respuesta correcta: B.

3. ¿Qué código da algún error? (Asumiendo que no se han declarado previamente a, b o c)
A) const a={b:1,c:2}; const b = a["b"]; const c = a["c"];
B) const a={b:1,c:2}; const b = a.b; const c = a.c;
C) const a={"a b":1,"a c":2}; const b = a["a b"]; const c = a["a c"];
D) const a={"a b":1,"a c":2}; const b = a."a b"; const c = a."a c";
E) A y C
F) B y D
Respuesta correcta: D. Uncaught SyntaxError: Unexpected string

4. ¿Cuántos signos de igualdad (=) se recomienda escribir en expresiones condicionales para evaluar si un valro es idéntico a otro en valor y tipo?
A) 1
B) 1 y un signo ">" o "<"
C) 2
D) 2 y un signo ">" o "<"
E) 3
F) Ninguno, no se usa ese símbolo
Respuesta correcta: E.

5. ¿Cuánto vale `h` al finalizar esta expresión?

```js
const a = 0;
a += 1;
const h = !!a;
```

A) true
B) false
C) undefined, y falla la ejecución
Respuesta correcta: A.

6. ¿Cuánto vale `i` al finalizar esta expresión?

```js
const a = 0;
a += 1;
const i = !a;
```

A) true
B) false
C) undefined, y falla la ejecución
Respuesta correcta: B.

7. ¿Cómo se puede llamar a la función `f1`?

```js
const ff = { fn:{ f1:(){}, f2:(){} } };
```

A) ff.fn.f2();
B) ff[0][1].f2();
C) ff[1][2].f2();
D) (ff.fn.pop())();
Respuesta correcta: A.

8. ¿Cómo se escribe un fragmento de JSDoc?
A) Escribiendo comentarios mediante `// Loquesea` justo antes de las funciones a documentar
B) Escribiendo comentarios mediante `/* Loquesea */` justo antes de las funciones a documentar
C) Escribiendo `/** Loquesea */` justo antes de las funciones a documentar
D) Escribiendo comentarios mediante `// Loquesea` al final de cualquier línea dentro de la función
E) Escribiendo comentarios mediante `/* Loquesea* /` en cualquier parte dentro de la función
Respuesta correcta: C.

9. ¿Cómo se importa un script en HTML?
A) <link rel="stylesheet" href="rutaRelativa/nombreDelScriptDeEstilos.css"> para scripts de estilos y <script src="rutaRelativa/nombreDelScriptEnJs.js"></script> para scripts de javascript
B) <script src="rutaRelativa/nombreDelScript.extension"></script> tanto para scripts de estilos como de javascript
C) <script type="js">import funcion from "./miScriptConLaFuncion";</script>
Respuesta correcta: A

10. ¿Cómo se delimitan cadenas de texto en JavaScript?
A) Con ""
B) Con ''
C) Con "" o ''
D) Con "", '' o ``
E) Con "", '', `` o ´´
Respuesta correcta: D

11. ¿Cuál es el método para calcular la longitud de una cadena de texto en caractere o de un array?
A) len(variable)
B) variable.length
C) variable.length()
D) variable.len()
Respuesta correcta: B

12. ¿Qué devuelve la siguiente expresión?

```js
"asdfgh".indexOf("d");
```

A) "dfgh"
B) "fgh"
C) 2
D) 3
E) true
Respuesta correcta: C

13. ¿Qué devuelve la siguiente expresión?

```js
"asdfgh".slice(1,3);
```

A) "sdf"
B) "sd"
C) "agh"
D) "afgh"
E) true
Respuesta correcta: B

14. ¿Qué devuelve la siguiente expresión?

```js
"asdfgha".replace("a","s");
```

A) "ssdfghas"
B) "aadfghas"
C) "ssdfghss"
D) "aadfghaa"
E) true
Respuesta correcta: A

15. ¿Qué devuelve la siguiente expresión?

```js
"a".concat("b") === ("a"+"b")
```

A) true
B) false
Respuesta correcta: A

16. ¿Qué devuelve la siguiente expresión?

```js
(64).toString();
```

A) '64'
B) '@'
C) Error
Respuesta correcta: A

17. ¿Qué devuelve la siguiente expresión?

```js
"sadfg".split("")
```

A) ['sadfg']
B) [ 's', 'a', 'd', 'f', 'g' ]
C) Error
Respuesta correcta: B

18. ¿Qué devuelve la siguiente expresión?

```js
a="abcdefabghijk"
a.replace(/(.+)(.+)\1/g,"$1$2")
```

A) "abcdefghijk"
B) "abcdef"
C) Error
Respuesta correcta: A

19. ¿Qué devuelve la siguiente expresión?

```js
a="aaaaxxxxaaaa"
a.replace(/x{4}/g,"bbbb")
```

A) "aaaabbbbaaaa"
B) "aaaaxxxbaaaa"
C) "aaaaxxxbbbba"
D) Error
Respuesta correcta: A

20. ¿Qué devuelve la siguiente expresión?

```js
Math.round(0.5)
```

A) 0
B) 1
C) Error
Respuesta correcta: B

21. ¿Cómo se genera un número aleatorio del 0 al 9?
A) Math.floor(Math.random()*9);
B) Math.floor(Math.random())*9;
C) (Math.random()*9).toFixed(0);
D) Math.floor((1+Math.random())**9);
E) A y B son correctas
F) A y C son correctas
Respuesta correcta: A. C devuelve el valor quje queremos, pero convertido a cadena, no es número.

22. ¿Cómo puedes sacar la fecha actual en formato "yyyy-MM-ddTHH:mm:ss.SSSSZ"?
A) new Date()
B) (variableConFechaActual).getDate()
B) (variableConFechaActual).getTime()
Respuesta correcta: A

23. Cuál de estos NO es un tipo predeterminado en JavaScript?
A) Boolean
B) Character
C) String
Respuesta: B

24. Cuál de estos es un tipo predeterminado en JavaScript?
A) Integer
B) Numeric
C) Number
Respuesta: C

25. Cuál de estos es un método predeterminado en JavaScript?
A) ParseByte()
B) ParseShort()
C) ParseInt()
Respuesta: B

26. Cuál de estos NO es un método predeterminado en JavaScript?
A) ParseInt()
B) ParseFloat()
C) ParseString()
Respuesta: C

27. Cuál de estos métodos convierte a una cadena de texto literal?
A) numberVar.toString(16)
B) numberVar.toString(8)
C) numberVar.toString(2)
D) numberVar.toString()
Respuesta: D

28. Cuál de estos métodos convierte un número a binario (ej: '100010010')?
A) !!numberVar
B) numberVar.toString(2)
C) numberVar.toBinary()
Respuesta: B

29. Cuál de estos es un tipo predeterminado en JavaScript?
A) Long
B) Double
C) Char
D) Object
Respuesta: D

30. ¿Cuál de estos nombres es un nombre de función no válido?
A) 2char()
B) toChar()
C) getItems()
Respuesta: A

31. ¿Cuál de estos nombres es un nombre de función deseable?
A) _setSettings()
B) setSettings()
C) SET_SETTINGS()
Respuesta: B

32. ¿Cuál de estos nombres es un nombre de función no válido?
A) ñamÑam()
B) comer()
C) eat()
Respuesta: A

33. ¿Cuál de estas opciones es la mejor para realizar la operación indicada?
A) const currentTime = (new Date()).getTime(); currentTime+=1;
B) let currentTime = (new Date()).getTime(); currentTime+=1;
C) var currentTime = (new Date()).getTime(); currentTime+=1;
Respuesta: B

34. ¿Cuál de estas expresiones regulares captura el grupo ""?
A)
B)
C)
Respuesta: A

35. ¿Cuál de estas expresiones regulares encuentra estrictamente el grupo "sdf" de la cadena de texto `const t = "asdfg"`?
A) ev = /sdf/g; result = ev.test(t);
B) ev = /[sdf]/g; result = ev.test(t);
C) ev = /[sdf]{3}/g; result = ev.test(t);
Respuesta: A

36. ¿Cuál de estas expresiones regulares encuentra exactamente el grupo "ss" en cualquier cadena de texto? Pongamos como ejemplo la cadena de texto `const t = "assdfg"`?
A) ev = /a(.{2})dfg/g; result = ev.test(t);
B) ev = /s{2,}/g; result = ev.test(t);
C) ev = /s{,2}/g; result = ev.test(t);
Respuesta: B

37. ¿Cuál de estas variables es de tipo function?
A) a = ()=>{}
B) a = {function(){}}
C) a = (()=>{})()
Respuesta: A

38. ¿Cuál de estas variables es de tipo Boolean?
A) 2>1
B) 1<2
C) 0
D) A y B
Respuesta: D

39. ¿Cuál de estas expresiones es de tipo fecha?
A) "2021-10-01"
B) Date("2021-10-01")
C) DateTime("2021-10-01 00:00")
Respuesta: B

40. ¿Cuál de estas expresiones no es de tipo boolean?
A) !!0
B) !"a"
C) 1
Respuesta: C

### 1.3.7 Variables tipo Array

### 1.3.8 Variables tipo JSON

### 1.3.9 Funciones asíncronas

### 1.3.10 Diferencias entre ejecución cliente y servidor

### 1.3.11 Testing

### 1.3.12 Preguntas evaluación Curso II

18/120
