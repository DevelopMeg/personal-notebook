import React from "react";
import { NavLink } from "react-router-dom";

const NoNotes = () => {
  return (
    <section>
      <h3>You don`t have any notes.</h3>
      <NavLink to="/new-note">add note</NavLink>
    </section>
  );
};
export default NoNotes;
