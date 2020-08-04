import React from "react";
import { NavLink } from "react-router-dom";
import titleIcon from "../../image/title-icon.png";

const Header = () => {
  return (
    <header className="head">
      <h1 className="head__title">
        <NavLink to="/" className="link">
          personal notebook
        </NavLink>
      </h1>
      <img src={titleIcon} alt="notes" className="head__image" />
    </header>
  );
};

export default Header;
