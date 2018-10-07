import React, { Component } from "react";
import { ChordView } from "./view";
import { connect } from "react-redux";
import actionTypes from "../../../../logic/song/actionTypes";
import { KEYS } from "../../../../constants/keys";
import { AddNewChordView } from "./view";

class AddNewChord extends Component {
  addNewChord = () => {
    this.props.dispatch({
      type: actionTypes.ADD_NEW_CHORD,
      sectionID: this.props.sectionIndex
    });
  };

  render() {
    return <AddNewChordView addNewChord={this.addNewChord} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewChord);
