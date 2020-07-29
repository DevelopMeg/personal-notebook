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
    statusAddEditNote: false,
    notesList: [],

    filterNotesList: [],
    sortNotesList: [],
    chooseSearchCategory: "",
    valueSearchNote: "",
    valueSortNote: "default",

    idChooseNote: "",
  };

  // sort notes

  componentDidUpdate(prevProps, prevState) {
    if (prevState.valueSortNote !== this.state.valueSortNote) {
      const notesList = [...this.state.notesList];
      let sortNotesList;

      const { valueSortNote } = this.state;

      if (valueSortNote === "default") {
        sortNotesList = [];
      } else {
        let sortBy;
        if (valueSortNote === "Title A-Z") {
          sortBy = (a, b) => {
            if (a.title < b.title) {
              return -1;
            }
            if (a.title > b.title) {
              return 1;
            }
            return 0;
          };
        } else if (valueSortNote === "Title Z-A") {
          sortBy = (a, b) => {
            if (a.title < b.title) {
              return 1;
            }
            if (a.title > b.title) {
              return -1;
            }
            return 0;
          };
        } else if (valueSortNote === "Earliest Date") {
          sortBy = (a, b) => {
            if (a.date < b.date) {
              return -1;
            }
            if (a.date > b.date) {
              return 1;
            }
            return 0;
          };
        } else if (valueSortNote === "Latest Date") {
          sortBy = (a, b) => {
            if (a.date < b.date) {
              return 1;
            }
            if (a.date > b.date) {
              return -1;
            }
            return 0;
          };
        }
        sortNotesList = notesList.sort(sortBy);
      }

      this.setState({
        sortNotesList,
      });
    }
  }

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

  // whole note - more info

  handleChooseWholeNote = (id) => {
    this.setState({
      idChooseNote: id,
    });
  };

  // search note

  handleSearchNote = (e) => {
    let filterNotesList = [...this.state.notesList];

    filterNotesList = filterNotesList.filter((note, id) => {
      const searchCategory = note[this.state.chooseSearchCategory];

      return searchCategory.includes(e.target.value);
    });

    this.setState({
      filterNotesList,
    });
  };

  // delete note with sticky

  handleDeleteNote = (e) => {
    const idStickyNote = e.target.parentNode.id;
    const notesList = [...this.state.notesList];

    const idDeleteNote = notesList.findIndex((note, id) => {
      return idStickyNote === note.id;
    });

    notesList.splice(idDeleteNote, 1);

    this.setState({
      notesList,
    });
  };

  // edit note

  handleEditFillField = (title, content, keywords) => {
    const keywordsList = keywords.split(",");

    this.setState((prevState) => ({
      infoNote: {
        ...prevState.infoNote,
        titleNote: title,
        contentNote: content,
        keywordsList,
      },
    }));
  };

  // clear

  clearIdChooseNote = () => {
    this.setState({
      idChooseNote: "",
    });
  };

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

  clearStatusAddEditNote = () => {
    this.setState({
      statusAddEditNote: false,
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
      filterNotesList,
      sortNotesList,
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
                handleSearchNote={this.handleSearchNote}
                filterNotesList={filterNotesList}
                sortNotesList={sortNotesList}
                handleDeleteNote={this.handleDeleteNote}
                handleChooseWholeNote={this.handleChooseWholeNote}
              />
            );
          }}
        />
        <Route
          path="/your-note"
          render={() => {
            return (
              <NoteBox
                notesList={this.state.notesList}
                idChooseNote={this.state.idChooseNote}
                clearIdChooseNote={this.clearIdChooseNote}
                clearField={this.clearField}
                handleEditFillField={this.handleEditFillField}
                clearStatusAddEditNote={this.clearStatusAddEditNote}
              />
            );
          }}
        />
        <Route
          path="/edit-note"
          render={() => {
            return (
              <EditNoteBox
                notesList={this.state.notesList}
                idChooseNote={this.state.idChooseNote}
                infoNote={this.state.infoNote}
                handleChangeValueInfoNote={this.handleChangeValueInfoNote}
                clearField={this.clearField}
                statusAddEditNote={this.state.statusAddEditNote}
                handleAddKeyword={this.handleAddKeyword}
              />
            );
          }}
        />
        <Route component={NoPage} />
      </Switch>
    );
  }
}

export default RouteSections;
