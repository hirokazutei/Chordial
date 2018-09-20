import React, { Component } from "react";
import { connect } from "react-redux";
import ChordsDisplay from "./chords-display";
import AddNewSection from "./add-new-section";

class Body extends Component {
  state = {};
  render() {
    return (
      <div>
        {this.props.song.sections.map(section => (
          <ChordsDisplay
            onDelete={this.handleDelete}
            sectionID={section.id}
            key={section.id}
          />
        ))}
        <AddNewSection />
      </div>
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(Body);
