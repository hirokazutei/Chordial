import React, { Component } from "react";
import { ButtonGroup, Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

class ToneButton extends Component {
  handleToneUp = () => {
    let chords = [...this.props.chords];
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
          default:
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
          default:
            break;
        }
      }
    }
    this.props.dispatch({ type: "TONEUP", newChords: chords });
  };

  handleToneDown = () => {
    let chords = [...this.props.chords];
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
          default:
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
          default:
            break;
        }
      }
    }
    this.props.dispatch({ type: "TONEDOWN", newChords: chords });
  };

  render() {
    return (
      <ButtonGroup vertical className="ToneButtons">
        <Button onClick={this.handleToneUp} className="UpToneButton">
          <Glyphicon glyph="glyphicon glyphicon-chevron-up" />
        </Button>
        <Button onClick={this.handleToneDown} className="UpToneButton">
          <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
        </Button>
      </ButtonGroup>
    );
  }
}
const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(ToneButton);
