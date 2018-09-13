import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";

class AddNewChord extends Component {
  render() {
    return (
      <Button bsStyle="success" onClick={this.props.onAdd}>
        <h5>Add Chord </h5>
        <Glyphicon glyph="glyphicon glyphicon-plus" />
      </Button>
    );
  }
}

export default AddNewChord;
