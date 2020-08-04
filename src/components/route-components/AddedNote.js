import React from "react";
import ChooseAction from "../subcomponents/ChooseAction";

const AddedNote = (props) => {
  return (
    <section className="section-added-note">
      <h2 className="section-added-note__title">
        Congratulations you added new note to notes!
      </h2>
      <ChooseAction clearStatusAddNote={props.clearStatusAddNote} />
    </section>
  );
};

export default AddedNote;
