import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="head">
      <h1 className="head__title">
        <NavLink to="/">personal notebook</NavLink>
      </h1>
    </header>
  );
};

export default Header;
