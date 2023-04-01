import React, { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown'
import '../posts/cstyle.css'

const Sql = () => {

  const [content, setContent] = useState("");
  // console.log(content);

  useEffect(() => {
    import("./sql.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setContent(response))
        .catch((err) => console.log(err))
    );
  }, []);

  return (
    <div className="main">
      <div className="markdown-body">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Sql;
