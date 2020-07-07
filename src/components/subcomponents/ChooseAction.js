import React from "react";
import { NavLink } from "react-router-dom";

const ChooseAction = (props) => {
  return (
    <>
      <p>ChooseAction</p>
      <NavLink to="/your-notes">your notes</NavLink>
      <NavLink to="/new-note">create new note</NavLink>
    </>
  );
};

export default ChooseAction;
