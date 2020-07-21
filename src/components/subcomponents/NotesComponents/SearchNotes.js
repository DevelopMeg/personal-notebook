import React from "react";

const SearchNotes = (props) => {
  return (
    <div>
      <div>
        <p>Choose search category</p>
        <button onClick={props.handleChooseSearchCategory}>title</button>
        <button onClick={props.handleChooseSearchCategory}>keywords</button>
        <button onClick={props.clearSearchCategory}>clear</button>
      </div>

      <input
        type="text"
        name="valueSearchNote"
        value={props.valueSearchNote}
        onChange={(e) => {
          props.handleChangeValue(e);
          props.handleSearchNote(e);
        }}
        disabled={!props.chooseSearchCategory ? true : false}
      />
    </div>
  );
};

export default SearchNotes;
