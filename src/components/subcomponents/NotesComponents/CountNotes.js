import React from "react";

const CountNotes = (props) => {
  return (
    <div>
      <p>Count of your notes</p>
      <p>{props.notesList.length}</p>
    </div>
  );
};

export default CountNotes;
