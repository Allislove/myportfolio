import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const Arreglos = () => {
  const title = "Arreglos en JavaScript /";

  const [postContent, setPostcontent] = useState("");

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
      Guia completa de Arreglos
      <p>
        Es un objeto de tipo lista de alto nivel, que queremos decir con tipo
        lista? Pues, en este objeto podemos almacenar cualquier candidad de
        valores, los que deseemos y con ello entonces conseguimos que se
        convierta en una lista, este metodo consta de multiples metodos, para su
        propia alimentación y que nos seran muy util, en el dia a dia como
        Desarrolladores Web, existen muchos como .push(), .unshift(), .pop(),
        Abajo en el código te dejare en cada linea la explicación de cada uno de
        ellos, y al final podras sumergirte de una manera más amena en este
        maravilloso mundo. No olvides consultar la URL, que siempre les dejo al
        final.
      </p>
      <pre>
        <code>
          <Markdown>{postContent}</Markdown>
        </code>
      </pre>
      <p>
        {" "}
        Quieres aprender mas?{" "}
        <b>
          {" "}
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array"
            target="blank"
          >
            Aprender más de Arreglos
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default Arreglos;
