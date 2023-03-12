import React, { useEffect } from "react";
//import "../style/aboutme.css";

export default function Aboutme() {
  useEffect(() => {
    document.title = `About me`;
  });

  return (
    <div className="main container">
      <div className="container blogcontent">
        <p className="aboutme">
          Soy Ingeniero de Software ( <b>en progreso</b> ), actualmente con
          titulo como Tecnologo en Desarrollo de Software, además completando la
          carrera, Dios mediante para 2024 graduado como Ing de Software ahora
          estoy enfocado en desarrollo web, cuento con experiencia de 1 año
          como desarrollador de software, principalmente en Backend. Cuento con
          conocimientos respaldados por experiencia laboral en lenguajes de
          programación como <b>JavaScript</b>, <b>Java</b>, <b>Python</b> y
          <b>Php</b> donde he tenido la oportunidad de utilizar frameworks y
          librerías de desarrollo como React, Vue, Express, Spring, NetBeans,
          Prisma ORM, Sequelize entre otras, y utilizo JavaScript con el entorno
          de desarrollo Node, conectando estas tecnologías a bases de datos bajo
          motores como MongoDB, SQL Server, PostgreSQL, además cuento con buen
          conocimiento en el uso de bases de datos relacionales y no
          relacionales, y en el diseño de software para entregar un producto de
          muy buena calidad para el cliente final Ahora me encuentro
          profundizando más en NodeJS, y construyendo aplicaciones para mi
          portafolio, lo que me permite cada día los avances que tengo como una
          persona autodidacta, y asi poder desarrollar mis habilidades como un
          Desarrollador de Software.
        </p>
      </div>
    </div>
  );
}
