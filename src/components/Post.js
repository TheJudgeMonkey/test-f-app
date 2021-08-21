import React from "react";

class Post extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }

  handleEdit(){
   if(this.state.editable){
      let title = this.title.value
      let description = this.description.value
      let user_id = this.user_id.value
      let id = this.props.post.id
      let post = {id: id, title: title, description: description, user_id: user_id}
      this.props.handleUpdate(post)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  
  render(){
    let title = this.state.editable ? <input type='text' ref={input => this.title = input} defaultValue={this.props.post.title}/>:<h3>{this.props.post.title}</h3>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.post.description}/>:<p>{this.props.post.description}</p>
    let user_id = this.state.editable ? <input type='integer' ref={input => this.user_id = input} defaultValue={this.props.post.user_id}/>:<h3>{this.props.post.user_id}</h3>
    return(
      <div>
        {title}
        {description}
        {user_id}
        <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
        <button onClick={() => this.props.handleDelete(this.props.post.id)}>Delete</button>
      </div>
    )      
  }
}

export default Post