import React, { Component } from "react";
import { ButtonGroup, Button, Glyphicon } from "react-bootstrap";

class ToneButton extends Component {
  render() {
    return (
      <ButtonGroup vertical className="ToneButtons">
        <Button onClick={this.props.onToneUp} className="UpToneButton">
          <Glyphicon glyph="glyphicon glyphicon-chevron-up" />
        </Button>
        <Button onClick={this.props.onToneDown} className="UpToneButton">
          <Glyphicon glyph="glyphicon glyphicon-chevron-down" />
        </Button>
      </ButtonGroup>
    );
  }
}

export default ToneButton;
