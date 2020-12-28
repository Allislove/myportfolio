

function Portfolio() {
    return(
        // <section className='myportfolio' id='miportafolio'>
        //     <p> <strong className='cardTitles'> Mi Portafolio </strong></p>
        //     <p> Todos estos sitios web han sido creados con el proposito de adquirir conocimientos, tanto en html
        //     como en JavaScript y React, y otras librerias para poder desempeñarme de una manera agil en proyectos reales.</p>
        //     <div className="portafolio">
        //         <div className="portfolioworks card1">
        //             <b> Pokedex </b>
        //             <p> Pagina web para filtrar pokemones por estadisticas y tipo.</p>
        //             <a href="https://pokedex-local.netlify.app/"> Ver web</a>
        //         </div>
        //         <div className="portfolioworks card2">
        //             <b> Moda and Style </b>
        //             <p> Pagina web para representar catalogo de productos de moda y estilo. </p>
        //             <a href="https://modandstyle.netlify.app/"> Ver web</a>
        //         </div>
        //         <div className="portfolioworks card3">
        //             <b> Panel Instructor </b>
        //             <p> Pagina web para representar un panel de un instructor de academia. </p>
        //             <a href="https://panel-instructor.netlify.app/"> Ver web</a>
        //         </div>
        //     </div>
        // </section>

        <div className="container shadow-lg p-3 mb-5 bg-white rounded"  id='miportafolio'>
            <p> <strong className='text-center'> Mi Portafolio </strong></p>
             <p> Todos estos sitios web han sido creados con el proposito de adquirir conocimientos, tanto en html
            como en JavaScript y React, y otras librerias para poder desempeñarme de una manera agil en proyectos reales.</p>
            <div className="row align-items-start">
                <div className="col portfolioworks card1">
                    <b> Pokedex </b>
                    <p> Pagina web para filtrar pokemones por estadisticas y tipo.</p>
                    <a href="https://pokedex-local.netlify.app/"> Ver web</a>
                </div>
                <div className="col portfolioworks card2">
                    <b> Moda and Style </b>
                    <p> Pagina web para representar catalogo de productos de moda y estilo. </p>
                    <a href="https://modandstyle.netlify.app/"> Ver web</a>
                </div>
                <div className="col portfolioworks card3">
                    <b> Panel Instructor </b>
                    <p> Pagina web para representar un panel de un instructor de academia. </p>
                    <a href="https://panel-instructor.netlify.app/"> Ver web</a>
                </div>
            </div>
            <br/> <br/>

        </div>
    );
}

export default Portfolio;

