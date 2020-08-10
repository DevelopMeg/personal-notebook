import React from "react";
import EditNote from "../subcomponents/EditNoteBoxComponents/EditNote";

const EditNoteBox = (props) => {
  const filterNote = props.notesList.filter((note) => {
    return note.id === props.idChooseNote;
  });

  const editNote = filterNote.map((note, id) => {
    return (
      <EditNote
        key={id}
        infoNote={props.infoNote}
        handleChangeValueInfoNote={props.handleChangeValueInfoNote}
        handleAddKeyword={props.handleAddKeyword}
        statusAddEditNote={props.statusAddEditNote}
        handleSaveEditNote={props.handleSaveEditNote}
        handleDeleteKeyword={props.handleDeleteKeyword}
        clearField={props.clearField}
      />
    );
  });
  return <section className="section-edit-note">{editNote}</section>;
};

export default EditNoteBox;
