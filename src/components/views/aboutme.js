import React, { useEffect } from "react";
import "../style/aboutme.css";

export default function Aboutme() {


  useEffect(() => {
    document.title = `About me`;
  });


  return (
    <div className="main container">
      <div className="container blogcontent">
        <p className="aboutme">
          Soy Ingeniero de sistemas ( <b>en progreso</b> ), actualmente con
          titulo como Tecnologo en Desarrollo de Software, ahora estoy enfocado
          en desarrollo web, tengo 24 años y experiencia de 1 año como
          desarrollador de software, principalmente en Backend. Cuento con
          conocimientos respaldados por experiencia laboral en lenguajes de
          programación como <b>JavaScript</b>,<b>Python</b> y <b>Php</b> donde
          he tenido la oportunidad de utilizar frameworks y librerías de
          desarrollo como React, Vue, Express, Sequelize entre otras, y utilizo
          JavaScript con el entorno de desarrollo Node, conectando estas
          tecnologías a bases de datos bajo motores como MongoDB, SQL Server,
          PostgreSQL, Ahora me encuentro profundizando más en NodeJS, y
          construyendo aplicaciones para mi portafolio, lo que me permite cada
          día los avances que tengo como una persona autodidacta, y asi poder
          desarrollar mis habilidades como un Desarrollador de Software.
        </p>

        <p className="aboutme">
          Abajo podras conectar conmigo en mis redes sociales, donde puedes
          encontrar los código de mi portafolio, donde puedes ver mis proyectos
          realizados.
        </p>
      </div>
    </div>
  );
}
