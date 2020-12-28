





function Navbar() {
    return(
            <nav className="menuown navbar navbar-expand-lg">
                <div className='container-fluid' >
                    <div> <li><a href="#sobremi">Programador Web Colombia</a></li></div>
                    {/*<div>*/}
                    {/*    Logo aqui*/}
                    {/*</div>*/}
                    <div>
                        <li><a href="#sobremi">Sobre mi</a></li>
                        <li><a href="#contactame">Contacto</a></li>
                        <li><a href="#mis-servicios" >Servicios</a> </li>
                        <li><a href="#miportafolio" >Portafolio</a> </li>
                    </div>
                </div>

            </nav>


    );
}

export default Navbar;