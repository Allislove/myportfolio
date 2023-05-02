import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const ForIn = () => {
  const title = "Usando el (For In) en JavaScript";
  const [postContent, setPostcontent] = useState("");
  // console.log(postContent);

  useEffect(() => {
    import("./forin.md").then((res) =>
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

      <p className="learnMoreKeepGoing">
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
