import React, { Component } from "react";
import { connect } from "react-redux";

import { HeaderView } from "./view";

class Header extends Component {
  render() {
    return <HeaderView loggedin={this.props.loggedin} />;
  }
}

const mapStateToProps = state => ({
  loggedin: state.user.loggedin
});

export default connect(mapStateToProps)(Header);
