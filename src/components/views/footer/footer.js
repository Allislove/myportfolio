import React from "react";

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
          <svg
            className="socialIcon"
            viewBox="0 0 25 25"
            height="32"
            width="32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"></path>
          </svg>
        </a>

        <a
          href="//instagram.com/andresf97x"
          target="_blank"
          title="Instagram URL"
          rel="noopener noreferrer"
        >
          <svg
            className="socialIcon"
            viewBox="0 0 25 25"
            height="32"
            width="32"
          >
            <path d="M12 2.2h4.8c3.3.2 4.8 1.7 5 5a83.4 83.4 0 010 9.7c-.2 3.2-1.7 4.7-5 4.9a83 83 0 01-9.6 0c-3.3-.2-4.8-1.7-5-5a83 83 0 010-9.6c.2-3.3 1.7-4.8 5-5H12zM12 0H7C2.8.4.4 2.8 0 7a84.3 84.3 0 000 10c.3 4.3 2.7 6.7 7 7a85.6 85.6 0 0010 0c4.3-.3 6.7-2.7 7-7a84.3 84.3 0 000-10c-.3-4.3-2.7-6.7-7-7h-5zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z"></path>
          </svg>
        </a>

        <a
          href="//linkedin.com/in/andres-romana"
          target="_blank"
          title="LinkedIn URL"
          rel="noopener noreferrer"
        >
          <svg
            className="socialIcon"
            width="32"
            height="32"
            viewBox="0 0 455 455"
          >
            <path d="M455,0 L455,455 L0,455 L0,0 L455,0 Z M307.256,170.139 C271.386,170.139 255.373,189.879 246.4,203.686 L246.4,203.686 L246.4,174.907 L178.863,174.907 C179.768,193.96 178.863,378.003 178.863,378.003 L178.863,378.003 L246.4,378.003 L246.4,264.577 C246.4,258.491 246.864,252.458 248.64,248.118 C253.526,235.968 264.617,223.425 283.281,223.425 C307.72,223.425 317.476,242.054 317.476,269.345 L317.476,269.345 L317.476,378.003 L385,378.003 L385,261.537 C385,199.159 351.693,170.139 307.256,170.139 Z M141.522,174.906 L74.016,174.906 L74.016,378.002 L141.522,378.002 L141.522,174.906 Z M108.211,76.998 C85.107,76.998 70,92.157 70,112.085 C70,131.585 84.678,147.186 107.323,147.186 L107.323,147.186 L107.769,147.186 C131.32,147.186 145.963,131.585 145.963,112.085 C145.521,92.157 131.32,76.998 108.211,76.998 Z"></path>
          </svg>
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
            title="GitHub URL"
            rel="noopener noreferrer"
          >
            Andrés Romaña
          </a>
        </p>
        <p>
          {" "}
          powered by{" "}
          <a
            href="https://es.reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React.js
          </a>{" "}
          © {year} All rights reserved.{" "}
        </p>
      </div>
    </div>
  );
}