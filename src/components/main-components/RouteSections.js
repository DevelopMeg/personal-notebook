import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import WelcomeSection from "../route-components/WelcomeSection";
import CreateNote from "../route-components/CreateNote";
import AddedNote from "../route-components/AddedNote";
import Notes from "../route-components/Notes";
import NoteBox from "../route-components/NoteBox";
import EditNoteBox from "../route-components/EditNoteBox";
import NoPage from "../route-components/NoPage";

class RouteSections extends Component {
  state = {};

  render() {
    return (
      <Switch>
        <Route path="/" exact component={WelcomeSection} />
        <Route
          path="/new-note"
          render={() => {
            return <CreateNote />;
          }}
        />
        <Route
          path="/added-note"
          render={() => {
            return <AddedNote />;
          }}
        />
        <Route
          path="/your-notes"
          render={() => {
            return <Notes />;
          }}
        />
        <Route
          path="/your-note"
          render={() => {
            return <NoteBox />;
          }}
        />
        <Route
          path="/edit-note"
          render={() => {
            return <EditNoteBox />;
          }}
        />
        <Route component={NoPage} />
      </Switch>
    );
  }
}

export default RouteSections;
