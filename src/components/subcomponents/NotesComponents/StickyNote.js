import React from "react";
import { useHistory } from "react-router-dom";

const StickyNote = (props) => {
  const history = useHistory();
  const handleOpenMoreInfo = () => {
    history.push("/your-note");
  };

  const { id, date, title, keywords } = props.note;

  return (
    <div id={id} className="sticky-note">
      <button className="sticky-note__delete" onClick={props.handleDeleteNote}>
        X
      </button>
      <p className="sticky-note__date">{date}</p>
      <h3 className="sticky-note__title">{title}</h3>
      {keywords.length !== 0 ? (
        <p className="sticky-note__keywords">{keywords}</p>
      ) : (
        <p>-</p>
      )}
      <button
        className="sticky-note__btn-more-info"
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
