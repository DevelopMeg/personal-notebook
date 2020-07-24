import React from "react";
import StickyNote from "./StickyNote";

const StickyNotes = (props) => {
  const stickyNote = props.list.map((note, id) => {
    return <StickyNote key={id} />;
  });
  return <section className="sticky-note">{stickyNote}</section>;
};

export default StickyNotes;
