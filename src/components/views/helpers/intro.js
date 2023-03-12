import React from "react";
// import LatestPosts from "./latestposts";
// import { Subscribers } from "./subscribe";

export default function Intro() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-yellow-400"> Hello this is another html element</p>

      {/* <h1>Latest Posts</h1>
      <section className="intro-latest-posts">
        <LatestPosts isHome={true} />
      </section> */}
      {/*       <div className="subscribers-container">
        <Subscribers />
      </div> */ }
    </>
  );
}
