import React, { Component } from "react";

class Textbox extends Component {
  state = {
    input: ""
  };
  render() {
    return (
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter Chords!"
        defaultValue={this.state.input}
      />
    );
  }
}

export default Textbox;
