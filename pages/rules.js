import React, { PureComponent } from "react";
import { connect } from "react-redux";

import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import "../ styles/styles.scss";
import { RULESAction } from "../redux/actions/Rules";

class rules extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: props.about
    };
  }
  render() {
    return (
      <AdminLayoutHoc contentTitle={"about"} url={this.props.url}>
        <div style={{ marginRight: "15%", marginLeft: "15%" }}>
          <div className="col-md-12 ">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">
                  <i className="fa fa-text-width" />
                  &nbsp;الشروط والاحكام
                </h3>
              </div>
              <div className="card-body">
                <textarea
                  className="area"
                  maxLength={500}
                  value={this.props.rules}
                  onChange={t => this.props.RULESAction(t.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </AdminLayoutHoc>
    );
  }
}

const mapStateToProps = state => {
  return {
    ...state.rules
  };
};

export default connect(
  mapStateToProps,
  { RULESAction }
)(rules);
