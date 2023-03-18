import React, { useEffect, useState } from "react";
// import Markdown from "markdown-to-jsx";

const HooksGuide = () => {
  const title = "HOOKS en React/";
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
    <div className="main-blog-content">
      <h1> {title} </h1>

      {/* <Markdown>{postContent}</Markdown> */}
    </div>
  );
};

export default HooksGuide;
