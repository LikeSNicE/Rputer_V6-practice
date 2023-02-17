import React, { useState,useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import GotService from '../../Services/api';
import { useNavigate,useLocation,useParams, Link } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';


const UsersPage = () => {

  const [users,setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => setUsers(data))
  },[])

  return (
    <div>
      {users.map((item) => (
        <Link to={`/users/${item.id}`}>
          <ListItem
            key={item.id}
            name={item.name}
            username={item.username}
            street={item.address.street}
            city={item.address.city}
            phone={item.phone}
          />
        </Link>
      ))}
    </div>
  );
};

export default UsersPage;

