import React from "react";


class User extends React.Component {
  state = {
    user: {}
  };

  componentDidMount() {
    let userPage = 'http://localhost:3001/users/2'
    fetch(userPage)
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
