import React, { Component } from "react";
import { connect } from "react-redux";

import LoginScreen from "./login";
import MainScreen from "./main";

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIne: props.user
    };
  }

  render() {
    const { loggedIne } = this.state;
    if (loggedIne) return <MainScreen />;
    return <LoginScreen />;
  }
}

const mapState = state => {
  return {
    ...state.user
  };
};
export default connect(mapState)(Index);
