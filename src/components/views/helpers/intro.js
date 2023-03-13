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
            sm:hover:ease-in hover:bg-[#f0f5fa]ease-out duration-300 
            p-2 mb-4 shadow-inner rounded hover:ease-in">
              <h2 class="card-title">Título del post 1</h2>
              <p class="card-preview">Este es un preview del contenido del post.</p>
              <div class="card-footer">
                <span class="card-date">Fecha de publicación: 16 de febrero de 2023 </span>
                <span class="card-tag">javascript</span>
              </div>
            </div>
            <div className="sm:p-2 sm:m-2 sm:mb-4 sm:border-2 sm:shadow-inner 
            sm:hover:bg-[#f0f5fa] sm:ease-out sm:duration-300 sm:rounded 
            sm:hover:ease-in hover:bg-[#f0f5fa]ease-out duration-300 
            p-2 mb-2 shadow-inner rounded hover:ease-in">
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
            sm:hover:bg-[#f0f5fa] sm:ease-out sm:duration-300 sm:rounded 
            sm:hover:ease-in hover:bg-[#f0f5fa]ease-out duration-300 
            p-2 mb-2 shadow-inner rounded hover:ease-in">
              <h2 class="card-title">Título del post 3</h2>
              <p class="card-preview">Este es un preview del contenido del post.</p>
              <div class="card-footer">
                <span class="card-date">Fecha de publicación: 16 de febrero de 2023 </span>
                <span class="card-tag">javascript</span>
              </div>
            </div>
          </div>
          <div className="sm:bg-[black]  sm:flex-none sm:w-auto sm:h-auto
          bg-[black] flex-none w-auto h-auto">
            <span>
              <img style={{width: 140, height: 140}} src="https://img.icons8.com/officel/512/maintenance.png" alt="SITE IS UNDER MAINTENANCE"/>
            </span>
            <span className="sm:bg-[yellow]  sm:flex-none sm:w-auto sm:h-auto
            bg-[yellow] flex-none w-auto h-auto"> 
            SITE IS UNDER MAINTENANCE
            </span>
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
