import React from "react";
import EditNote from "../subcomponents/EditNoteBoxComponents/EditNote";
import { useHistory } from "react-router-dom";

const EditNoteBox = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/your-note");
  };

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
      />
    );
  });
  return (
    <>
      <button
        onClick={() => {
          handleComeBack();
          props.clearField();
        }}
      >
        come back
      </button>
      <section>{editNote}</section>
    </>
  );
};

export default EditNoteBox;
