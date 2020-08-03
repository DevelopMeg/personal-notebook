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

  const { title, date, keywords, content } = props.note;

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
      <h3>{title}</h3>
      <p>{date}</p>
      <p>{keywords}</p>
      <p>{content}</p>

      <button
        onClick={() => {
          handleOpenEdit();
          props.handleEditFillField(title, content, keywords);
          props.clearStatusAddEditNote();
        }}
      >
        edit
      </button>
    </section>
  );
};

export default Note;
