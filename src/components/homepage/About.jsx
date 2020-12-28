


function About() {
    return(
        <section className='Aboutme shadow-lg p-3 mb-5 bg-white rounded'>
            <div className='Aboutme-container row align-items-start'>
                <div className='col AboutmePhoto aboutCards '>
                    <img src="https://cdn.icon-icons.com/icons2/2630/PNG/512/diversity_avatar_man_people_person_black_muslim_boy_icon_159082.png" alt="Allislove" width='700px' height='500px'/>
                </div>

                <div className='col AboutmeText aboutCards'>
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