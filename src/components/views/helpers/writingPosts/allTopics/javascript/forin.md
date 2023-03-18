# **Uso del (For In) en JavaScript**

Instrucción que utilizamos generalmente para iterar sobre Objetos de javascript, lo que agiliza el procesamiento de información a la hora de que queremos acceder a determinadas claves y valores de estos mismos. Mira más abajo el ejemplo, donde hemos creado un array llamado users, que contiene un tipo de texto JSON, aqui podemos entonces ver como podriamos recorrer un tipo de texto formateado.

Es una instrucción que utilizamos generalmente para iterar sobre Objetos de javascript, lo que agiliza el prose a la hora de que queremos acceder a determinadas claves y valores de estos mismos. Mira más abajo el ejemplo, donde hemos creado un array llamado users, que contiene un tipo de texto JSON, aqui podemos entonces ver como podriamos recorrer un tipo de texto formateado.

    import React from 'react';
    const users = [
       {
        "name": "Andres",
        "active": true,
        "age": 23
            },
            {
        "name": "Felipe",
        "active": false,
        "age": 23
       }
    ]
    
    
    Sintax del for in: 
    for (const key in users) {
       //console.log(key, users[key].age);
       //console.log(users);
       console.log(key);
       console.log(users[key].name);
    }

    // Copia y pega en la consola de tu navegador el código de arriba y mira
    // el resultado
    var, let o const (key - Que sera el identificador)  

    in (objeto sobre el que va a iterar) :
    // Ejemplo : for (const id in users )
    // Con el for in, podemos recorrer objetos y sus propiedades, donde key es la
    // llave(valor) de un dato
    // y users, viene siendo todo el objeto, que estamos iterando
    *
    */

