import React, { Component } from "react";
import { connect } from "react-redux";

class SectionTitle extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.dispatch({
      type: "CHANGESECTIONTITLE",
      sectionName: event.target.value,
      sectionID: this.props.sectionID
    });
  }

  render() {
    return (
      <input
        className="SectionTitle"
        type="text"
        onChange={this.handleChange}
        value={
          this.props.song.currentSong.sections[this.props.sectionIndex].name
        }
      />
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SectionTitle);
