import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const CreateNote = (props) => {
  const history = useHistory();
  const handleComeBack = () => {
    history.push("/");
  };

  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  const keywords = keywordsList.map((keyword, id) => {
    return (
      <div key={id} id={id} class="keywords-list__keyword">
        <span class="keywords-list__name-keyword">{keyword}</span>
        <button
          class=" keywords-list__delete-keyword"
          onClick={props.handleDeleteKeyword}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <section className="section-create-note">
      <button
        className="come-back come-back--create-note"
        onClick={() => {
          handleComeBack();
          props.clearField();
        }}
      >
        come back
      </button>
      <h2 className="section-create-note__title">Create new note</h2>
      <form className="form-create-note" onSubmit={props.handleAddNote}>
        <div className="form-box">
          <label htmlFor="title" className="form-create-note__label">
            title
          </label>
          <input
            type="text"
            id="title"
            name="titleNote"
            className="form-create-note__title"
            onChange={props.handleChangeValueInfoNote}
            value={titleNote}
          />
        </div>

        <div className="form-box">
          <label htmlFor="content" className="form-create-note__label">
            content
          </label>
          <textarea
            id="content"
            name="contentNote"
            className="form-create-note__content"
            onChange={props.handleChangeValueInfoNote}
            value={contentNote}
          ></textarea>
        </div>

        <div className="form-box">
          <label htmlFor="keywords" className="form-create-note__label">
            keywords
          </label>

          <div className="form-box-add-keywords">
            <input
              type="text"
              id="keywords"
              name="keywordsNote"
              className="form-create-note__keywords"
              onChange={props.handleChangeValueInfoNote}
              value={keywordsNote}
            />
            <button
              onClick={props.handleAddKeyword}
              disabled={keywordsNote.length === 0 ? true : false}
              className="form-create-note__btn-add-keyword"
            >
              add keyword
            </button>
          </div>
          {keywords.length !== 0 && (
            <div className="keywords-list">{keywords}</div>
          )}
        </div>

        <input
          type="submit"
          value="add note"
          className="form-create-note__submit"
          disabled={
            titleNote.length === 0 ||
            contentNote.length === 0 ||
            keywordsNote.length !== 0
              ? true
              : false
          }
        />

        {props.statusAddNote ? <Redirect to="/added-note" /> : null}
      </form>
    </section>
  );
};

export default CreateNote;
