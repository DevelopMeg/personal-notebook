import React, { useRef } from "react";

const SearchNotes = (props) => {
  const btnTitleRef = useRef();
  const btnKeywordsRef = useRef();

  const handleAddStylesToSearchCategory = (currentBtn, siblingBtn) => {
    currentBtn.className += " search-options__category--active";
    siblingBtn.classList.remove("search-options__category--active");
  };

  const handleClearStylesToSearchCategory = (...btns) => {
    btns.forEach((btn) => {
      btn.classList.remove("search-options__category--active");
    });
  };

  return (
    <section className="section-search-notes">
      <h3 className="section-search-notes__title">Choose search category</h3>

      <div className="search-options">
        <button
          className="search-options__category"
          onClick={(e) => {
            props.handleChooseSearchCategory(e);
            handleAddStylesToSearchCategory(
              btnTitleRef.current,
              btnKeywordsRef.current
            );
          }}
          ref={btnTitleRef}
        >
          title
        </button>
        <button
          className="search-options__category"
          onClick={(e) => {
            props.handleChooseSearchCategory(e);
            handleAddStylesToSearchCategory(
              btnKeywordsRef.current,
              btnTitleRef.current
            );
          }}
          ref={btnKeywordsRef}
        >
          keywords
        </button>
        <button
          className="search-options__clear-category"
          onClick={() => {
            props.clearSearchCategory();
            handleClearStylesToSearchCategory(
              btnTitleRef.current,
              btnKeywordsRef.current
            );
          }}
        >
          clear
        </button>
      </div>

      <input
        type="text"
        name="valueSearchNote"
        className="section-search-notes__input"
        placeholder="search..."
        value={props.valueSearchNote}
        onChange={(e) => {
          props.handleChangeValue(e);
          props.handleSearchNote(e);
        }}
        disabled={!props.chooseSearchCategory ? true : false}
      />
    </section>
  );
};

export default SearchNotes;
