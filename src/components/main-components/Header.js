import React from "react";
import titleIcon from "../../image/title-icon.png";

const Header = () => {
  return (
    <header className="head">
      <h1 className="head__title">personal notebook</h1>
      <img src={titleIcon} alt="notes" className="head__image" />
    </header>
  );
};

export default Header;
