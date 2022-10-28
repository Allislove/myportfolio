<pre>
<Code language="javascript"> import React from 'react';

const animals = ["perro", "gato", "dinosaurio", "aguila", "leon"];
console.log(animales);
// Cuando se ejecuta la linea 2, esto mostrara un mensaje en nuestra consola del navegador asi:

// [ 'perro', 'gato'. 'dinosaurio', 'aguila', 'leon' ]
// Simplemente esta leyendo lo que le estamos diciendo con el metodo console.log(), de JavaScript.

animales.push("OSO");  // Las próximas lineas que veas asi, es donde se ejecuta cada metodo internamente.
console.log(animales);
// Luego cuando el navegador ejecuta la linea anterior, el array(animals), ahora se vera de esta forma

// [ 'perro', 'gato'. 'dinosaurio', 'aguila', 'leon', 'OSO' ]
/* Asi es, como podemos ver, agrega un nuevo elemento a la lista, y lo agrega al final de esta,
entonces podemos culminar que este metodo se utiliza para agregar valores al final de un array */

animales.pop(); 
console.log(animales);
// Cuando el navegador ejecuta la linea anterior, el arreglo(la lista), tendra una nueva forma.
// [ 'perro', 'gato', 'dinosaurio', 'aguila', 'leon' ]
/* Podemos entonces ver, que el Array(animals) ahora ha vuelto a tener sus valores iniciales, 
asi es, es porque este método elimina el ultimo elemento de la lista*/

animales.shift();
console.log(animales);
// Miremos ahora otro método, shift().
/* Cuando el navegador ejecuta la linea del console.log(animals), este elimina el primer elemento del 
array en este caso es el de la posición(indice)0, 'perro', por ende el arreglo, quedara de la siguiente forma*/
// [ 'gato', 'dinosaurio', 'aguila', 'leon' ]

animales.unshift("PANDA");
console.log(animales);
/* Y por ultimo tenemos el metodo unshift(), que hace lo contrario al médoto push(), este agrega elementos
al inicio del array, es decir los posiciona en el indice 0*/  

 </Code>
 </pre>