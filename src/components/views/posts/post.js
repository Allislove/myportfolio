import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../style/post.css'
import api from '../../../axios.config';


const Post = () => {
  const { id } = useParams();
  //const postById = `https://morning-ocean-92164.herokuapp.com/api/v1/posts/${id}`;
  const postById = `/posts/${id}`;

  const [post, setPost] = useState([]);

  useEffect(() => {
      const gettingPost = async () => {
        await api.get(postById).then((response) => {
          const post = response.data;
          // console.log(post);
          // console.log(post.title);
          document.title = post.title;
          setPost(post);
        });
      };
    
    gettingPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!post) return "Cargando contenido";

  return (
    <section className="main-blog-content">
      <div className="row blog">
              <div className="row justify-content-center blogbypost">
                <div className="col blogcontentpost">
                  <h1 className="posts__titles"> {post.title} </h1>
                  <p> {post.content} </p>
                  { post.codeExplanation ? <pre> <code> {post.codeExplanation} </code> </pre> : null }
                   <br />
                  { post.urlExternal ? <b> Quieres aprender mas? </b> : null }
                  { post.urlExternal ? <a href={post.urlExternal} target="_blank" title="learning" rel="noopener noreferrer"   >{post.urlExternal} </a>  : null }

                </div>
              </div>
            </div>
    </section>
  );
};

export default Post;
