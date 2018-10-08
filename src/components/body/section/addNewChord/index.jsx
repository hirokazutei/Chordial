import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../../logic/song/actionTypes";

import { AddNewChordView } from "./view";

class AddNewChord extends Component {
  addNewChord = () => {
    this.props.dispatch({
      type: actionTypes.ADD_NEW_CHORD,
      sectionID: this.props.sectionID
    });
  };

  render() {
    return <AddNewChordView addNewChord={this.addNewChord} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewChord);
