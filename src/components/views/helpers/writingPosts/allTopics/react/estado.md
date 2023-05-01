**Estado en React - Guía completa!**

En React, ***el estado es un objeto que almacena información que puede cambiar durante el ciclo de vida del componente.*** Cuando el estado cambia, el componente se vuelve a renderizar para mostrar los cambios en la interfaz de usuario. En esta guía, analizaremos un ejemplo de un componente de reloj en React que utiliza el estado para mostrar la hora actual.   

Ejemplo de componente de reloj:   


```
import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);

    // Definimos el estado inicial con la fecha actual
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    this.timerId = setInterval(() => {
      this.actualizarEstado();
    }, 1000);
  }
```
El **método componentDidMount** se ejecuta después de que la salida del componente ha sido renderizada.
Este método es importante para que el **estado** ***(date)*** se actualice cada vez que se llama setState.
Le pasamos el intervalo, por lo que este método se llamará cada segundo y llamará al método actualizarEstado.

Existe tambien la forma de desmontar un componente, en este caso si vamos a desmontar el **componente (Clock)**, este método se ejecutará y quitará la actualización que se muestra en pantalla cada segundo.

```
componentWillUnmount() {
    clearInterval(this.timerId);
  }
```   


**¿¡Ahora!, vamos a actualizar el estado.**   

```
actualizarEstado() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1> Clock / Reloj</h1>
        <b className="blue"> { this.state.date.toLocaleTimeString() } </b>
      </div>
    );
  }
}

export default Clock;
```

Como pudimos ver entonces, en el ejemplo anterior se utiliza el **componente de clase Clock que define el estado inicial** en su constructor y lo actualiza cada segundo usando el método ***componentDidMount()*** y ***setInterval()***. También se utiliza el método ***componentWillUnmount()*** para limpiar el intervalo cuando el componente se desmonta.

***El método actualizarEstado()*** utiliza el método ***setState() para actualizar el estado inicial del componente.*** Este método toma un ***objeto*** que contiene las propiedades del estado que se desean actualizar y realiza un merge con el estado actual del componente.

En el método ***render()***, se muestra la hora actual usando la variable de fecha del estado y el método toLocaleTimeString().

Espero que esta guía haya sido útil para comprender mejor el uso del estado en React. Recuerda que el estado es una parte importante de la programación en React y es útil para almacenar y actualizar información dinámica en los componentes.

***Aqui hemos visto pues una de las primeras formas de como se declaraba y usaba el estado en React, ahora existen maneras mucho más facil de manera esto, como por ejemplo usar Hooks de React, que es un gran invento en esta tecnologia.***