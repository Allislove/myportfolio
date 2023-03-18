import React, { useState, useEffect } from "react";
// import Markdown from "markdown-to-jsx";
// import Code from "../../../../posts/code";

const Estado = () => {
  const title = "Estado en react - Guia completa!";

  const [postContent, setPostcontent] = useState('')
  // const [isDark, setIsDark] = useState(true)
  console.log(postContent);

  useEffect(() => {
    import('./estado.md')
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [])

  return (
    <div className="main">
      <h1> {title} </h1>
      En el dialogo de código de ejemplo más abajo, se explica a detalle muchas
      de las lineas del mismo, para tener una mejor comprension de el estado en
      React, Veamos entonces ahora algunas ideas de lo que tengo en mi mente
      acerca de este, tenemos una clase y luego un estado, este sera
      rende-rizado cada vez que se actualice la fecha que estamos llamando en el
      código, (date: new Date()), este elemento es el estado inicial, luego de
      ello analiza el código que esta abajo para poder comprender su
      funcionamiento, no te olvides de leer las lineas comentadas //.. Esas son
      las que explican a detalle el código. # Nota: * Si quieres tener más
      acercamiento visualizando el cambio constante de ComponentDidMount(),
      descomenta la linea 21 del Componente(Clock.jsx), pero antes debes de
      tener abierta la consola de el navegador. * Esta te mostrara que cada
      segundo que pasa la variable (counter) aumentaría su valor cada vez de 1
      en 1, debido al intervalo que hemos utilizado para mostrar la hora.
      *Cuando des-comentes esta linea y veas el resultado en la consola, trata
      de volver a comentarla rápido, debido al desbordamiento de pila.

      <pre>
        <code>
{/*           <Markdown
            options={{
              overrides: {
                code: {
                  component: Code,
                  props: {
                    isDark,
                    setIsDark
                  }
                }
              }
            }}
          >
            {postContent}
          </Markdown> */}
        </code>
      </pre>


    </div>
  );
};

export default Estado;
