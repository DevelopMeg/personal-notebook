import React from "react";
import { useHistory } from "react-router-dom";

const NoNotes = () => {
  const history = useHistory();
  const handleOpenAddNote = () => {
    history.push("/new-note");
  };

  return (
    <section className="section-no-notes">
      <h3 className="section-no-notes__title">You don`t have any notes.</h3>
      <button
        className="section-no-notes__btn-add-note"
        onClick={handleOpenAddNote}
      >
        add note
      </button>
    </section>
  );
};
export default NoNotes;
