import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import '../../../../posts/cstyle.css'

const Arreglos = () => {
  const title = "Arreglos en JavaScript";
  const [postContent, setPostcontent] = useState("");
  // console.log(postContent);

  useEffect(() => {
    import("./arreglos.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="main spetial-reading-view">
      <h1 className="blog-titles"> {title} </h1>
      <div className="markdown-body">
        <ReactMarkdown>{postContent}</ReactMarkdown>
      </div>
      <p className="learnmore">
        {" "}
        Quieres aprender mas?{" "}
        <b>
          {" "}
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array"
            target="blank"
          >
            ¡más acerca de Arreglos!
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default Arreglos;
