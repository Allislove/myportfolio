import React from "react";

const Mobilemenu = () => {
  return (
    <div className="p-4 only__mobile">
      <input type="checkbox" id="active" />
      <label htmlFor="active" className="menu-btn">
        <span></span>
      </label>
      <label htmlFor="active" className="close"></label>
      <div className="wrapper">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/blog">Blog</a>
          </li>
          <li style={{visibility: "hidden"}}>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/aboutme">Aboutme</a>
          </li>
          <li>
            <a href="/signin">Signin</a>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Mobilemenu;