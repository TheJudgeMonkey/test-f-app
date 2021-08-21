import React from "react";

const NewPost = (props) => {
  let formFields = {}
  
  return(
    <form>
      <input ref={input => formFields.title = input} placeholder='Enter the title of the post'/>
      <input ref={input => formFields.description = input} placeholder='Enter a description' />
      <input ref={input => formFields.user_id = input} placeholder='Enter a id' />
      <button onClick={ () => props.handleFormSubmit(formFields.title.value, formFields.description.value, formFields.user_id.value)}>Submit</button>
    </form>
  )
}
  

export default NewPost