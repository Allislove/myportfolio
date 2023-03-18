import React, { useEffect, useState } from "react";
// import Markdown from "markdown-to-jsx";

const Funciones = () => {
  const title = "Funciones - Functions /";

  const [postContent, setPostcontent] = useState("");
  console.log(postContent);
  useEffect(() => {
    import("./funciones.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="main">
      <h1> {title} </h1>

      <p>
        Las funciones, ¿Que podrias entender tu de ellas ?, bueno veo que ya te
        respondiste, pues ahora te cuento lo que entiendo de ellas, es una forma
        en que podemos envolver nuestro código, para que sea reutilizable,
        mantener nuestro código mas limpio, para agilizar nuestras tareas, para
        llamar una parte del código cuando lo deseemos, y asi hacer uso de los
        Condicionales(Busca en google: Condicionales en JS), con ello entonces
        al final logramos una simplicidad de las cosas con una manera muy grata
        de trabajar. Existen varias formas de crear funciones, veamoslas abajo.
      </p>
      <pre>
        <code>
          {/* <Markdown>{postContent}</Markdown> */}
        </code>
      </pre>

      <p>
        {" "}
        Quieres aprender mas?{" "}
        <b>
          {" "}
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Functions"
            target="blank"
          >
            Funciones
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default Funciones;
