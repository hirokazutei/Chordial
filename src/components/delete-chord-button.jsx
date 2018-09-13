import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

class DeleteChordButton extends Component {
  render() {
    return (
      <Button
        onClick={() => this.props.onDelete(this.props.chordId)}
        className="DeleteChordButton"
      >
        <Glyphicon glyph="glyphicon glyphicon-remove" />
      </Button>
    );
  }
}

export default DeleteChordButton;
