import React from "react";
import LatestPosts from "./latestposts";
import { Subscribers } from "./subscribe";

export default function Intro() {
  return (
    <>
      <div className="text-center">
        <div className="ITSME"> A F R R</div>
      </div>

      <h1>Latest Posts</h1>
      <section className="intro-latest-posts">
        <LatestPosts isHome={true} />
      </section>
      <div className="subscribers-container">
        <Subscribers />
      </div>
    </>
  );
}
