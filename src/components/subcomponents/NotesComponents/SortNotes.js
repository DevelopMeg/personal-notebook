import React from "react";

const SortNotes = (props) => {
  return (
    <section className="section-sort-notes">
      <h3 className="section-sort-notes__title">sort notes by</h3>
      <select
        name="valueSortNote"
        className="sort-notes"
        value={props.valueSortNote}
        onChange={props.handleChangeValue}
      >
        <option value="default" className="sort-notes__option">
          Default
        </option>
        <option value="Title A-Z" className="sort-notes__option">
          Title A-Z
        </option>
        <option value="Title Z-A" className="sort-notes__option">
          Title Z-A
        </option>
        <option value="Earliest Date" className="sort-notes__option">
          Earliest Date
        </option>
        <option value="Latest Date" className="sort-notes__option">
          Latest Date
        </option>
      </select>
    </section>
  );
};

export default SortNotes;
