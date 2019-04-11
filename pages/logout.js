import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { withRouter } from "next/router";

import { LOGOutACTION } from "../redux/actions/logOut";

class logout extends React.Component {
  constructor(props) {
    super(props);
    this._handleLogOut();
  }
  _handleLogOut = () => {
    this.props.LOGOutACTION();
    this.props.router.push("/index");
  };
  render() {
    return null;
  }
}

export default connect(
  null,
  { LOGOutACTION }
)(withRouter(logout));
