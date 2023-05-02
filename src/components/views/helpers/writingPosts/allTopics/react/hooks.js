import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";


const HooksGuide = () => {
  const title = "Hooks en React";
  const [postContent, setPostcontent] = useState("");
  console.log(postContent);

  useEffect(() => {
    import("./hooks.md").then((res) =>
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

      <a className="learnmore" href="https://es.react.dev/reference/react" rel="noreferrer" target="_blank"> Aprender más de los Hooks en React</a>
      
    </div>
  );
};

export default HooksGuide;
