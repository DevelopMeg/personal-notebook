import React from "react";

const CountNotes = (props) => {
  return (
    <section className="section-count-notes">
      <h3 className="section-count-notes__title">Count of your notes</h3>
      <p
        className="section-count-notes__number"
        style={
          props.notesList.length !== 0 ? { color: "green" } : { color: "red" }
        }
      >
        {props.notesList.length}
      </p>
    </section>
  );
};

export default CountNotes;
