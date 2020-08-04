import React from "react";
import { NavLink } from "react-router-dom";

const ChooseAction = (props) => {
  return (
    <div className="choose-action">
      <NavLink
        to="/your-notes"
        className="choose-action__btn link"
        onClick={props.clearStatusAddNote}
      >
        your notes
      </NavLink>
      <NavLink
        to="/new-note"
        className="choose-action__btn link"
        onClick={props.clearStatusAddNote}
      >
        create new note
      </NavLink>
    </div>
  );
};

export default ChooseAction;
