import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import '../../style/post.css'
import api from '../../../axios.config';
const readingTime = require('reading-time');


const Post = () => {
  const { id } = useParams();
  //const postById = `https://morning-ocean-92164.herokuapp.com/api/v1/posts/${id}`;
  const postById = `/posts/${id}`;

  const [post, setPost] = useState([]);

  useEffect(() => {
      const gettingPost = async () => {
        try {
          await api.get(postById).then((response) => {
            const post = response.data;
            // console.log(post);
            // console.log(post.title);
            document.title = post.title;
            setPost(post);
          });
        } catch (error) {
          console.error(error);
          return error;
        }
      };
    
    gettingPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fullPostContent = post.title + post.content;
  const stats = readingTime(fullPostContent);
  if (!post) return "Cargando contenido...";

  return (
    <section className="main-blog-content">
      <div className="row blog">
              <div className="row justify-content-center blogbypost">
                <div className="col blogcontentpost">
                  <h1 className="posts__titles"> {post.title} </h1>
                  <p className="reading-time"> {stats.text} - LET'S DO IT </p>
                  <p> {post.content} </p>
                  { post.codeExplanation ? <pre> <code> {post.codeExplanation} </code> </pre> : null }
                   <br />
                  { post.urlExternal ? <b> Quieres aprender mas? </b> : null }
                  { post.urlExternal && post.urlExternal.startsWith("https") ? <a href={post.urlExternal} target="_blank" title="learning" rel="noopener noreferrer"   >{post.urlExternal} </a>  : <a href={post.urlExternal} title="learning" rel="noopener noreferrer">{post.urlExternal} </a> }

                </div>
              </div>
            </div>
    </section>
  );
};

export default Post;
