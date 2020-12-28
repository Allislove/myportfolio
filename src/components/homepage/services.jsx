

function MyServices() {
    return(
        // <section className='services' id='mis-servicios'>
        //     <p> <strong className='cardTitles'> Mis Servicios  </strong></p>
        //     <div className="myservices">
        //         <div className="activeservices card1">
        //             <p>
        //                 <b> DISEÑO WEB </b> <br/> <br/>
        //
        //                 Páginas web preparadas con responsive design, en otras palabras adaptadas a móviles y tablets.
        //                 Modernos estándares y todo optimizado paraun buen posicionamiento en Google (SEO y SEM).
        //             </p>
        //         </div>
        //         <div className="activeservices card2">
        //             <p>
        //                 <b> DESARROLLO BACK-END  </b>
        //                 <br/> <br/>
        //                 Completas estructuras para empresas en servidores dedicados para un desarrollo de
        //                 infraestructuras personalizadas adaptadas a las particuliaridades propias del sector.
        //
        //             </p>
        //         </div>
        //         <div className="activeservices card3">
        //             <p>
        //                 <b> TIENDAS VIRTUALES  </b>
        //                 <br/> <br/>
        //                 Creación de tiendas con todas las herramientas necesarias para su administración.
        //                 A medida o personalizando un CMS como Prestashop o WordPress (WooCommerce).
        //             </p>
        //         </div>
        //     </div>
        // </section>

        <div className="container shadow-lg p-3 mb-5 bg-white rounded" id='mis-servicios'>
            <p> <strong className='cardTitles'> Mis Servicios  </strong></p>
            <div className="row align-items-start">
                <div className="col activeservices card1">
                    <p>
                        <b> DISEÑO WEB </b> <br/> <br/>

                        Páginas web preparadas con responsive design, en otras palabras adaptadas a móviles y tablets.
                        Modernos estándares y todo optimizado paraun buen posicionamiento en Google (SEO y SEM).
                    </p>
                </div>
                <div className="col activeservices card2">
                    <p>
                        <b> DESARROLLO BACK-END  </b>
                        <br/> <br/>
                        Completas estructuras para empresas en servidores dedicados para un desarrollo de
                        infraestructuras personalizadas adaptadas a las particuliaridades propias del sector.

                    </p>
                </div>
                <div className="col activeservices card3">
                    <p>
                        <b> TIENDAS VIRTUALES  </b>
                        <br/> <br/>
                        Creación de tiendas con todas las herramientas necesarias para su administración.
                        A medida o personalizando un CMS como Prestashop o WordPress (WooCommerce).
                    </p>
                </div>
            </div>
            <br/> <br/>
        </div>
    );
}
export default MyServices;