import React from "react";

const StickyNote = (props) => {
  return (
    <div id={props.note.id}>
      <button>X</button>
      <p>{props.note.date}</p>
      <h3>{props.note.title}</h3>
      <p>{props.note.keywords}</p>
    </div>
  );
};

export default StickyNote;
