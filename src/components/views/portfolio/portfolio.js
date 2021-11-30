import React, { useEffect } from "react";
import '../../style/portfolio.css'

function Portfolio() {


  useEffect(() => {
    document.title = `Portfolio`;
  });
  return (
    <div className="" id="miportafolio">
          <a href="https://pokedex-local.netlify.app/" className="portfolioworks" target="_blank" rel="noopener noreferrer">
            <b> Pokedex </b>
            <p> Pagina web para filtrar pokemones por estadisticas y tipo.</p>
            {/* <a href="https://pokedex-local.netlify.app/"> Ver web</a> */}
          </a>
          <a href="https://modandstyle.netlify.app/" className="portfolioworks" target="_blank" rel="noopener noreferrer">
            <b> Moda and Style </b>
            <p>
              Pagina web para representar catalogo de productos de moda y
              estilo.
            </p>
            {/* <a href="https://modandstyle.netlify.app/" className="portfolioworks" target="_blank" rel="noopener noreferrer"> Ver web</a> */}
          </a>
          <a href="https://panel-instructor.netlify.app/" className="portfolioworks" target="_blank" rel="noopener noreferrer">
            <b> Panel Instructor </b>
            <p>
              Pagina web para representar un panel de un instructor de academia.
            </p>
            {/* <a href="https://panel-instructor.netlify.app/" className="portfolioworks" target="_blank" rel="noopener noreferrer"> Ver web</a> */}
        </a>
        <br /> <br />
    </div>
  );
}

export default Portfolio;
