import React from "react";

const NewProfile = (props) => {
  let formFields = {}
  
  return(
    <form>
      <input ref={input => formFields.username = input} placeholder='Enter username'/>
      <input ref={input => formFields.email = input} placeholder='Enter email adress' />
      <input ref={input => formFields.password = input} placeholder='Enter password' />
      <button onClick={ () => props.handleFormSubmit(formFields.username.value, formFields.email.value, formFields.password.value)}>Submit</button>
    </form>
  )
}
  

export default NewProfile