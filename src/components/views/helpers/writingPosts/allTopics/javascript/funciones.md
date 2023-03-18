# ***Funciones en JavaScript***  

Las funciones, ¿Que podríamos entender de ellas ?, ¡piensa!, ¿Le distes una buena respuesta ah? :) Genial! pues ahora te cuento lo que entiendo de ellas, es una forma en que podemos envolver nuestro código, para que sea reutilizable, tener nuestro código mas limpio, para agilizar nuestras tareas, para llamar una parte del código cuando lo deseemos, y asi hacer uso de los Condicionales **(Yo buscaria en google: Condicionales en JS, MDN),** de una mejor forma y teniendo un control sobre las variables, con ello entonces al final logramos una simplicidad de las cosas en nuestro software con una manera muy sencilla y  grata de trabajar. 
Ahora pues, Existen varias formas de crear funciones, veámoslas abajo.


    // Veamos algunos conceptos de las funciones.
       const suma = function (a, b) {
       const suma = a+b;
       return console.log(suma);
    }
      suma(2, 2); // Llamamos la función suma y __le pasamos los argumentos.__

Esta primera forma, es cuando declaramos una __variable, o const o let,__ lo que tu desees, 
y luego la igualamos a una funcion, con ello logramos entonces que la variable que hemos declarado,
tenga el bloque de código(instrucciones) que queremos ejecutar, no olvides siempre llamar a una función,
con su mismo nombre luego de declararla y además __pasarle parámetros__, solo si esta los necesita, los *parámetros* son aquellos que definimos al momento de que creamos la función, como lo mencionamos arriba, esto nos sirve para almacenar valores y asi interactuar con ellos dentro de la función.
Principalmente los programadores vieron el uso y el beneficio de crear funciones porque trabajamos de una mejor manera y además tenemos un control más riguroso acerca de las variables en cuestión, dado que las variables que se ejecutan dentro de una función están definidas para ser usadas dentro de dicho bloque de código, siendo pues el bloque de código todo lo que esta dentro de la función.

***Hay un caso en que se ejecutan de inmediato y es cuando son funciones auto-ejecutables.***


    //*Veamos el ejemplo de una función autoejecutable  
    - Esta seria otra forma de declarar una función*

        (function(){
        return console.log('Hello World!')
        })();

    /* Como podemos entonces ver se llama al instante, analiza la forma en 
    que hemos creado dicha función
    podemos notar entonces que __empieza con ()__, y 
    dentro de ella está la declaración de la función *function()*
    en esos nuevos corchetes luego de function, podemos pasarle parametros, 
    para luego mandarle esos argumentos,
    luego puedes notar que abrimos entonces {} el bloque de código que es 
    donde ponemos nuestra magia(las instrucciones)
    que queremos hacer con esa función, como podria ser llamar a otra función, 
    o pedir datos de una API.

    -- Dicha función retornria en la consola
    Hello World!

    bueno sigamos! Podemos entonces ver que cuando se termina la } línea que 
    cierra el bloque de código,
    cerramos la llamada a la función autoejecutable y luego esta es 
    ejecutada inmediatamente ().*/

# **Otro forma de declarar funciones:** 

    function myName(name) {
       return console.log('Hello ' + name + '!');
    }
    
    myName('Andres');
    /* Dicha forma es muy simple, vemos, que inicialmente llamamos 
    el método function, y luego indicamos un nombre
    que le procede (), el centro(O donde pasamos los parámetros), 
    luego abrimos {} para declarar la lógica y además
    le pasamos el return, que es lo que hace posible una salida de dicho bloque 
    de código, 
    en las anteriores también esta este return, lo que hace es que retorna algo! 
    Si este no estuviera y existiera código
    lo ejecutaría, pero al momento de que la función finalice, retornaría undefined. */


    // La otra forma es Arrow Function
    
    const arrow = () => {
       console.log('Hello ARROW FUNCTION')
    };
    
    arrow();
    /* Como puedes ver esta no recibe argumentos(), ya que no le hemos 
    pasado parametros, 
    por ende, al momento que llamamos la función, no se le pasan argumentos,
     e inmediatamente
    ejecuta el Hello ARROW FUNCTION
    */   


