import React from "react";
import LatestPosts from "../../../latestposts";


const Versus = () => {
  const title = "¿Backend o Frontend?";
  const subTitle = "La pregunta que muchos nos hacemos...!";

  return (
    <div className="main-blog-content">
      <h1> {title} </h1>
      <h6> {subTitle} </h6>

      <p>
        {" "}
        Hola 👋🏾, hoy quiero que hablemos de ello pregunta que nos hacemos todos
        y en especial cuando estamos entrando en el mundo de la programación
        cómo Ingenieros de Software o cómo Desarrolladores Web Autodidactas.{" "}
      </p>
      <h5> <b> ¿Que Camino tomo? ¿Backend o Frontend? </b> </h5>
      <p>
        {" "}
        Pues la respuesta al principio no es muy evidente, por ende al
        sumergirnos en este maravilloso mundo de la programación, vamos viendo
        que camino seguir más a fondo y mi concejo para ti, es empieza con el
        Backend, empieza a entenderlo a reducir sus partes ya que este es el
        campo de donde parte una gran idea en el mundo del Desarrollo de
        Software. Desde donde empezamos a diseñar el Software, crear la lógica
        del negocio, determinar con que herramientas vamos a desarrollarlo etc,
        con ello pues tendremos entonces una idea abstracta más precisa, sobre
        cómo funciona todo detrás de lo que vemos hermoso, <b>Ejemplo:</b> al ver la red social
        de <a href="https://twitter.com/_iamAR__"> <b> twitter.com</b> </a> (Qué en este caso lo que vemos hermoso, es el FrontEnd) -
        por ende al saber desde donde provienen los datos que se representan
        mediante vistas,(frontend) proceden de algo que ya conocemos un poco que
        en este caso sería el Backend, entonces ¡ahora si podemos empezar a
        entrar al campo del FrontEnd! Para crear y diseñar vistas, que parten
        desde diseños creados por diseñadores UX/UI o por nosotros mismos, no es
        fácil pero tampoco imposible! Ánimo.{" "}
      </p>

      <h5> <b>¿Siempre mostramos datos creados por Backend?</b>  </h5>
      <p>
        - No, podrías crear un simple sitio que muestre lo que tú desees mostrar
        en específico, sin necesidad de cambios dinámicos y esa parte del
        frontend, se llaman Landing Pages, puesto que no será necesario{" "}
        <b> consumir un servicio Backend </b>{" "}
      </p>
      <span> <b>Ahora te preguntarás, ¿cuál me gusta más?</b>  </span>
      <p>
        {" "}
        - En definitiva prefiero el Backend. En un post próximo te explicaré el
        porqué me gusta más! Saludos cordiales.{" "}
      </p>
      <b> Aprender más.</b>
      <section className="intro-latest-posts">
        <LatestPosts isHome={false} />
      </section>
    </div>
  );
};

export default Versus;
