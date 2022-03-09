import React from "react";
import Profileimage from "./images/profile.jpeg";
import LatestPosts from "./latestposts";

export default function Intro() {
  return (
    <div className="container mt-5">
      <div className="text-center">
        <a href="https://twitter.com/_iamar__" target="_blank" rel="noopener noreferrer">
          <img
            src={Profileimage}
            width="200"
            height="400"
            className="rounded img-fluid"
            alt="Es una foto de Andrés Romaña"
          />
        </a>
        <div className="ITSME"> A F R R</div>
      </div>

      <h1>Latest Posts</h1>
      <section className="intro-latest-posts">
        <LatestPosts isHome={true} />
      </section>
    </div>
  );
}
