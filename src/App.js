import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import ListItem from './Components/ListItem/ListItem';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import UsersPage from './Components/UsersPage/UsersPage';
import Posts from './Components/Posts';


const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='users' element={<UsersPage/>}/>
      <Route path='posts' element={<Posts/>}/>
    </Route>
  </Routes>
  )

//  const[state,setState] = useState([]);

// useEffect( () => {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(data => setState(data))
// })

//   return (
//     <div>
//       {
//         state.map(item => (
//           <ListItem
//           key={item.id}
//           name={item.name} 
//           username={item.username}
//           street={item.address.street}
//           city={item.address.city}
//           phone={item.phone}/>
//         ))
//       }
//     </div>
//   );
};

export default App;
