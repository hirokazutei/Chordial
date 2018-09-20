import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Glyphicon } from "react-bootstrap";

class DeleteChordButton extends Component {
  handleDelete = chordID => {
    this.props.dispatch({ type: "CHORDDELETE", chordID: chordID });
  };

  render() {
    return (
      <Button
        onClick={() => this.handleDelete(this.props.chordId)}
        className="DeleteChordButton"
      >
        <Glyphicon glyph="glyphicon glyphicon-remove" />
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(DeleteChordButton);
