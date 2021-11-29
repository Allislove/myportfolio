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
    
          setPost(post);
        });
      };
    
    gettingPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  if (!post) return "Cargando contenido";

  return (
    <div className="main-blog-content">
      <div className="row blog">
              <div className="row justify-content-center blogbypost">
                <div className="col blogcontentpost">
                  <h3> {post.title} </h3>
                  <p> {post.content} </p>
                  { post.codeExplanation ? <pre> <code> {post.codeExplanation} </code> </pre> : null }
                   <br />
                  { post.urlExternal ? <b> Quieres aprender mas? </b> : null }
                  { post.urlExternal ? <a href={post.urlExternal} target="_blank" title="learning" rel="noopener noreferrer"   >{post.urlExternal} </a>  : null }

                </div>
              </div>
            </div>
    </div>
  );
};

export default Post;
