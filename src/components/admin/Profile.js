import React from "react"

class Profile extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let username = this.username.value
      let email = this.email.value
      let password = this.password.value
      let id = this.props.user.id
      let user = {id: id, username: username, email: email, password: password}
      this.props.handleUpdate(user)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let username = this.state.editable ? <input type='text' ref={input => this.username = input} defaultValue={this.props.user.username}/>:<h3>{this.props.user.username}</h3>
    let email = this.state.editable ? <input type='text' ref={input => this.email = input} defaultValue={this.props.user.email}/>:<p>{this.props.user.email}</p>
    let password = this.state.editable ? <input type='password' ref={input => this.password = input} defaultValue={this.props.user.password}/>:<h3>{this.props.user.password}</h3>
    return(
      <div>
        {username}
        {email}
        {password}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.user.id)}>Delete</button>
      </div>
    )      
  }
}

export default Profile