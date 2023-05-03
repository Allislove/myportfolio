Es un objeto de tipo lista de alto nivel, que queremos decir con tipo
lista? Pues, en este objeto podemos almacenar cualquier candidad de
valores, los que deseemos, y necesitemos para su uso en el momento indicado .:.
*__Un arreglo en JavaScript puede contener cualquier tipo de dato válido de JavaScript, incluyendo:__*   

> 1. Números: enteros y decimales  
> 2. Cadenas de texto: "Esto es una cadena de texto";
> 3. Booleanos: true y false  
> 4. Objetos: objetos literales, instancias de clases, funciones, etc.  
> 5. Arreglos: se pueden anidar arreglos dentro de otros arreglos [[hello]]  
> 6. Undefined: una variable que no ha sido asignada un valor  
> 7. Null: un valor nulo intencionalmente asignado a una variable  
> 8. Symbol: un tipo de dato introducido en ECMAScript 6 para crear identificadores únicos.  

**Es importante tener en cuenta que un arreglo en JavaScript no tiene que contener solo un tipo de dato, es decir, puede contener una mezcla de los tipos de datos mencionados anteriormente.**
y con ello entonces conseguimos que se convierta en una lista, este método consta de multiples metodos, para su propia alimentación y que nos seran muy util, en el día a dia como Desarrolladores Web, existen muchos como .push(), .unshift(), .pop(), y muchos más
Abajo en el código te dejare en cada linea la explicación de cada uno de
ellos, y al final podras sumergirte de una manera más amena en este
maravilloso mundo. No olvides consultar la URL, que siempre les dejo
 alfinal.   

---

    const animals = ["perro", "gato", "dinosaurio", "aguila", "leon"];
    console.log(animales); // Vemos lo que contiene la constate animals
    
    /* Cuando se ejecuta la linea 2, esto mostrara un mensaje en nuestra 
    consola del navegador como la linea siguiente :*/
    [ 'perro', 'gato'. 'dinosaurio', 'aguila', 'leon' ]

    /* Simplemente leé la variable animals 
    con el metodo console.log() de JavaScript. */

    // Llamamos la const animals y le mandamos 
    // un valor a la ultima posición
    animals.push("OSO"); 

    Mostramos el resultado en la consola del navegador nuevamente.
    console.log(animals); 
    // Mostramos el array de animals en la consola y nos trae:

    // [ 'perro', 'gato'. 'dinosaurio', 'aguila', 'leon', 'OSO' ]

    // Veremos más acerca de los métodos implementados 
    para los arrays en otra guia.  

    // entonces ahora sabemos que este metodo se utiliza 
    para agregar valores al final de un array   

*Veamos ahora el uso del **Método pop()***   

    animales.pop(); 
    console.log(animales);
    // Cuando el navegador ejecuta la linea anterior, 
    el arreglo(la lista), tendra una nueva forma.
    // [ 'perro', 'gato', 'dinosaurio', 'aguila', 'leon' ]
    /* Podemos entonces ver, que el Array(animals) ahora ha vuelto 
    a tener sus valores iniciales, 
    asi es, es porque este método elimina el ultimo elemento de la lista*/    

*Veamos ahora el uso del **Método shift()***   

Este elimina el primer elemento del array en este caso es el de la posición 0 = (cero) del array, 'perro',   

    animales.shift();
    console.log(animales);
    /* Cuando el navegador ejecuta la linea del console.log(animals), 
    este nos mostrara ahora el mismo array pero distinto,
    eliminando el elemento 0 = 'perro' del array
    el resultado seria el siguiente: */  

    [ 'gato', 'dinosaurio', 'aguila', 'leon' ]





*Veamos ahora el uso del **Método unshift()***:  
Y por ultimo tenemos el metodo unshift(), 
que hace lo contrario al médoto push(), 
este agrega elementos al inicio del array, 
es decir los posiciona en el indice 0 (cero)  


    animales.unshift("PANDA");
    console.log(animales);