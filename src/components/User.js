import React from "react";

class User extends React.Component {
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
        <li>Username: {user.username} </li>
        <li>email: {user.email}</li>
      </ul>
    );
    
  }
}

export default User
