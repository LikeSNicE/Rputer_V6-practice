import React, { useState,useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import TestComponents from '../TestsComponets/TestComponents';
import GotService from '../../Services/api';
import { useNavigate } from 'react-router-dom';
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
      {
        users.map(item => (
            <ListItem
            key={item.id}
            name={item.name} 
            username={item.username}
            street={item.address.street}
            city={item.address.city}
            phone={item.phone}
            />
        ))
      }
    </div>
  );
};

export default UsersPage;

// const UsersPage = () => {
//   const gotService = GotService();
//   const history = useNavigate();

//   return <ItemList
//     getData={gotService.getAllUsers}
//     onItemSelected={itemId => history.push(itemId)}
//     renderItem={({name}) => name}
//   />

// }

// export default withRouter(UsersPage);