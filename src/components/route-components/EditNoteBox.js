import React from "react";
import EditNote from "../subcomponents/EditNoteBoxComponents/EditNote";
import { NavLink } from "react-router-dom";

const EditNoteBox = (props) => {
  const filterNote = props.notesList.filter((note) => {
    return note.id === props.idChooseNote;
  });

  const editNote = filterNote.map((note, id) => {
    return (
      <EditNote
        key={id}
        note={note}
        infoNote={props.infoNote}
        handleChangeValueInfoNote={props.handleChangeValueInfoNote}
        handleAddKeyword={props.handleAddKeyword}
        statusAddEditNote={props.statusAddEditNote}
        handleSaveEditNote={props.handleSaveEditNote}
      />
    );
  });
  return (
    <>
      <NavLink to="/your-note" onClick={props.clearField}>
        come back
      </NavLink>
      <section>{editNote}</section>
    </>
  );
};

export default EditNoteBox;
