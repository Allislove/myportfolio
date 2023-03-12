import React, { useEffect } from 'react';
//import '../style/home.css'
import Intro from './helpers/intro';

function Home() {

    useEffect(() => {
        document.title = `Home`;
      });

    return(
        <div className="">
            <Intro />
        </div>
    )

}

export default Home;
