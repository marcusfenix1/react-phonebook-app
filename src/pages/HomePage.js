import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import authSelectors from "../../src/redux/auth/authSelectors";

class HomePage extends Component {
  render() {
    return this.props.isAuthenticated ? (
      <Redirect to="/contacts" />
    ) : (
      <Redirect to="/login" />
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
});

export default connect(mapStateToProps)(HomePage);
