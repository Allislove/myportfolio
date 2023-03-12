export default function Intro() {
  return (
    <>
      <section
        className="sm:flex columns-1 pd-4 sm:container sm:mx-auto
      sm:justify-center sm:align-center sm:shadow-2xl sm:shadow-orange-200"
      >
        <div
          className="sm:flex sm:justify-center sm:align-center
        sm:columns-2 sm:p-4 sm:[&>*]:p-4
        sm:[&>*]:m-4  [&>*]m-14 border-indigo-500/50 space-x-4"
        >
          <div className="sm:flex-initial sm:w-128 sm:hover:[&>*]:border-orange-200 
          w-180 sm:shadow-2xl bg-gray-100">
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2 sm:shadow-inner 
            sm:hover:bg-[#f0f5fa] sm:ease-out sm:duration-300 sm:rounded 
            sm:transition sm:delay-150 sm:hover:ease-in sm:ease-in
            hover:bg-[#f0f5fa]ease-out">
              <h2 class="card-title">Título del post 1</h2>
              <p class="card-preview">Este es un preview del contenido del post.</p>
              <div class="card-footer">
                <span class="card-date">Fecha de publicación: 16 de febrero de 2023 </span>
                <span class="card-tag">javascript</span>
              </div>
            </div>
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2 sm:shadow-inner 
            sm:hover:bg-[#f0f5fa] sm:ease-out sm:duration-300 sm:rounded hover:ease-in
            hover:bg-[#f0f5fa]ease-out duration-300">
              <h2 class="card-title">Título del post 2</h2>
              <p class="card-preview">
                Este es un preview del contenido del post. 
                Este es un preview del contenido del post.
                Este es un preview del contenido del post.
                Este es un preview del contenido del post.
                Este es un preview del contenido del post.
                Este es un preview del contenido del post.
              </p>
              <div class="card-footer">
                <span class="card-date">Fecha de publicación: 16 de febrero de 2023 </span>
                <span class="card-tag">javascript</span>
              </div>
            </div>
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2 sm:shadow-inner 
            sm:hover:bg-[#f0f5fa] sm:ease-out sm:duration-300 sm:rounded hover:ease-in
            hover:bg-[#f0f5fa]ease-out duration-300">
              <h2 class="card-title">Título del post 3</h2>
              <p class="card-preview">Este es un preview del contenido del post.</p>
              <div class="card-footer">
                <span class="card-date">Fecha de publicación: 16 de febrero de 2023 </span>
                <span class="card-tag">javascript</span>
              </div>
            </div>
          </div>
          <div className="sm:bg-[white]  sm:flex-none sm:w-auto sm:h-auto">
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
