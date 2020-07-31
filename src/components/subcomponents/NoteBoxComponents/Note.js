import React from "react";
import { useHistory } from "react-router-dom";

const Note = (props) => {
  const history = useHistory();
  const handleComeBack = () => {
    history.push("/your-notes");
  };

  const handleOpenEdit = () => {
    history.push("/edit-note");
  };

  return (
    <section>
      <button
        onClick={() => {
          handleComeBack();
          props.clearIdChooseNote();
          props.clearField();
        }}
      >
        come back
      </button>
      <h2>your note</h2>
      <h3>{props.note.title}</h3>
      <p>{props.note.date}</p>
      <p>{props.note.keywords}</p>
      <p>{props.note.content}</p>

      <button
        onClick={() => {
          handleOpenEdit();
          props.handleEditFillField(
            props.note.title,
            props.note.content,
            props.note.keywords
          );
          props.clearStatusAddEditNote();
        }}
      >
        edit
      </button>
    </section>
  );
};

export default Note;
