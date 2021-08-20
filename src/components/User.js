import React from "react";
import {Link} from 'react-router-dom';

class User extends React.Component {
  state = {
    posts: []
  };

  componentDidMount() {
    const userID = this.props.match.params.userID;
    fetch(`http://localhost:3001/users/${userID}`)
      .then((response) => { 
        return response.json();
        })
      .then((data) => 
        this.setState({ posts: data.posts })
      );
  }
  
  render() {
    const { posts } = this.state;
    return (
      <ul>
        {posts.map((post, id) => {
          return (
            <Link to={`/post/${post.id}`} key={id}>
              <li>Title: {post.title}, Description: {post.description}</li>
            </Link>
          )
        })}
      </ul>
    );
  }
}

export default User
