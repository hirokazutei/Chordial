import React, { Component } from "react";
import { Button, Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

class AddNewChord extends Component {
  handleAdd = () => {
    this.props.dispatch({ type: "CHORDADD" });
  };

  render() {
    return (
      <Button bsStyle="success" onClick={this.handleAdd}>
        <h5>Add Chord </h5>
        <Glyphicon glyph="glyphicon glyphicon-plus" />
      </Button>
    );
  }
}

const mapStateToProps = state => ({
  id: state.id,
  chords: state.chords
});

export default connect(mapStateToProps)(AddNewChord);
