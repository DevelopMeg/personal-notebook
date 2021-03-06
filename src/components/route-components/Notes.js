import React from "react";
import SearchNotes from "../subcomponents/NotesComponents/SearchNotes";
import SortNotes from "../subcomponents/NotesComponents/SortNotes";
import CountNotes from "../subcomponents/NotesComponents/CountNotes";
import StickyNotes from "../subcomponents/NotesComponents/StickyNotes";
import NoNotes from "../subcomponents/NotesComponents/NoNotes";
import { useHistory } from "react-router-dom";

const Notes = (props) => {
  const history = useHistory();
  const handleComeBack = () => {
    history.push("/");
  };

  let list;
  if (props.valueSearchNote.length !== 0) {
    list = props.filterNotesList;
  } else if (props.sortNotesList.length !== 0) {
    list = props.sortNotesList;
  } else {
    list = props.notesList;
  }

  return (
    <section className="section-notes">
      <button className="come-back come-back--notes" onClick={handleComeBack}>
        come back
      </button>
      <h2 className="section-notes__title">your notes</h2>

      <div className="section-notes__box-image"></div>

      <SearchNotes
        handleChooseSearchCategory={props.handleChooseSearchCategory}
        chooseSearchCategory={props.chooseSearchCategory}
        clearSearchCategory={props.clearSearchCategory}
        valueSearchNote={props.valueSearchNote}
        handleChangeValue={props.handleChangeValue}
        handleSearchNote={props.handleSearchNote}
      />

      <SortNotes
        handleChangeValue={props.handleChangeValue}
        valueSortNote={props.valueSortNote}
      />

      <CountNotes notesList={props.notesList} />

      {props.notesList.length !== 0 ? (
        <StickyNotes
          list={list}
          handleDeleteNote={props.handleDeleteNote}
          handleChooseWholeNote={props.handleChooseWholeNote}
        />
      ) : (
        <NoNotes />
      )}
    </section>
  );
};

export default Notes;
