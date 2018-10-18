import React, { Component } from "react";
import { connect } from "react-redux";

import actionTypes from "../../../logic/song/actionTypes";

import AddNewSectionView from "./view";

class AddNewSection extends Component {
  addNewSection = () => {
    this.props.dispatch({ type: actionTypes.ADD_NEW_SECTION });
  };

  render() {
    return <AddNewSectionView addNewSection={this.addNewSection} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewSection);
