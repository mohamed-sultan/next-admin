import React, { Component } from "react";

import LoginScreen from "./login";
import MainScreen from "./main";

export default class index extends Component {
  state = {
    loggedIne: null
  };
  render() {
    const { loggedIne } = this.state;
    if (loggedIne) return <MainScreen />;
    return <LoginScreen />;
  }
}
