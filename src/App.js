import React from 'react';
import { useState,useEffect } from 'react';
import './App.css';
import ListItem from './Components/ListItem/ListItem';
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements,Routes} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import HomePage from './Components/HomePage/HomePage';
import UsersPage from './Components/UsersPage/UsersPage';
import UserPage from './Components/UserPage';
import Posts from './Components/Posts';
import TestComponents from './Components/TestsComponets/TestComponents';
import Post from './Components/Post';


const App = () => {
  return(
  <Routes>
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage/>}/>
      <Route path='users' element={<UsersPage/>}/>
      <Route path='posts' element={<Posts/>}/>
      <Route path='users/:id' element={<UserPage/>}/>
      <Route path='posts/:id' element={<Post/>}/>
      <Route path='test' element={<TestComponents/>}/>
    </Route>
  </Routes>
  )
};

export default App;
