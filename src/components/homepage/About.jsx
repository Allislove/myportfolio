


function About() {
    return(
        <section className='Aboutme shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='Aboutme-container'>
                <div className='AboutmePhoto aboutCards'>
                    <img src="https://i.pinimg.com/originals/3a/3d/3a/3a3d3a22c3137917c9ec3f34d43f232a.jpg" alt="My Own Picture" width='700px' height='500px'/>
                </div>

                <div className='AboutmeText aboutCards'>
                    <p id='sobremi'>
                        Hola! Me llamo <strong>Andrés Romaña, </strong> Soy un <strong> Freelance Full Stack Developer</strong> (Front-End + Backend) <br/>
                        con sede en Medellin-Colombia, especializado en Programación Web y Desarrollo de APIs.
                        <br/>
                        <br/>

                        Actualmente me encuentro cursando los finales de mis estudios en Desarrollo de Software,
                        y muy contento por ello. <br/>
                    </p>
                </div>
            </div>
        </section>
    );
}

export default About;