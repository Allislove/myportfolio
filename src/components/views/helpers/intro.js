import React from "react";
import Profileimage from "./images/profile.jpeg";
import LatestPosts from "./latestposts";

export default function Intro() {

    return(
        <div className="container mt-5"> 
            <div className="text-center">
                <img src={Profileimage} className="rounded img-fluid" alt="Andrés Romaña" />
                <div className="ITSME"> A F R R</div>
            </div>

            <h1>Latest Posts</h1>
            <section className="intro-latest-posts">
                <LatestPosts />    
            </section>        
        </div>
    )
}


