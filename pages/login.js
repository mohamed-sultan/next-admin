import "../ styles/styles.scss";

import React, { Component } from "react";
import { Alert } from "reactstrap";
import { withRouter } from "next/router";

class login extends Component {
  state = {
    email: "test@test.com",
    password: "123456",
    showError: false,
    message: ""
  };
  _handleLogin = e => {
    e.preventDefault();
    if (this.state.email !== "test@test.co") {
      this.setState({ showError: true, message: "الايميل غلط او الباسورد" });
      setTimeout(() => {
        this.setState({ showError: false });
      }, 2000);
    }
    console.log("====================================");
    console.log(this.props);
    console.log("====================================");
    this.props.url.replace("/index");
  };
  render() {
    return (
      <React.Fragment>
        <div
          className=" bg-info"
          style={{
            width: "25vw",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "10%",
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
              <small
                style={{ color: "black" }}
                id="emailHelp"
                className="form-text text-muted "
              >
                We'll never share your email with anyone else.
              </small>
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
      </React.Fragment>
    );
  }
}

export default withRouter(login);
