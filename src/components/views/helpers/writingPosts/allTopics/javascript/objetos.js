import React, { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";

const Objetos = () => {
  const title = "Objetos - en JavaScript /";
  const [postContent, setPostcontent] = useState("");

  useEffect(() => {
    import("./objetos.md").then((res) =>
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
        Casi todo en JavaScript es un objeto, por ende quiero mostrarte estas
        dos formas de crear un Objeto en JavaScript, y asi tener una mejor
        visión de como estan formado los demás, como las Function(), los
        Array(), Boolean(), etc. Además te muestro algo basico en la forma en
        que se acceden estos objetos.
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
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Working_with_Objects"
            target="blank"
          >
            Aprender más acerca de Objetos
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default Objetos;
