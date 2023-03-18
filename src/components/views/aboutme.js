import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
//import "../style/aboutme.css";

export default function Aboutme() {
  const [about, setAboutMe] = useState('')
  // const [isDark, setIsDark] = useState(true)
  // console.log(postContent);

  useEffect(() => {
    import('./aboutme.md')
      .then(res =>
        fetch(res.default)
          .then(response => response.text())
          .then(response => setAboutMe(response))
          .catch(err => console.log(err))
      )
  }, [])

  return (
    <div className="main container">
      <div className="container blogcontent">
        <p className="aboutme">
          <ReactMarkdown>
            {about}
          </ReactMarkdown>
        </p>
      </div>
    </div>
  );
}