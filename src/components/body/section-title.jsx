import React, { Component } from "react";
import { connect } from "react-redux";

class SectionTitle extends Component {
  state = {
    value: ""
  };
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    let value = this.props.song.sections[this.props.sectionID].name;
    this.setState({ value: value });
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  render() {
    return (
      <input
        className="SectionTitle"
        type="text"
        onChange={this.handleChange}
        value={this.state.value}
      />
    );
  }
}
const mapStateToProps = state => ({ song: state.song });

export default connect(mapStateToProps)(SectionTitle);
