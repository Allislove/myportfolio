export default function Intro() {
  return (
    <>
      <section className="sm:flex-grow sm:flex flex-columns-1 sm:container sm:mx-auto sm:justify-center 
      sm:align-center align-center sm:shadow-2xl sm:shadow-blue-100 shadow-2xl shadow-blue-100">
        <div className="sm:flex justify-items-center sm:justify-center sm:align-center sm:items-center sm:space-x-4 sm:p-4
         justify-center items-center align-center space-x-4 p-4"
        >
          <div className="max-w-auto sm:w-128 sm:hover:border-black-200 w-180 sm:shadow-2xl bg-gray-100 sm:bg-gray-100 transition duration-300 overflow-auto"
            style={{ minWidth: "300px", maxWidth: "800px", height: "100%" }}
          >
            <h1 className="text-xl font-bold mb-2 px-4 pt-4 text-orange-500">
              ¡Últimos posts!
            </h1>
            <a
              href="/blog/react-hooks"
              className="block w-auto h-auto bg-white hover:bg-gray-200 hover:rounded-lg transition duration-300 px-4 py-2"
            >
              <h2 className="text-x font-bold mb-2 px-4 pt-4">
              Hooks en React
              </h2>
              <p className="text-gray-600 px-4 mb-4">
              Los Hooks son una característica de React que nos permite 
              usar el estado y otros características de React sin tener 
              que escribir una clase. En lugar de eso, podemos usar funciones.
              </p>
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-gray-400 text-sm">1/May-2023 </span>
                <span className="text-gray-400 text-sm">React</span>
              </div>
            </a>
            <a
              href="/blog/gitfixin-git-see-git-pull-1-for-details"
              className="block w-auto h-auto bg-white hover:bg-gray-200 hover:rounded-lg transition duration-300 px-4 py-2"
            >
              <h2 className="text-x font-bold mb-2 px-4 pt-4">
              Error al intentar realizar git fetch && git pull
              </h2>
              <p className="text-gray-600 px-4 mb-4">
                There is no tracking information for the current branch.
                Please specify which branch you want to merge with.
                See git-pull(1) for details.
              </p>
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-gray-400 text-sm">27/Mar-2023 </span>
                <span className="text-gray-400 text-sm">git</span>
              </div>
            </a>
            <a
              href="blog/react-props"
              className="block w-auto h-auto bg-white hover:bg-gray-200 hover:rounded-lg transition duration-300 px-4 py-2"
            >
              <h2 className="text-x font-bold mb-2 px-4 pt-4">
                Props (Propiedades en React)
              </h2>
              <p className="text-gray-600 px-4 mb-4">
                Aqui es donde entrar las Props (Propiedades de React) Entonces,
                ¿Que haremos? ¿Que aprenderemos hoy Andrés?, Pues la verdad
                vamos a aprender a utilizar las propiedades y nos enteraremos
                porque son tan importantes y utiles en nuestros proyectos Web,
                lo que hace
              </p>
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-gray-400 text-sm">23/Nov-2021 </span>
                <span className="text-gray-400 text-sm">React</span>
              </div>
            </a>
            <a
              href="blog/estado-avanzado-react"
              className="block w-auto h-auto bg-white hover:bg-gray-200 hover:rounded-lg transition duration-300 px-4 py-2"
            >
              <h2 className="text-x font-bold mb-2 px-4 pt-4">
                Estado en React
              </h2>
              <p className="text-gray-600 px-4 mb-4">
                {" "}
                En el dialogo de código de ejemplo más abajo, se explica a
                detalle muchas de las lineas del mismo, para tener una mejor
                comprension de el estado en React, Veamos entonces ahora algunas
                ideas de lo que tengo en mi mente acerca de este
              </p>
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-gray-400 text-sm">
                18/Nov-2021{" "}
                </span>
                <span className="text-gray-400 text-sm">React</span>
              </div>
            </a>
            <a
              href="blog/for+in+en+js"
              className="block w-auto h-auto bg-white hover:bg-gray-200 hover:rounded-lg transition duration-300 px-4 py-2"
            >
              <h2 className="text-x font-bold mb-2 px-4 pt-4">
              for In - JavaScript
              </h2>
              <p className="text-gray-600 px-4 mb-4">
              Instrucción que utilizamos generalmente para iterar sobre Objetos de javascript, lo que agiliza el prose a la hora de que queremos acceder a determinadas claves y valores de estos mismos.
              </p>
              <div className="flex items-center justify-between px-4 mb-4">
                <span className="text-gray-400 text-sm">
                28/Sep-2021{" "}
                </span>
                <span className="text-gray-400 text-sm">JavaScript</span>
              </div>
            </a>
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
