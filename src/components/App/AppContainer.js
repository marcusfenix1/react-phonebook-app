import React, { Component } from "react";
import App from "./App";

class AppContainer extends Component {
  render() {
    return <App {...this.props} />;
  }
}

export default AppContainer;
