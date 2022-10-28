<Code language="javascript"> import React from 'react';

// Veamos algunos conceptos de las funciones.
const suma = function (a, b) {
    const suma = a+b;
    return console.log(suma);
}
suma(2, 2);

/* Esta primera forma, es cuando declaramos una variable, o const o let, lo que tu desees, 
y luego la igualamos a una funcion, con ello logramos entonces que la variable que hemos declarado,
tenga el bloque de código(instrucciones) que queremos ejecutar, no olvides siempre llamar a una función,
con su mismo nombre luego de declararla y además pasarle párametros, solo si esta los necesita. 
Hay un caso en que se ejecutan de inmediato y es cuando son funciones auto-ejecutables.
*/

// Veamos el ejemplo de una función autoEjecutable  - Esta seria otra forma de declarar una función
(function(){
    return console.log('Hello World!')
})();

/* Como podemos entonces ver se llama al instantee, analiza la forma en que hemos creado dicha función
podemos notar entonces que empieza con (), y dentro de ella está la declaración de la función function()
en esos nuevos corchetes luego de function, podemos pasarle parametros, para luego mandarle esos argumentos,
luego puedes notar que abrimos entonces {} el bloque de código que es donde ponemos nuestra magia(las instrucciones)
que queremos hacer con esa funcion, como podria ser llamar a otra funcion, o pedir datos de una API.
bueno sigamos! Podemos entonces ver que cuando se termina la } linea que cierra el bloque de codigo,
cerramos la llamada a la función autoEjecutable y luego esta es ejecutada inmediatamente ().*/

--- Otro forma de declarar funciones:

function myName(name) {
    return console.log('Hello ' + name + '!');
}

myName('Andres');
/* Esta forma es muy simple, vemos, que inicialmente llamamos el metodo function, y luego indicamos un nombre
que le procede (), el centro(O donde pasamos los parametros), luego abrimos {} para declarar la lógica y además
le pasamos el return, que es lo que hace posible una salida de dicho bloque de código, 
en las anteriores tambien esta este return, lo que hace es que retorna algo! Si este no estuviera y existiera código
lo ejecutaria, pero al momento de que la función finalice, retornaria undefined. */


// La otra forma es Arrow Function

const arrow = () => {
    console.log('Hello ARROW FUNCTION')
};

arrow();
/* Como puedes ver esta no recibe argumentos(), ya que no le hemos pasado parametros, 
por ende, al momento que llamamos la función, no se le pasan argumentos, e inmediatamente
ejecuta el Hello ARROW FUNCTION
*/  

 </Code>



