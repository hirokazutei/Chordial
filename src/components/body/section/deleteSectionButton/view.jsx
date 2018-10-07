import React from "react";
import { Glyphicon } from "react-bootstrap";

export const DeleteSectionButtonView = props => {
  return (
    <button onClick={props.deleteSection}>
      <Glyphicon glyph="glyphicon glyphicon-remove" />
    </button>
  );
};
