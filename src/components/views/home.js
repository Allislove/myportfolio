import React, { useEffect } from 'react';
//import '../style/home.css'
import Intro from './helpers/intro';
import Tags from './helpers/tags';

function Home() {

    useEffect(() => {
        document.title = `Home`;
      });

    return(
        <div className="">
            <Tags />
            <Intro />
        </div>
    )

}

export default Home;
