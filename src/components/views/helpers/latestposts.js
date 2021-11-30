import React from "react";
import axios from "axios";
import '../../style/latestspots.css';
import { Link } from "react-router-dom";

const LatestPosts = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    const getPosts = async () => {
      await axios
        .get("https://morning-ocean-92164.herokuapp.com/api/v1/posts/")
        .then((res) => {
          setPosts(res.data);
        })
        .catch((err) => console.log(err));

      //console.log(res);
    };

    getPosts();
  }, []);

  function twoPosts() {
    for (let i = 0; i < posts.length; i++) {
      //console.log(posts[i].title);
      const twoOnly = posts.slice(-2);
      //console.log(twoOnly);
      return (
          <div className="s-twoposts">
            {twoOnly.map((post) => {
              if (post.content.length > 50) {
                post.content = post.content.substring(0, 100) + "...";
              }
              return (
                <Link
                  className="anclas"
                  to={`/blog/${post._id}`}
                  key={post._id}
                >
                  <div className="bcontent" key={post._id}>
                    <h3>{post.title}</h3>
                    <p>{post.content}</p>
                  </div>
                </Link>
              );
            })}
          </div>
      );
    }
  }

  return <div className="next-latest">
          {twoPosts()}
        </div>;
};

export default LatestPosts;
