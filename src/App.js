import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Component Inputs
import ChordsDisplay from "./components/chords-display";
import MainControl from "./components/main-control";
import NavBar from "./components/nav-bar";

class App extends Component {
  state = {
    id: 3,
    chords: [
      { id: 0, chordKey: "Am" },
      { id: 1, chordKey: "G" },
      { id: 2, chordKey: "F" },
      { id: 3, chordKey: "G" }
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
    this.setState({ id });
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

  handleSong = song => {
    const chords = [];
    for (let i = 0; i < song.chords.length; i++) {
      chords.push({ id: i, chordKey: song.chords[i] });
    }
    this.setState({ chords });
  };

  handleToneUp = () => {
    console.log("a", this.state.chords[0].chordKey);

    let chords = [...this.state.chords];
    console.log(this.state.chords);
    for (let i = 0; i < chords.length; i++) {
      let tempKey;
      if (chords[i].chordKey === "None") {
        chords[i].chordKey = "None";
      } else if (chords[i].chordKey.includes("b")) {
        chords[i].chordKey = chords[i].chordKey.replace("b", "");
      } else if (chords[i].chordKey.includes("s")) {
        switch (chords[i].chordKey[0]) {
          case "C":
            tempKey = "Db" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
          case "F":
            tempKey = "G" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
          case "G":
            tempKey = "Ab" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
        }
      } else {
        switch (chords[i].chordKey[0]) {
          case "A":
            tempKey = "Bb" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "B":
            tempKey = "C" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "C":
            tempKey = "Cs" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "D":
            tempKey = "Eb" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "E":
            tempKey = "F" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "F":
            tempKey = "Fs" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "G":
            tempKey = "Gs" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
        }
      }
    }
    this.setState({ chords });
  };

  handleToneDown = () => {
    console.log("a", this.state.chords[0].chordKey);

    let chords = [...this.state.chords];
    console.log(this.state.chords);
    for (let i = 0; i < chords.length; i++) {
      let tempKey;
      if (chords[i].chordKey === "None") {
        chords[i].chordKey = "None";
      } else if (chords[i].chordKey.includes("s")) {
        chords[i].chordKey = chords[i].chordKey.replace("s", "");
      } else if (chords[i].chordKey.includes("b")) {
        switch (chords[i].chordKey[0]) {
          case "A":
            tempKey = "Gs" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
          case "B":
            tempKey = "A" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
          case "D":
            tempKey = "Cs" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
          case "E":
            tempKey = "D" + chords[i].chordKey.slice(2);
            chords[i].chordKey = tempKey;
            break;
        }
      } else {
        switch (chords[i].chordKey[0]) {
          case "A":
            tempKey = "Ab" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "B":
            tempKey = "Bb" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "C":
            tempKey = "B" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "D":
            tempKey = "Db" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "E":
            tempKey = "Eb" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "F":
            tempKey = "E" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
          case "G":
            tempKey = "Fs" + chords[i].chordKey.slice(1);
            chords[i].chordKey = tempKey;
            break;
        }
      }
    }
    this.setState({ chords });
  };

  render() {
    return (
      <div className="App">
        <NavBar onSong={this.handleSong} />
        <ChordsDisplay
          chords={this.state.chords}
          onDelete={this.handleDelete}
          onChange={this.handleChange}
        />
        <MainControl
          onAdd={this.handleAdd}
          onToneUp={this.handleToneUp}
          onToneDown={this.handleToneDown}
        />
      </div>
    );
  }
}

export default App;
