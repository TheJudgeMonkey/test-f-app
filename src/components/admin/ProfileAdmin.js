import React from "react";
import NewProfile from "./NewProfile";
import AllProfile from "./AllProfile";

class ProfileAdmin extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewUser = this.addNewUser.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateUser = this.updateUser.bind(this)
  }

  handleFormSubmit(username, email, password){
    let body = JSON.stringify({user: {username: username, email: email, password: password} })

    fetch('http://localhost:3001/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((user)=>{
      this.addNewUser(user)
    })
    
  }

  addNewUser(user){
    this.setState({
      Users: this.state.users.concat(user)
    })
  }

   handleDelete(id){
    fetch(`http://localhost:3001/users/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deleteUser(id)
      })
  }

  deleteUser(id){
    let newUsers = this.state.users.filter((user) => user.id !== id)
    this.setState({
      users: newUsers
    })
  }

  handleUpdate(user){
    fetch(`http://localhost:3001/users/${user.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({user: user}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updateUser(user)
      })
  }
  updateUser(user){
    let newUsers = this.state.users.filter((u) => u.id !== user.id)
    newUsers.push(user)
    this.setState({
      users: newUsers
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/users.json')
      .then((response) => {return response.json()})
      .then((data) => this.setState({ users: data.users }) );
  }

  render(){
    return(
      <div>
        <NewProfile handleFormSubmit={this.handleFormSubmit}/>
        <AllProfile users={this.state.users} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default ProfileAdmin
