import React from "react";
import '../../../App.css'

export default function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className="main container social-nw">
      <div className="social">
        <a
          href="//github.com/allislove"
          target="_blank"
          title="GitHub URL"
          rel="noopener noreferrer"
        >
          <span style={{ color: "black" }}>
            <i className="fab fa-github fa-2x"></i>
          </span>
        </a>

        <a
          href="//twitter.com/_iamAR__"
          target="_blank"
          title="Andrés Romaña twitter"
          rel="noopener noreferrer"
        >
          <span style={{ color: "black" }}>
            <i className="fab fa-twitter fa-2x"></i>
          </span>
        </a>

        <a
          href="//instagram.com/andresf97x"
          target="_blank"
          title="Instagram URL"
          rel="noopener noreferrer"
        >
          <span style={{ color: "black" }}>
            <i className="fab fa-instagram fa-2x"></i>
          </span>
        </a>

        <a
          href="//linkedin.com/in/andres-romana"
          target="_blank"
          title="LinkedIn URL"
          rel="noopener noreferrer"
        >
          <span style={{ color: "black" }}>
            <i className="fab fa-linkedin fa-2x"></i>
          </span>
        </a>
      </div>

      <div className="copyright text-center ">
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          by{" "}
          <a
            href="//github.com/allislove"
            target="_blank"
            className="GitHub URL"
            rel="noopener noreferrer"
          >
            Andrés Romaña
          </a>
        </p>
        <p>
          {" "}
          powered by{" "}
          <a
            href="https://www.netlify.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>{" "}
          © {year} All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}
