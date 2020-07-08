import React from "react";
import ChooseAction from "../subcomponents/ChooseAction";

const AddedNote = (props) => {
  return (
    <section>
      <p>Congratulations you added new note</p>
      <ChooseAction clearStatusAddNote={props.clearStatusAddNote} />
    </section>
  );
};

export default AddedNote;
