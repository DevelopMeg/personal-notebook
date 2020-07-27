import React from "react";
import { NavLink } from "react-router-dom";

const StickyNote = (props) => {
  return (
    <div id={props.note.id}>
      <button onClick={props.handleDeleteNote}>X</button>
      <p>{props.note.date}</p>
      <h3>{props.note.title}</h3>
      <p>{props.note.keywords}</p>
      <NavLink
        to="/your-note"
        onClick={() => props.handleChooseWholeNote(props.note.id)}
      >
        More Info
      </NavLink>
    </div>
  );
};

export default StickyNote;
