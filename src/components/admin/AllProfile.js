import React from "react";
import Profile from "./Profile"

const AllProfile= (props) => {

  var users = props.users.map((user) => {
    return(
      <div key={user.id}>
       <Profile user={user} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate}/>
      </div>
    )
  })

  return(
      <div>
        {users}
      </div>
    )
}

export default AllProfile