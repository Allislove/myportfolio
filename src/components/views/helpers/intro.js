export default function Intro() {
  return (
    <>
      <section
        className="sm:flex columns-1 pd-4 sm:container sm:mx-auto bg-[tomato]
      sm:justify-center sm:align-center"
      >
        <div
          className="sm:flex sm:justify-center sm:align-center sm:border-2 
        sm:columns-2 sm:p-4 sm:bg-[blue] sm:[&>*]:p-4
        sm:[&>*]:m-4  [&>*]m-14 border-4 border-indigo-500/50 space-x-4"
        >
          <div className="sm:flex-initial sm:w-128 sm:bg-[green] sm:[&>*]:border-slate-800 
          sm:border-slate-800">
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2">
              POST1 Hello World Hello World Hello World Hello World Hello World
              Hello World Hello World Hello World Hello World Hello World Hello
              World Hello WorldHello World Hello World Hello World Hello
              WorldHello World Hello World Hello World Hello World
              POST1 Hello World Hello World Hello World Hello World Hello World
              Hello World Hello World Hello World Hello World Hello World Hello
              World Hello WorldHello World Hello World Hello World Hello
              WorldHello World Hello World Hello World Hello World X
              <p> THIS IS AN NEW LINE</p>
            </div>
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2">
              POST2 Hello World Hello World Hello World Hello World
            </div>
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2">
              POST3 Hello World Hello World Hello World Hello World
            </div>
          </div>
          <div className="sm:bg-[red] sm:flex-none sm:w-auto sm:h-auto">
            Tell me about you!
          </div>
          
        </div>
      </section>
    </>
  );
}

/* import React from "react";
// import LatestPosts from "./latestposts";
// import { Subscribers } from "./subscribe";

export default function Intro() {
  return (
    <>
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <p className="text-yellow-400"> Hello this is another html element</p>

      <h1>Latest Posts</h1>
      <section className="intro-latest-posts">
        <LatestPosts isHome={true} />
      </section>
            <div className="subscribers-container">
        <Subscribers />
      </div>
    </>
  );
} */
