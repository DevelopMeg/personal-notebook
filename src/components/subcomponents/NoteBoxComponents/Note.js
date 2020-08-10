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
    <>
      <button
        className="come-back come-back--note"
        onClick={() => {
          handleComeBack();
          props.clearIdChooseNote();
          props.clearField();
        }}
      >
        come back
      </button>
      <div className="section-note__box-image">
        <h2 className="section-note__title">your note</h2>
        <section className="note">
          <h3 className="note__title">{title}</h3>
          <p className="note__date">{date}</p>
          <p className="note__keywords">{keywords}</p>
          <p className="note__content">{content}</p>

          <button
            className="note__btn-edit"
            onClick={() => {
              handleOpenEdit();
              props.handleEditFillField(title, content, keywords);
              props.clearStatusAddEditNote();
            }}
          >
            edit
          </button>
        </section>
      </div>
    </>
  );
};

export default Note;
