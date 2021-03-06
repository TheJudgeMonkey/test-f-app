import React from "react";
import PostAdmin from "./PostAdmin"

const AllPosts= (props) => {

  var posts = props.posts.map((post) => {
    return(
      <div key={post.id}>
       <PostAdmin post={post} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
      <div>
        {posts}
      </div>
    )
}

export default AllPosts