import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


const Funciones = () => {
  const title = "Funciones en JavaScript";

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
    <div className="main spetial-reading-view">
      <h1 className="blog-titles"> {title} </h1>
      
          <ReactMarkdown>{postContent}</ReactMarkdown>

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
