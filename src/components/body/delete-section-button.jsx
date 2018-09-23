import React, { Component } from "react";
import { connect } from "react-redux";

import { Button, Glyphicon } from "react-bootstrap";

class DeleteSectionButton extends Component {
  handleDeleteSection = sectionID => {
    this.props.dispatch({ type: "SECTIONDELETE", sectionID: sectionID });
  };

  render() {
    return (
      <Button
        onClick={() => this.handleDeleteSection(this.props.sectionID)}
        className="DeleteSectionButton"
      >
        <Glyphicon glyph="glyphicon glyphicon-remove" />
      </Button>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(DeleteSectionButton);
