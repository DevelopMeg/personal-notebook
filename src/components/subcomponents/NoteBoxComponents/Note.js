import React from "react";
import { NavLink } from "react-router-dom";

const Note = (props) => {
  return (
    <section>
      <NavLink
        to="/your-notes"
        onClick={() => {
          props.clearIdChooseNote();

          props.clearField();
        }}
      >
        come back
      </NavLink>
      <h2>your note</h2>
      <h3>{props.note.title}</h3>
      <p>{props.note.date}</p>
      <p>{props.note.keywords}</p>
      <p>{props.note.content}</p>
    </section>
  );
};

export default Note;