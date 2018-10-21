import React, { Component } from "react";
import { ChangeChordModalView } from "./view";
import { connect } from "react-redux";
import { KEYS } from "../../../constants/keys";
import actionTypes from "../../../logic/song/actionTypes";

class ChangeChordModal extends Component {
  modalSelector = () => {
    if (this.props.changeChordModal && this.props.changeChordModal.show) {
      return true;
    } else {
      return false;
    }
  };

  changeChord = key => {
    this.props.dispatch({
      type: actionTypes.CHANGE_CHORD_KEY,
      id: this.props.changeChordModal.id,
      newKey: key
    });
  };

  render() {
    if (!this.modalSelector()) {
      return <div />;
    } else {
      return (
        <ChangeChordModalView KEYS={KEYS} changeChord={this.changeChord} />
      );
    }
  }
}

const mapStateToProps = state => ({
  changeChordModal: state.component.modal.changeChordModal
});

export default connect(mapStateToProps)(ChangeChordModal);
