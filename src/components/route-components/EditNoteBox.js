import React from "react";
import EditNote from "../subcomponents/EditNoteBoxComponents/EditNote";

const EditNoteBox = (props) => {
  const filterNote = props.notesList.filter((note) => {
    return note.id === props.idChooseNote;
  });

  const editNote = filterNote.map((note, id) => {
    return <EditNote key={id} note={note} />;
  });
  return (
    <>
      <section>{editNote}</section>
    </>
  );
};

export default EditNoteBox;
