import React from "react";
import { Redirect } from "react-router-dom";

const EditNote = (props) => {
  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  const keywords = keywordsList.map((keyword, id) => {
    return (
      <div key={id} id={id}>
        <p>{keyword}</p>
      </div>
    );
  });

  return (
    <>
      <h2>Edit your note</h2>
      <form>
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
          <div className="keyword-list">{keywords}</div>
        </div>

        <input type="submit" value="save changes"></input>
      </form>

      {props.statusAddEditNote ? <Redirect to="/your-note" /> : null}
    </>
  );
};

export default EditNote;
