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
  state = {
    infoNote: {
      titleNote: "",
      contentNote: "",
      keywordsNote: "",
      keywordsList: [],
    },
  };

  // handle label

  handleChangeValueInfoNote = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState((prevState) => ({
      infoNote: {
        ...prevState.infoNote,
        [name]: value,
      },
    }));
  };

  render() {
    return (
      <Switch>
        <Route path="/" exact component={WelcomeSection} />
        <Route
          path="/new-note"
          render={() => {
            return (
              <CreateNote
                infoNote={this.state.infoNote}
                handleChangeValueInfoNote={this.handleChangeValueInfoNote}
              />
            );
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
