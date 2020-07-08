import React from "react";
import { NavLink } from "react-router-dom";

const CreateNote = (props) => {
  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  return (
    <section>
      <h2>Create new note</h2>
      <NavLink to="/">come back</NavLink>
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
          <button>add keyword</button>
          <div className="keyword-list">{keywordsList}</div>
        </div>

        <input type="submit" value="add note" />
      </form>
    </section>
  );
};

export default CreateNote;
