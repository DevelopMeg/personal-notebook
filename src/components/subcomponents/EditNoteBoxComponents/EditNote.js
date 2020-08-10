import React from "react";
import { Redirect, useHistory } from "react-router-dom";

const EditNote = (props) => {
  const history = useHistory();

  const handleComeBack = () => {
    history.push("/your-note");
  };

  const { titleNote, contentNote, keywordsNote, keywordsList } = props.infoNote;

  const keywords = keywordsList.map((keyword, id) => {
    return (
      <div key={id} id={id} className="keywords-list__keyword">
        <span className="keywords-list__name-keyword">{keyword}</span>
        <button
          className="keywords-list__delete-keyword"
          onClick={props.handleDeleteKeyword}
        >
          X
        </button>
      </div>
    );
  });

  return (
    <>
      <button
        className="come-back"
        onClick={() => {
          handleComeBack();
          props.clearField();
        }}
      >
        come back
      </button>
      <h2 className="section-edit-note__title">Edit your note</h2>
      <form className="form-edit-note" onSubmit={props.handleSaveEditNote}>
        <div className="form-box">
          <label className="form-edit-note__label" htmlFor="title">
            title
          </label>
          <input
            type="text"
            id="title"
            name="titleNote"
            className="form-edit-note__title"
            onChange={props.handleChangeValueInfoNote}
            value={titleNote}
          />
        </div>

        <div className="form-box">
          <label className="form-edit-note__label" htmlFor="content">
            content
          </label>
          <textarea
            id="content"
            name="contentNote"
            className="form-edit-note__content"
            onChange={props.handleChangeValueInfoNote}
            value={contentNote}
          ></textarea>
        </div>

        <div className="form-box">
          <label className="form-edit-note__label" htmlFor="keywords">
            keywords
          </label>
          <div className="form-box-add-keywords">
            <input
              type="text"
              id="keywords"
              name="keywordsNote"
              className="form-edit-note__keywords"
              onChange={props.handleChangeValueInfoNote}
              value={keywordsNote}
            />
            <button
              className="form-edit-note__btn-add-keyword"
              onClick={props.handleAddKeyword}
              disabled={keywordsNote.length === 0 ? true : false}
            >
              add keyword
            </button>
          </div>
          {keywords.length !== 0 ? (
            <div className="keywords-list">{keywords}</div>
          ) : null}
        </div>

        <input
          type="submit"
          value="save changes"
          className="form-edit-note__submit"
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
