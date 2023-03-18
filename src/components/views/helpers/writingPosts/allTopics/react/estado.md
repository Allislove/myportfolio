# **Estado en react - Guia completa!**  

En el dialogo de código de ejemplo más abajo, se explica a detalle muchas de las lineas del mismo, para comprender mejor el estado en React, Veamos entonces ahora algunas ideas de lo que tengo en mi mente acerca de este, tenemos una clase y luego un estado, este sera rende-rizado cada vez que se actualice la fecha que estamos llamando en el código, *(date: new Date()),* este elemento es el estado inicial, luego de ello analiza el código que esta abajo para poder comprender su funcionamiento, no te olvides de leer las lineas comentadas //.. Esas son las que explican a detalle el código. # Nota: **Si quieres tener más acercamiento visualizando el cambio constante de ComponentDidMount(), descomenta la linea 21 del Componente(Clock.jsx), pero antes debes de tener abierta la consola de el navegador.** Esta te mostrara que cada segundo que pasa la variable (counter) aumentaría su valor cada vez de 1 en 1, debido al intervalo que hemos utilizado para mostrar la hora. *Cuando des-comentes esta línea y veas el resultado en la consola, trata de volver a comentarla rápido, debido al desbordamiento de pila.*

    import React from 'react';
    
    class Clock extends React.Component {
       constructor(props) {
        super(props);
        // Definmos el estado, con la fecha actual
        this.state = {
            date: new Date(),
        }
        }
       // Metodo de montaje, se ejecuta despues de que la salida 
        del componete ha sido renderizada.
       // Este metodo sera de gran importancia para que el estado(date), 
       // se actualice cada vez, que setState se llama
       // Le pasamos el intervalo, por ende cada segundo este metodo 
       // sera llamado, y llamara ahora, al metodo **actualizarEstado();**

       componentDidMount() {
        let counter = 0;
        this.TimerId = setInterval(() => {
            counter += 1;
            //console.log('Mira el pasar del contador: ', + counter);
            this.actualizarEstado();
        });
       }
    
       // Si desmontamos el componente(Clock), este metodo se ejecutaria y 
       // quitaria la actualizacion que se muestra en pantalla cada segundo.
       componentWillUnmount() {
        // Llamamos a clearInterval, para limpiar el intervalo!
        clearInterval(this.TimerId);
       }
    
       /* Creamos un metodo para poder actualizar el estado inicial, de nuestro 
           dato(date), y como logramos esto?
            Esto lo logramos gracias al metodo setState, que le pasamos 
            un objeto, e identificamos nuestro dato(variable),
            en este caso es date, que vamos a actualizar. */
            actualizarEstado() {
    // Llamamos el metodo setState.. Es la unica y mejor forma para hacerlo.
        this.setState({
            date: new Date(),
        })
       }
    
       render() {
        return(
            <div>
                <h1> Clock / Reloj</h1>
                <b className="blue"> { this.state.date.toLocaleTimeString() } </b>
            </div>
        );
       }
    }
    
    export default Clock;

