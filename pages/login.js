import "../ styles/styles.scss";

import React, { Component } from "react";
import { Alert } from "reactstrap";
import { withRouter } from "next/router";
import { connect } from "react-redux";

import { LOGINACTION } from "../redux/actions/login";

class login extends Component {
  state = {
    email: "test@test.com",
    password: "123456",
    showError: false,
    message: ""
  };
  _handleLogin = e => {
    const { email, password } = this.state;
    e.preventDefault();
    if (this.state.email !== "test@test.com") {
      this.setState({ showError: true, message: "الايميل غلط او الباسورد" });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 2000);
    }
    this.props.LOGINACTION({ email, password });
    this.props.router.push("/main");
  };
  render() {
    return (
      <React.Fragment>
        <div
          style={{
            background: ` rgba(23, 160, 186, 0.9)`,
            width: "100vw",
            height: "100vh",
            paddingTop: "10%"
          }}
        >
          <div
            className=" bg-info"
            style={{
              width: "25vw",
              marginLeft: "auto",
              marginRight: "auto",
              padding: "50px"
            }}
          >
            <form>
              <div className="form-group">
                <label
                  style={{
                    float: "right"
                  }}
                  htmlFor="exampleInputEmail1"
                >
                  البريد الالكترونى
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={e => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </div>
              <div className="form-group">
                <label
                  style={{
                    float: "right"
                  }}
                  htmlFor="exampleInputPassword1 "
                >
                  كلمه المرور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                  onChange={e => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </div>
              <div
                style={{ marginTop: "20px", float: "right" }}
                className="form-check"
              >
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label" htmlFor="exampleCheck1">
                  احفظ بياناتى
                </label>
              </div>
              <button
                style={{
                  width: "100%",
                  marginTop: "30px",
                  marginBottom: "10px",
                  marginLeft: "auto",
                  marginRight: "auto"
                }}
                type="submit"
                className="btn btn-primary"
                onClick={this._handleLogin}
              >
                تسجيل الدخول
              </button>
            </form>
          </div>
          {this.state.showError && (
            <div
              style={{
                width: "25vw",

                margin: "auto",
                marginTop: "10px",
                textAlign: "center"
              }}
            >
              <Alert color="danger">{this.state.message}</Alert>
            </div>
          )}
        </div>
      </React.Fragment>
    );
  }
}

const mapState = state => {
  return {
    ...state.user
  };
};

export default connect(
  mapState,
  { LOGINACTION }
)(withRouter(login));
