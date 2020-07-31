import React from "react";
import { useHistory } from "react-router-dom";

const StickyNote = (props) => {
  const history = useHistory();
  const handleOpenMoreInfo = () => {
    history.push("/your-note");
  };

  return (
    <div id={props.note.id}>
      <button onClick={props.handleDeleteNote}>X</button>
      <p>{props.note.date}</p>
      <h3>{props.note.title}</h3>
      <p>{props.note.keywords}</p>
      <button
        onClick={() => {
          handleOpenMoreInfo();
          props.handleChooseWholeNote(props.note.id);
        }}
      >
        more info
      </button>
    </div>
  );
};

export default StickyNote;
