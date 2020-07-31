import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const CreateNote = (props) => {
  const history = useHistory();
  const handleComeBack = () => {
    history.push("/");
  };

  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  return (
    <section>
      <h2>Create new note</h2>
      <button
        onClick={() => {
          handleComeBack();
          props.clearField();
        }}
      >
        come back
      </button>
      <form onSubmit={props.handleAddNote}>
        <label htmlFor="title">title</label>
        <input
          type="text"
          id="title"
          name="titleNote"
          onChange={props.handleChangeValueInfoNote}
          value={titleNote}
        />
        <label htmlFor="content">content</label>
        <textarea
          id="content"
          name="contentNote"
          onChange={props.handleChangeValueInfoNote}
          value={contentNote}
        ></textarea>

        <div>
          <label htmlFor="keywords">keywords</label>
          <input
            type="text"
            id="keywords"
            name="keywordsNote"
            onChange={props.handleChangeValueInfoNote}
            value={keywordsNote}
          />
          <button
            onClick={props.handleAddKeyword}
            disabled={keywordsNote.length === 0 ? true : false}
          >
            add keyword
          </button>
          <div className="keyword-list">{keywordsList}</div>
        </div>

        <input
          type="submit"
          value="add note"
          disabled={
            titleNote.length === 0 || contentNote.length === 0 ? true : false
          }
        />

        {props.statusAddNote ? <Redirect to="/added-note" /> : null}
      </form>
    </section>
  );
};

export default CreateNote;
