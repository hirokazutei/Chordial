import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Component Inputs
import ChordsDisplay from "./components/chords-display";
import MainControl from "./components/main-control";
import NavBar from "./components/nav-bar";

class App extends Component {
  state = {
    id: 4,
    chords: [
      { id: 1, chordKey: "Am" },
      { id: 2, chordKey: "G" },
      { id: 3, chordKey: "F" }
    ]
  };

  handleDelete = chordID => {
    const chords = this.state.chords.filter(chord => chord.id !== chordID);
    this.setState({ chords });
  };

  handleAdd = () => {
    const chords = [...this.state.chords];
    chords.push({ id: this.state.id, chordKey: "A" });
    let id = this.state.id + 1;
    console.log(this.state.id);
    this.setState({ id });
    console.log(this.state.id);
    this.setState({ chords });
  };

  handleChange = (id, newKey) => {
    const chords = [...this.state.chords];
    for (let i = 0; i < chords.length; i++) {
      if (chords[i].id === id) {
        chords[i].chordKey = newKey;
      }
    }
    this.setState({ chords });
  };

  render() {
    return (
      <div className="App">
        <NavBar />
        <ChordsDisplay
          chords={this.state.chords}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
        />
        <MainControl onAdd={this.handleAdd} />
      </div>
    );
  }
}

export default App;
