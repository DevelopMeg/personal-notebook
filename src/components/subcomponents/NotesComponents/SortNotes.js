import React from "react";

const SortNotes = (props) => {
  return (
    <section>
      <label>sort notes</label>
      <select
        name="valueSortNote"
        value={props.valueSortNote}
        onChange={props.handleChangeValue}
      >
        <option value="default">Default</option>
        <option value="Title A-Z">Title A-Z</option>
        <option value="Title Z-A">Title Z-A</option>
        <option value="Earliest Date">Earliest Date</option>
        <option value="Latest Date">Latest Date</option>
      </select>
    </section>
  );
};

export default SortNotes;
