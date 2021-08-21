import React from "react";
import AllPosts from "./AllPosts";
import NewPost from "./NewPost";

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewPost = this.addNewPost.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deletePost = this.deletePost.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updatePost = this.updatePost.bind(this)
  }

  handleFormSubmit(title, description, user_id){
    let body = JSON.stringify({post: {title: title, description: description, user_id: user_id} })

    fetch('http://localhost:3001/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => {return response.json()})
    .then((post)=>{
      this.addNewPost(post)
    })
    
  }

  addNewPost(post){
    this.setState({
      Posts: this.state.posts.concat(post)
    })
  }

   handleDelete(id){
    fetch(`http://localhost:3001/posts/${id}`, 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.deletePost(id)
      })
  }

  deletePost(id){
    let newPosts = this.state.posts.filter((post) => post.id !== id)
    this.setState({
      posts: newPosts
    })
  }

  handleUpdate(post){
    fetch(`http://localhost:3001/posts/${post.id}`, 
    {
      method: 'PUT',
      body: JSON.stringify({post: post}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((response) => { 
        this.updatePost(post)
      })
  }
  updatePost(post){
    let newPosts = this.state.posts.filter((p) => p.id !== post.id)
    newPosts.push(post)
    this.setState({
      posts: newPosts
    })
  }

  componentDidMount(){
    fetch('http://localhost:3001/posts.json')
      .then((response) => {return response.json()})
      .then((data) => this.setState({ posts: data.posts }) );
  }

  render(){
    return(
      <div>
        <NewPost handleFormSubmit={this.handleFormSubmit}/>
        <AllPosts posts={this.state.posts} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate}/>
      </div>
    )
  }
}

export default Body
