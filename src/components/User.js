import React from "react";
import {Link} from 'react-router-dom';

class User extends React.Component {
  // state = {
  //   posts: []
  // };

  // componentDidMount() {
  //   const userID = this.props.match.params.userID;
  //   fetch(`http://localhost:3001/users/${userID}`)
  //     .then((response) => { 
  //       return response.json();
  //       })
  //     .then((data) => 
  //       this.setState({ posts: data.posts })
  //     );
  // }
  
  // render() {
  //   const { posts } = this.state;
  //   return (
  //     <ul>
  //       {posts.map((post, id) => {
  //         return (
  //           <Link to={`/postId/${post.id}`} key={id}>
  //             <li>Title: {post.title}, <br></br>
  //             Description: {post.description}</li>
  //             <p></p>
  //           </Link>
  //         )
  //       })}
  //     </ul>
  //   );
  // }

  state = {
    user: {}
  };

  componentDidMount() {
    const userID = this.props.match.params.userID;
    fetch(`http://localhost:3001/users/${userID}`)
      .then((response) => { 
        return response.json();
        })
      .then((data) => 
        this.setState({ user: data.user })
      );
  }
  
  render() {
    const { user } = this.state;
    return (
      <ul>
        <li >Username: {user.username}, <br></br>
          Email: {user.email}</li>
        <p></p>
      </ul>
    );
  }
}

export default User