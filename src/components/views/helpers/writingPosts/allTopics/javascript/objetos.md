Casi todo en JavaScript es un objeto, por ende quiero mostrarte estas dos formas de crear un Objeto en JavaScript, y asi tener una mejor visión de como estan formado los demás, como las Function(), los Array(), Boolean(), etc. Además te muestro algo básico en la forma en que se acceden estos objetos.

Existen dos formas de inicializar un Objeto, con la instancia de 

    new Object(), o declarandolo
    
    // de forma intuitiva con corchetes

    var miTelefono = new Object();
    miTelefono.marca = "iPhone";
    miTelefono.modelo = "XR";
    miTelefono.color = "Red Edition";
    console.log(miTelefono)

    console.log(" Podriamos haber hecho lo mismo de esta otra forma ");
    var miTelefono2 = {
       "marca": "iPhone",
       "modelo": "XR",
       "color": "Red Edition",
    }

    console.log(miTelefono2);
    //Como ven al momento de imprimir (miTelefono2), este nos 
    va a dar el mismo resultado
    //NOTA: Las propiedades no asignadas de un objeto, son undefined (y no null)

Podemos acceder o establecer a las propiedades de un objeto con la notacion de puntos: .__
En este caso le hemos creado una nueva propiedad__, con la clave nuevo, y con el valor de true

    miTelefono2.nuevo = true;
    // console.log(miTelefono2);
    var marcaDeltelefono = miTelefono2.marca;
    // console.log('*LA MARCA ES: *:', marcaDeltelefono);
    
    //Tambien podemos hacer lo mismo con la notacion de corchetes
    miTelefono2["Capacidad"] = "64GB";
    //Y Si vemos, ahora nuevamente, veremos una nueva propiedad en el objeto
    // console.log(miTelefono2);

En resumen: Podemos __acceder o establecer las propiedades de un objeto mediante (.) o usando 
//La notacion de corchetes []__
