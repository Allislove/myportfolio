import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const ForIn = () => {
  const title = "uso del For In en JavaScript /";
  const [postContent, setPostcontent] = useState("");

  useEffect(() => {
    import("./forin.md").then((res) =>
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
        Instrucción que utilizamos generalmente para iterar sobre Objetos de
        javascript, lo que agiliza el prose a la hora de que queremos acceder a
        determinadas claves y valores de estos mismos. Mira más abajo el
        ejemplo, donde hemos creado un array llamado users, que contiene un tipo
        de texto JSON, aqui podemos entonces ver como podriamos recorrer un tipo
        de texto formateado.
      </p>
      <Markdown>{postContent}</Markdown>

      <p>
        {" "}
        Quieres aprender mas?{" "}
        <b>
          {" "}
          <a href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for...in" target="blank">
            Aprender más de For In
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default ForIn;
