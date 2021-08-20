import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState({
    users: []
  });

  useEffect(() => {
    console.log("fetching data");
    fetch("http://localhost:3001/users")
      .then(res => res.json())
      .then(data => { setUsers ({users: data.users});
  });
  }, []);

  return (
    <ul>
      {users.users.map((user, id) => {
      return (  
        <Link to={`/user/${user.id}`} key={id}>
          <li>Username: {user.username}, email: {user.email}</li>
          <p></p>
        </Link>
      )
      })}
    </ul>
  );
}

export default Users;
