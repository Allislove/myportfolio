export default function Intro() {
  return (
    <>
      <section className="sm:flex flex-col sm:container sm:mx-auto sm:justify-center sm:items-center sm:shadow-2xl sm:shadow-blue-100 shadow-2xl shadow-blue-100 align-center sm:align-center justify-center  items-center">
        <div
          className="h-full sm:flex sm:justify-center sm:align-center sm:items-center sm:space-x-4 sm:p-4
         justify-center items-center align-center space-x-4 p-4"
        >
          <div
            className="max-w-auto sm:w-128 sm:hover:border-black-200 w-180 sm:shadow-2xl bg-gray-100 sm:bg-gray-100 transition duration-300 overflow-auto"
            style={{ minWidth: "300px", maxWidth: "800px", height: "100%" }}
          >
            <h1 className="text-xl font-bold mb-2 px-4 pt-4 text-orange-500">
              ¡Últimos posts!
            </h1>
            <a
              href="blg/react-props"
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
              href="blg/estado-avanzado-react"
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
              href="blg/for+in+en+js"
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
          <div
            className="flex-none sm:h-auto p-4 mx-4 max-w-auto sm:w-128 sm:hover:border-black-200 w-180 sm:shadow-2xl bg-gray-100 sm:bg-gray-100 transition  duration-300 overflow-auto"
            style={{ maxWidth: "280px", height: "inherit" }}
          >
            <span>
              <img
                style={{ width: 140, height: 140 }}
                src="https://img.icons8.com/officel/512/maintenance.png"
                alt="SITE IS UNDER MAINTENANCE"
              />
            </span>
            <span
              className="sm:bg-[yellow]  sm:flex-none sm:w-auto sm:h-auto
            bg-[yellow] flex-none w-auto h-auto"
            >
              SITE IS UNDER MAINTENANCE odemos entrar de una manera
              excelenteEste es un preview del contenido del post. podemos entrar
              de una manera excelenteEste es un preview del contenido del post.
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
