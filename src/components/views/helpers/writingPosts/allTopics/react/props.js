import React, { useEffect, useState } from "react";
// import Markdown from "markdown-to-jsx";
import "./style.css";
import LatestPosts from "../../../latestposts";
import ReactMarkdown from 'react-markdown'

//const readingTime = require("reading-time");

const Props = () => {
  // const title = "Props - Guia completa!";
  // const content = "Aqui es cuando entran los Props.";
  const [postContent, setPostcontent] = useState("");
  console.log(postContent);

  //const stats = readingTime(content);
  // const stats = content;


  useEffect(() => {
    import("./props.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="main">
      {/* <h1> {title} </h1> */} 
      <p className="reading-time"> {postContent.text}</p>
      <ReactMarkdown>{postContent}</ReactMarkdown>
      {/* **Aprender más.**  
      **[React props](https://react.dev/learn/passing-props-to-a-component "Comprendiendo a fondo las propiedades en react"){:target="_blank"}** */}
      <b className="learnMoreKeepGoing">Continua aprendiendo más.</b>
      <section className="intro-latest-posts">
        <LatestPosts isHome={false} />
      </section>
    </div>
  );
};

export default Props;
