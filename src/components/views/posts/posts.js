import React, { useEffect, useState } from "react";
import "../../style/home.css";
import "../../style/posts.css";
import api from "../../../axios.config";

import { Link } from "react-router-dom";

const allPosts = `/posts`;

function Posts() {
  const [posts, setPosts] = useState([]);

  const gettingPosts = async () => {
    api.get(allPosts).then((response) => {
      const posts = response.data;
      //console.log(posts);

      setPosts(posts.reverse());
    });
  };

  useEffect(() => {
    gettingPosts();
    document.title = "Blog"
  }, []);

  if (!posts) return "Cargando posts";



  return (
    <div className="main">
      {posts.map((post, index) => {
        if(post.content.length > 50) {
          post.content = post.content.substring(0, 100) + "...";
        }
        return (
          <div className="botonEditar" key={index}>
{/*             <Link className="btn btn-primary d-flex justify-content-center" to={`/blog/${post._id}`}>
              Editar
            </Link> */}
          <Link className="notAnclas" to={`/blog/${post._id}`} >
            <div className="row blog">
              <div className="row justify-content-center blogcontent blogpostcards">
                <div className="col bcontent">
                  <h1 className="posts__titles"> {post.title} </h1>
                  <p> {post.content} </p>
                </div>
              </div>
            </div>
          </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Posts;
