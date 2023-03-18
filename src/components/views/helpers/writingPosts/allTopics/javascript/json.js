import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const JsonGuide = () => {
  // const title = "JSON en JavaScript /";

  const [postContent, setPostcontent] = useState("");
  console.log(postContent);

  useEffect(() => {
    import("./json.md").then((res) =>
      fetch(res.default)
        .then((response) => response.text())
        .then((response) => setPostcontent(response))
        .catch((err) => console.log(err))
    );
  }, []);
  return (
    <div className="main">
      {/* <h1> {title} </h1> */}

        <ReactMarkdown>{postContent}</ReactMarkdown>

      <p>
        {" "}
        Quieres aprender mas?{" "}
        <b>
          {" "}
          <a href="https://www.json.org/" target="blank">
            Aprender más de Json
          </a>{" "}
        </b>
      </p>
    </div>
  );
};

export default JsonGuide;
