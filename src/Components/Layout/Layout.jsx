import React from "react";
import { Outlet, Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Layout.scss";
import '../../index.css';
const Layout = () => {
  return (
    <div className="body">
      <Header />
      <main className="main container">
        <Outlet />
      </main>
      <Footer />
    </div>

    //   <div className='container'>
    //   <header className='navbar is-link'>
    //     <Link to='/'>Home</Link>
    //   </header>
    //   <main className='container'>
    //     <Outlet/>
    //   </main>
    //   <footer>
    //    &copy; JUST APP
    //   </footer>
    // </div>
  );
};

export default Layout;
