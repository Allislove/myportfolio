import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


const Objetos = () => {
  // const title = "Objetos - en JavaScript /";
  const [postContent, setPostcontent] = useState("");
  console.log(postContent);

  useEffect(() => {
    import("./objetos.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="main spetial-reading-view">
      {/* <h1> {title} </h1> */}
      <ReactMarkdown>{postContent}</ReactMarkdown>

      {" "}
      <p>
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
