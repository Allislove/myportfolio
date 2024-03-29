import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

const Estado = () => {
  const title = "Estado en react - Guia completa!";

  const [postContent, setPostcontent] = useState('')
  // const [isDark, setIsDark] = useState(true)
  // console.log(postContent);

  useEffect(() => {
    import('./estado.md')
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setPostcontent(response))
          .catch(err => console.log(err))
      )
  }, [])

  return (
    <div className="main spetial-reading-view">
      <h1 className="blog-titles"> {title} </h1>
      <ReactMarkdown>{postContent}</ReactMarkdown>
    </div>
  );
};

export default Estado;
