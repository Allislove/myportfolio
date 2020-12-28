import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';


class Conctactame extends React.Component {

    render() {
        return (
            <div className='container-md shadow p-3 mb-5 bg-white rounded' id='contactame'>
                <strong > Ponte en contacto con migo</strong>
                <div className="row ">
                    <div className="col-md-8 col-md-offset-2 mt-40">
                        <form action="mailto:andrewss970@gmail.com" method="post" name="form1" id="contact-form" className="form form-contact">
                            <div className="col-md-6"> <input id="input-name" name="name" type="text" placeholder="NOMBRE*"
                                                              required="required" className="form-control input-md" />  </div>

                            <div className="col-md-6"><input id="input-email" name="email" type="email" placeholder="EMAIL*"
                                                             required="required" className="form-control input-md"/>
                            </div>
                            <div className="col-md-6"><input id="input-company" name="subject" type="text"
                                                             placeholder="ASUNTO" className="form-control input-md"/> </div>
                            <div className="col-md-6"><textarea id="input-message" name="message" placeholder="MENSAJE*"
                                                                 required="required"
                                                                 className="form-control input-md" /> </div>

                            <div className="col-md-6">
                                <input name="Submit" type="submit" value="Contactar" />
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}

export default Conctactame;