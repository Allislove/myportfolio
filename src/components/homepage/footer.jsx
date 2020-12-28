import React from 'react'


class Footer extends React.Component {
    render() {
        return(
            <footer className="page-footer">
                <div className="container text-center">
                    <div className="social-links">
                        <a href="https://twitter.com/Gamershere_" title="Twitter" target="_blank">
                            <img src="/src/assets/icons/twitter_socialnetwork_20007.png" alt="Andres Romaña Twitter" width="32" height="32"/>
                        </a>

                        <a href="https://www.linkedin.com/in/andres-romana/" title="Linkedin" target="_blank">
                            <img src="/src/assets/icons/sociallinkedin_member_2751.png" alt="Andres RomanaLinkedIn" width="32" height="32"/>
                        </a>
                        <a href="https://github.com/Allislove/" title="Github" target="_blank">
                            <img src="/src/assets/icons/sociallinkedin_member_2751.png" alt="github.com/Allislove" width="32" height="32"/>

                        </a>
                    </div>
                    <div className="copy-right mt-50">
                        <p className="alt-font">Programador Web Colombia 2020</p>
                        <p>Andrés Romaña</p>
                    </div>
                </div>

            </footer>

        );
    }





}

export default Footer;