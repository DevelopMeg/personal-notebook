import React from "react";
import { useHistory } from "react-router-dom";

const StickyNote = (props) => {
  const history = useHistory();
  const handleOpenMoreInfo = () => {
    history.push("/your-note");
  };

  const { id, date, title, keywords } = props.note;

  return (
    <div id={id}>
      <button onClick={props.handleDeleteNote}>X</button>
      <p>{date}</p>
      <h3>{title}</h3>
      {keywords.length !== 0 ? <p>{keywords}</p> : null}
      <button
        onClick={() => {
          handleOpenMoreInfo();
          props.handleChooseWholeNote(id);
        }}
      >
        more info
      </button>
    </div>
  );
};

export default StickyNote;
