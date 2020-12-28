import React from 'react'


class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer">
                <div className="container text-center">
                    <div className="social-links">
                        <a href="https://twitter.com/Gamershere_" title="Twitter" target="_blank" rel="noreferrer">
                            <img src="https://icon-icons.com/icons2/1/PNG/32/social_Twitter_38.png" alt="Andres Romaña Twitter" width="32" height="32"/>
                        </a>

                        <a href="https://www.linkedin.com/in/andres-romana/" title="Linkedin" target="_blank" rel="noreferrer">
                            <img src="https://icon-icons.com/icons2/936/PNG/32/linkedin-sign_icon-icons.com_73508.png" alt="Andres RomanaLinkedIn" width="32" height="32"/>
                        </a>
                        <a href="https://github.com/Allislove/" title="Github" target="_blank" rel="noreferrer">
                            <img src="https://icon-icons.com/icons2/936/PNG/32/github-logo_icon-icons.com_73546.png" alt="github.com/Allislove" width="32" height="32"/>

                        </a>
                    </div>
                    <div className="copy-right mt-50">
                        <p className="alt-font">Programador Web Colombia 2020</p>
                        <p>Andrés Romaña</p>
                    </div>

                    <div className="buildwith mt-20">
                        <b>Pagina Web constuida con <a href="https://es.reactjs.org/"> React</a> </b>
                    </div>
                </div>

            </footer>

        );
    }





}

export default Footer;