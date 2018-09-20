import React, { Component } from "react";
import { connect } from "react-redux";

class AddNewSection extends Component {
  handleAddNewSection = () => {
    this.props.dispatch({ type: "ADDNEWSECTION" });
  };
  render() {
    return (
      <button className="AddNewSection" onClick={this.handleAddNewSection}>
        ADDEM
      </button>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(AddNewSection);
