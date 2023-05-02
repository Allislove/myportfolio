Para entender este formato de texto, se debe de tener presente que inicialmente consta de que utilicemos {} las llaves, esto es lo que engloba todo el contenido de un JSON, puedes también tener además un JSON dentro de otro y asi sucesivamente. Podemos evidenciar entonces que para que un dato sea de tipo JSON, este debe de constar de una llave y un valor ({"key": value}), donde el valor(value) puede ser de cualquier tipo, ¿Como que de cualquier tipo Andrés? Así es, este puede ser una función, un numero, una cadena de texto, etc. Pero para que se cumpla este formato, se debe de tener siempre clara la regla, y es que siempre la llave, debe de constar de (comillas dobles "", o simples ''), de lo contrario ya no seria un dato JSON, sino más bien un Objeto JavaScript simplemente, entonces para que comprendamos mejor este concepto vuelve a leer el código que esta abajo. Por cierto, hemos metido todo esto dentro de un array, para que podamos evidenciar, las múltiples formas en las que también podemos utilizar un array.

    const names = [
       {
        "Users": {
            "name": "Andres",
            "lastName": "Romaña",
            "age": 23,
            "estatura": 178,
            "tez": "Negra"
        },
            "Familiares": ["Felipa", "Tatiana", "Silvio", "Chene"]
       },
       {
        "ComidasFavoritas": [ "Pescado", "Pollo", "Pizza", "Hamburguesa", "Perro" ]
        },
    ]
    
    console.log(names[1]);
    console.log(names[2].ComidasFavoritas);
    
    names.forEach((element) => {
       console.log(element);
    });


