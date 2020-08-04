import React from "react";
import { Redirect } from "react-router-dom";

const EditNote = (props) => {
  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  const keywords = keywordsList.map((keyword, id) => {
    return (
      <div key={id} id={id}>
        <span>{keyword}</span>
        <button onClick={props.handleDeleteKeyword}>X</button>
      </div>
    );
  });

  return (
    <>
      <h2>Edit your note</h2>
      <form onSubmit={props.handleSaveEditNote}>
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

          {keywords.length !== 0 ? (
            <div className="keyword-list">{keywords}</div>
          ) : null}
        </div>

        <input
          type="submit"
          value="save changes"
          disabled={
            titleNote.length === 0 ||
            contentNote.length === 0 ||
            keywordsNote.length !== 0
              ? true
              : false
          }
        ></input>
      </form>

      {props.statusAddEditNote ? <Redirect to="/your-note" /> : null}
    </>
  );
};

export default EditNote;
