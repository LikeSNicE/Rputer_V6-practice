import React, { useState,useEffect } from 'react';
import ListItem from '../ListItem/ListItem';


const UsersPage = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      {
        users.map(item => (
           <ListItem
           key={item.id}
           name={item.name} 
           username={item.username}
           street={item.address.street}
           city={item.address.city}
           phone={item.phone}/>
        ))
      }
    </div>
  );
};

export default UsersPage;