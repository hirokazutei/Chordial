import React, { Component } from "react";
import { Glyphicon } from "react-bootstrap";
import { connect } from "react-redux";

class AddNewChord extends Component {
  handleAdd = () => {
    this.props.dispatch({ type: "CHORDADD", sectionID: this.props.sectionID });
  };

  render() {
    return (
      <button onClick={this.handleAdd} className="AddNewChord">
        Add Chord <br />
        <Glyphicon glyph="glyphicon glyphicon-plus" />
      </button>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewChord);
