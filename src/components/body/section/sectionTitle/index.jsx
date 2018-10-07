import React, { Component } from "react";
import { connect } from "react-redux";
import { SectionTitleView } from "./view";
import actionType from "../../../../logic/song/actionTypes";

class SectionTitle extends Component {
  changeTitle = event => {
    console.log(event);
    this.props.dispatch({
      type: actionType.CHANGE_SECTION_TITLE,
      sectionName: event.target.value,
      sectionID: this.props.sectionID
    });
  };

  render() {
    return (
      <SectionTitleView
        changeTitle={this.changeTitle}
        value={
          this.props.song.currentSong.sections[this.props.sectionIndex].name
        }
      />
    );
  }
}

const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SectionTitle);
