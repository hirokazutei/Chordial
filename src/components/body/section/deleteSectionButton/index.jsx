import React, { Component } from "react";
import { connect } from "react-redux";
import actionTypes from "../../../../logic/song/actionTypes";
import { DeleteSectionButtonView } from "./view";

class DeleteSectionButton extends Component {
  deleteSection = () => {
    this.props.dispatch({
      type: actionTypes.DELETE_SECTION,
      sectionID: this.props.sectionID
    });
  };

  render() {
    return <DeleteSectionButtonView deleteSection={this.deleteSection} />;
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DeleteSectionButton);
