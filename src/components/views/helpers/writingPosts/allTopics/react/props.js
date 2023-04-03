import React, { useEffect, useState } from "react";
import "./style.css";
import LatestPosts from "../../../latestposts";
import ReactMarkdown from 'react-markdown'
/* import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism'; */



//const readingTime = require("reading-time");

const Props = () => {
  // const title = "Props - Guia completa!";
  // const content = "Aqui es cuando entran los Props.";
  const [postContent, setPostcontent] = useState("");
  // console.log(postContent);

  //const stats = readingTime(content);
  // const stats = content;

/*   const data = `
  useEffect(() => {
    import("./props.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, [])`; */
/*   const Component = ({ value, language }) => {

    return (
      <SyntaxHighlighter language={language ?? null} style={tomorrow}>
        {value ?? data}
      </SyntaxHighlighter>
    );
  }; */

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
      <ReactMarkdown
/*         components={{
          code: Component,
        }} */ >
        {postContent}
      </ReactMarkdown>
      <a className="learnMoreKeepGoing" href="https://react.dev/learn/passing-props-to-a-component" target="blank">
        <b className="learnMoreKeepGoing">Aprender más de React Props</b>
      </a>
      <section className="intro-latest-posts">
        <LatestPosts isHome={false} />
      </section>
    </div>
  );
};

export default Props;
