El dia de hoy vamos a hablar de los Hooks en React, y además veremos ejemplos cortos y concisos de cada uno de ellos.  


***Los Hooks son una característica de React que nos permite usar el estado y otros características de React sin tener que escribir una clase. En lugar de eso, podemos usar funciones.*** A continuación, te presento una guía sobre los Hooks de React:

# **1. useState**   

**El Hook useState nos permite agregar estado a un componente funcional.** La función useState toma un valor inicial como argumento y retorna un array con dos elementos: el estado actual y una función que nos permite actualizar ese estado.

```
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
En este ejemplo, ***count*** es el estado actual y ***setCount*** es la función que nos permite actualizar ese estado.

# 2. **useEffect**   

***El Hook useEffect nos permite realizar efectos secundarios en un componente funcional.*** Un efecto secundario es cualquier cosa que no esté relacionada con el renderizado del componente, como por ejemplo hacer una llamada a una API o actualizar el título de la página.

```
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
``` 
En este ejemplo, ***useEffect*** toma una función que se ejecutará después del primer renderizado y después de cada actualización. En este caso, actualizamos el título de la página con la cantidad de veces que se ha hecho clic en el botón.

También podemos pasar un segundo argumento a ***useEffect*** para especificar cuándo se debe ejecutar el efecto secundario. Si pasamos un array vacío, el efecto se ejecutará solo una vez después del primer renderizado. Si pasamos una variable o un array de variables, el efecto se ejecutará solo cuando esas variables cambien.

```
import React, { useState, useEffect } from 'react';

function Example({ id }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://example.com/api/${id}`)
      .then(response => response.json())
      .then(data => setData(data));
  }, [id]);

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
}
```   


En este ejemplo, hacemos una llamada a una **API** para obtener datos basados en una id que recibimos como **prop**. Usamos useEffect para hacer la llamada a la API y actualizar el estado con los datos. También pasamos id como segundo argumento a useEffect para asegurarnos de que se haga una nueva llamada a la API cuando cambia la id.

# 3. useContext  

***Aquí hay una guía básica sobre useContext:***

**¿Qué es useContext?**   

***useContext es un Hook de React que permite acceder al objeto de contexto que proporciona un componente padre.*** Un objeto de contexto permite compartir datos a través de la jerarquía de componentes sin tener que pasar explícitamente una prop a través de cada nivel.

**¿Cómo funciona useContext?**   

En React, se crea un objeto de contexto con React.createContext(). Este objeto puede ser proporcionado a cualquier componente descendiente y se accede utilizando el Hook useContext(). Cuando el objeto de contexto cambia, cualquier componente que dependa de él se volverá a representar.

**Ejemplo de uso:**   

Supongamos que queremos pasar un tema de color de la aplicación a través de varios componentes en la jerarquía de componentes. Primero, creamos un objeto de contexto con React.createContext():

```
import React from 'react';

const ThemeContext = React.createContext('light');
// A continuación, proporcionamos el objeto de contexto a 
// través de un componente padre usando el componente 
// Context.Provider de React:


function App() {
  return (
    <ThemeContext.Provider value="dark">
      <Header />
      <Main />
      <Footer />
    </ThemeContext.Provider>
  );
}
```
Ahora, cualquier componente descendiente puede acceder al valor del objeto de contexto usando el Hook useContext():

```
import React, { useContext } from 'react';
const ThemeContext = React.createContext('light');

function Header() {
  const theme = useContext(ThemeContext);
  return (
    <header className={`App-header ${theme}`}>
      <h1>Header</h1>
    </header>
  );
}
```

En este ejemplo, el componente Header obtiene el valor del objeto de contexto ThemeContext utilizando useContext(). El valor devuelto será "dark", que es el valor que se proporciona al componente padre App utilizando el componente Context.Provider.

**¿Cuándo usar useContext?**  


***useContext es útil en situaciones en las que se necesita compartir datos entre varios componentes en la jerarquía de componentes, pero pasar una prop a través de cada nivel no es una opción práctica.*** Algunos ejemplos comunes de uso de useContext incluyen temas de aplicaciones, configuraciones de usuario y datos de autenticación.

Y asi existen muchos más Hooks, que serán tratados en un tema posterior, espero esta guia sea de gran utilidad para ti.

