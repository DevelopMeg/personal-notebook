import React from "react";
import StickyNote from "./StickyNote";

const StickyNotes = (props) => {
  const stickyNote = props.list.map((note, id) => {
    return (
      <StickyNote
        key={id}
        note={note}
        handleDeleteNote={props.handleDeleteNote}
        handleChooseWholeNote={props.handleChooseWholeNote}
      />
    );
  });
  return <section className="sticky-note">{stickyNote}</section>;
};

export default StickyNotes;
