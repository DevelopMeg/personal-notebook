import React from "react";
import Note from "../subcomponents/NoteBoxComponents/Note";

const NoteBox = (props) => {
  const filterChooseNote = props.notesList.filter((note) => {
    return note.id === props.idChooseNote;
  });

  const note = filterChooseNote.map((note, id) => {
    return (
      <Note
        key={id}
        note={note}
        clearIdChooseNote={props.clearIdChooseNote}
        clearField={props.clearField}
      />
    );
  });

  return <section>{note}</section>;
};

export default NoteBox;
