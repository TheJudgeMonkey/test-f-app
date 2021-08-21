import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Posts() {
  const [posts, setUsers] = useState({
    posts: []
  });

  useEffect(() => {
    console.log("fetching data");
    fetch("http://localhost:3001/posts")
      .then(res => res.json())
      .then(data => { setUsers ({posts: data.posts});
  });
  }, []);

  return (
    <ul>
      {posts.posts.map((post, id) => {
      return (  
        <Link to={`/postId/${post.id}`} key={id}>
          <li>Title: {post.title}</li>
          <li>Description: {post.description}</li>
          <p></p>
        </Link>
      )
      })}
    </ul>
  );
}

export default Posts;
