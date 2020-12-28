import React from "react";


function SendMessage() {
    return(
        <form id='contactame' className='emailMessage' action="mailto:andrewss970@gmail.com" method="post" name="form1" >
            <span className='sendMessage'>

                <input className="btn btn-danger" name="Submit" type="submit" value="Contactame" />

            </span>
        </form>
    );
}

export default SendMessage;