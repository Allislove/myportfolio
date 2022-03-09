import React,  { useState, useEffect } from "react";
import api from "../../../axios.config";
import { Redirect } from 'react-router-dom';


const NewPost = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [codeExplanation, setCodeExplanation] = useState("");
  const [urlVideo, setUrlVideo] = useState("");
  const [urlExternal, setUrlExternal] = useState("");
  const [image, setImage] = useState("");
  const [tags, setTags] = useState("");

  const user = localStorage.getItem('token');
  // console.log(user)
  const handleSubmit = async (e) => {

    const post = '/posts'
    const token = localStorage.getItem("token");
    // console.log(token);
    e.preventDefault();
    const data = {
      token: '',
      title: title,
      content: content,
      codeExplanation: codeExplanation,
      urlVideo: urlVideo,
      urlExternal: urlExternal,
      image: image,
    };
    
    const headers = {
      'Content-Type': "application/json",
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json'
    };
    
    await api
      .post(
        post,
        data,
        { headers: headers }
      )
      .then((res) => {
        const data = res.data;
        // console.log(data)
        //console.log(data.message);
        if (data.message === "post creado de manera exitosa") {
          alert("Post creado con exito");
          window.location.href = "/blog";
        }
       //console.log(data.message);
       console.log('Resputa nata: ', res)

      })
      .catch((err) => {
        throw err;
      });
  };


  useEffect(() => {
    document.title = `New post`;
  });

  return (
    <div className="container">
      { user ? (    <div className="container">
      <h1>Add post</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <textarea
            className="form-control"
            id="content"
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <textarea
            className="form-control"
            id="codeExplanation"
            placeholder="Code Explanation: Post the code here!"
            value={codeExplanation}
            onChange={(e) => setCodeExplanation(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Video url"
            id="urlvideo"
            value={urlVideo}
            onChange={(e) => setUrlVideo(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="External url"
            id="urlexternal"
            value={urlExternal}
            onChange={(e) => setUrlExternal(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Image"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <input
            type="text"
            className="form-control"
            placeholder="Tags"
            id="tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary btn-dark form-control mb-2 mr-sm-2 mt-5"
        >
          Add
        </button>
      </form>
    </div> ) : (  <Redirect to="/" /> )}
      
    </div>
  );
};

export default NewPost;
