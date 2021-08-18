import React from "react";


class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    fetch('http://localhost:3001/users')
      .then((response) => { 
        return response.json();
        })
      .then((data) => 
        this.setState({ users: data.users })
      );
  }
  
  render() {
    const { users } = this.state;
    return (
      <ul>
        {users.map(user => 
          <li key={user.id}>Username: {user.username}, email: {user.email}</li>
        )}
      </ul>
    );
    
  }
}

export default Users