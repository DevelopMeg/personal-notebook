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
    statusAddNote: false,
    notesList: [],

    chooseSearchCategory: "",
    valueSearchNote: "",

    valueSortNote: "",
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

  handleChooseSearchCategory = (e) => {
    const category = e.target.innerText;

    this.setState({
      chooseSearchCategory: category,
    });
  };

  handleChangeValue = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value,
    });
  };

  // add note

  handleAddNote = (e) => {
    e.preventDefault();

    const { titleNote, contentNote, keywordsList } = this.state.infoNote;

    const generateId = Math.random().toString(36).substr(2, 9);

    const date = new Date();
    const noteDate = date.toLocaleString();

    let notesList = [...this.state.notesList];

    notesList.push({
      id: generateId,
      title: `${titleNote}`,
      content: `${contentNote}`,
      keywords: `${keywordsList}`,
      date: noteDate,
    });

    this.setState((prevState) => ({
      infoNote: {
        ...prevState.infoNote,
        titleNote: "",
        contentNote: "",
        keywordsList: [],
      },
      statusAddNote: true,
      notesList,
    }));
  };

  // add keyword to note

  handleAddKeyword = (e) => {
    e.preventDefault();

    const keywordsList = [...this.state.infoNote.keywordsList];

    keywordsList.push(`#${this.state.infoNote.keywordsNote}`);

    this.setState((prevState) => ({
      infoNote: {
        ...prevState.infoNote,
        keywordsNote: "",
        keywordsList,
      },
    }));
  };

  // clear

  clearField = () => {
    this.setState((prevState) => ({
      infoNote: {
        ...prevState.infoNote,
        titleNote: "",
        contentNote: "",
        keywordsList: [],
      },
    }));
  };

  clearStatusAddNote = () => {
    this.setState({
      statusAddNote: false,
    });
  };

  clearSearchCategory = () => {
    this.setState({
      chooseSearchCategory: "",
      valueSearchNote: "",
    });
  };

  render() {
    const {
      notesList,
      infoNote,
      statusAddNote,
      chooseSearchCategory,
      valueSearchNote,
      valueSortNote,
    } = this.state;

    return (
      <Switch>
        <Route path="/" exact component={WelcomeSection} />
        <Route
          path="/new-note"
          render={() => {
            return (
              <CreateNote
                infoNote={infoNote}
                handleChangeValueInfoNote={this.handleChangeValueInfoNote}
                handleAddNote={this.handleAddNote}
                handleAddKeyword={this.handleAddKeyword}
                clearField={this.clearField}
                statusAddNote={statusAddNote}
              />
            );
          }}
        />
        <Route
          path="/added-note"
          render={() => {
            return <AddedNote clearStatusAddNote={this.clearStatusAddNote} />;
          }}
        />
        <Route
          path="/your-notes"
          render={() => {
            return (
              <Notes
                notesList={notesList}
                handleChooseSearchCategory={this.handleChooseSearchCategory}
                chooseSearchCategory={chooseSearchCategory}
                clearSearchCategory={this.clearSearchCategory}
                valueSearchNote={valueSearchNote}
                valueSortNote={valueSortNote}
                handleChangeValue={this.handleChangeValue}
              />
            );
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
