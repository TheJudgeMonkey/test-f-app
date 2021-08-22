import React from "react";


class PostId extends React.Component {
  state = {
    post: {}
  };

  componentDidMount() {
    const postID = this.props.match.params.postID;
    fetch(`http://localhost:3001/posts/${postID}`)
      .then((response) => { 
        return response.json();
        })
      .then((data) => 
        this.setState({ post: data.post })
      );
  }
  
  render() {
    const { post } = this.state;
    return (
      <ul>
        <li>Title: {post.title} </li>
        <li>Description: {post.description}</li>
      </ul>
    );
    
  }
}

export default PostId
