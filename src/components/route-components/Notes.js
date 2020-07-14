import React from "react";
import { NavLink } from "react-router-dom";
import SearchNotes from "../subcomponents/NotesComponents/SearchNotes";
import SortNotes from "../subcomponents/NotesComponents/SortNotes";
import CountNotes from "../subcomponents/NotesComponents/CountNotes";
import StickyNotes from "../subcomponents/NotesComponents/StickyNotes";
import NoNotes from "../subcomponents/NotesComponents/NoNotes";

const Notes = (props) => {
  return (
    <>
      <NavLink to="/" exact>
        come back
      </NavLink>
      <h2>your notes</h2>

      <SearchNotes />

      <SortNotes />

      <CountNotes notesList={props.notesList} />

      {props.notesList.length !== 0 ? <StickyNotes /> : <NoNotes />}
    </>
  );
};

export default Notes;
