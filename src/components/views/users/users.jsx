import React, { useEffect, useState} from "react";
import api from "../../../axios.config";

const allUsers = `/users`


export default function Users() {
  const [users, setUsers] = useState([]);

  const gettingUsers = async() => {
    api.get(allUsers).then((response) => {
      const users = response.data;
      // console.log(users)
      setUsers(users);
    });

  }

  useEffect(() => {
    gettingUsers();
  }, []);

  if(!users) return "Cargando usuarios";
  return (
    <div>
      <h1> Users </h1>
      <h1> { users.map((user, index) => {
        return(
          <li key={index}>
            {user.name} 
            {user.nickname} 
          </li>
        )
      
      }) } </h1>

      
    </div>
  );
}