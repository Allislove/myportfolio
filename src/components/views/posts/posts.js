import React, { useEffect } from "react";
import "../../style/home.css";
import "../../style/posts.css";
// import api from "../../../axios.config";

// import { Link } from "react-router-dom";

// const allPosts = `/posts`;

function Posts() {
  /* const [posts, setPosts] = useState([]);

  const gettingPosts = async () => {
    try {
      api.get(allPosts).then((response) => {
        const posts = response.data;
        //console.log(posts);
  
        setPosts(posts.reverse());
      });
      
    } catch (error) {
      console.error(error);
    }
  }; */

  useEffect(() => {
    // gettingPosts();
    document.title = "Blog posts";
  }, []);

  //if (!posts) return "Cargando posts...";

  /* return (
    <div className="main">
      {posts.map((post, index) => {
        if(post.content.length > 50) {
          post.content = post.content.substring(0, 100) + "...";
        }
        return (
          <div className="botonEditar" key={index}>
{/*             <Link className="btn btn-primary d-flex justify-content-center" to={`/blog/${post._id}`}>
              Editar
            </Link> -- aqui va otro > * /
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
  ); */

  return (
    <div className="main">
      <main >
        <h3>Últimos temas</h3>
        <p> The past, PRESENT And future</p>
        <a
          className="blog-posts"
          href="/blg/react-props"
        >
          <div>
            <h2>Props (Propiedades en React)</h2>
            <div className="meta">
              <time dateTime="2021-11-23T23:14:00Z">23/Nov-2021</time>
            </div>
          </div>
        </a>
        
        <a
          className="blog-posts bst"
          href="/blg/estado-avanzado-react"
        >
          <div>
            <h2>Estado en React</h2>
            <div className="meta">
              <time dateTime="2021-11-18T01:53:00Z">18/Nov-2021</time>
            </div>
          </div>
        </a>

        <a
          className="blog-posts"
          href="/blg/for+in+en+js"
        >
          <div>
            <h2>forIn - JavaScript</h2>
            <div className="meta">
              <time dateTime="2021-09-28T02:23">28/Sep-2021</time>
            </div>
          </div>
        </a>

        <a
          className="blog-posts"
          href="/blg/funciones+en+js"
        >
          <div>
            <h2>Funciones en JavaScript</h2>
            <div className="meta">
              <time dateTime="2021-09-28T02:19">28/Sep-2021</time>
            </div>
          </div>
        </a>

        <a
          className="blog-posts"
          href="/blg/objectos+en+js"
        >
          <div>
            <h2>Objetos en JS</h2>
            <div className="meta">
              <time dateTime="2021-09-28T02:17">28/Sep-2021</time>
            </div>
          </div>
        </a>

        <a
          className="blog-posts"
          href="/blg/arreglos+en+js"
        >
          <div>
            <h2>Arreglos en JS</h2>
            <div className="meta">
              <time dateTime="2021-09-14T22:23:00Z">14/Sep-2021</time>
            </div>
          </div>
        </a>


        <div className="bst">
        <a
          class="blog-posts"
          href="/blg/json+tutorial"
        >
          <div>
            <h2>JSON - JavaScript Object Notation</h2>
            <div className="meta">
              <time dateTime="2021-09-14T22:22">14/Sep-2021</time>
            </div>
          </div>
        </a>
        </div>

      </main>
    </div>
  );
}

export default Posts;
