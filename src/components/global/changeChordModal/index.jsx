import React, { Component } from "react";
import ChangeChordModalView from "./view";
import { connect } from "react-redux";

//const KEYS = require("../../../static/constants");

class ChangeChordModal extends Component {
  modalSelector = () => {
    if (this.props.changeChordModal && this.props.changeChordModal.show) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    if (!this.modalSelector()) {
      return null;
    } else {
      return <ChangeChordModalView />;
    }
  }
}

const mapStateToProps = state => ({
  changeChordModal: state.component.changeChordModal
});

export default connect(mapStateToProps)(ChangeChordModal);
