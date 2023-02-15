import React from 'react';
import {Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
const Header = () => {
  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link class="navbar-item" to="/">
          <img
            src="https://upload.wikimedia.org/wikipedia/be/thumb/5/56/Minecraft_Loga.svg/640px-Minecraft_Loga.svg.png"
            width="112"
            height="28"
          />
        </Link>
      </div>
      <div className="navbar-start">


        <CustomLink
          to={"/"}
          children={"Home"}
          className={"navbar-item"}
        />

        <CustomLink
          to={"/users"}
          children={"Users"}
          className={"navbar-item"}
        />

        <CustomLink
          to={"/posts"}
          children={"Posts"}
          className={"navbar-item"}
        />
      </div>
    </nav>
  );
};

export default Header;