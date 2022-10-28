<Code language="javascript"> import React from 'react';

--- Existen dos formas de inicializar un Objeto, con la instancia de new Object(), o declarandolo
--- de forma intuitiva con corchetes

var miTelefono = new Object();
miTelefono.marca = "iPhone";
miTelefono.modelo = "XR";
miTelefono.color = "Red Edition";
console.log(miTelefono)

console.log("**** Podriamos haber hecho lo mismo de esta otra forma ****");
var miTelefono2 = {
    "marca": "iPhone",
    "modelo": "XR",
    "color": "Red Edition",
}

console.log(miTelefono2);
//Como ven al momento de imprimir (miTelefono2), este nos va a dar el mismo resultado
//NOTA: Las propiedades no asignadas de un objeto, son undefined (y no null)

//Podemos acceder o establecer a las propiedades de un objeto con la notacion de puntos: .
//En este caso le creamos una nueva propiedad, con la clave nuevo, y con el valor de true
miTelefono2.nuevo = true;
// console.log(miTelefono2);
var marcaDeltelefono = miTelefono2.marca;
// console.log('*****LA MARCA ES: *****:', marcaDeltelefono);

//Tambien podemos hacer lo mismo con la notacion de corchetes
miTelefono2["Capacidad"] = "64GB";
//Y Si vemos, ahora nuevamente, veremos una nueva propiedad en el objeto
// console.log(miTelefono2);

//Entonces resumiendo: Podemos acceder o establecer las propiedades de un objeto mediante (.) o usando 
//La notacion de corchetes
  
*/  

 </Code>