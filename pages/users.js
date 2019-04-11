import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from "next/link";
import { connect } from "react-redux";

import { getUsers } from "../api";
import { GETUSERSACTION } from "../redux/actions/getUsers";

class Users extends React.Component {
  componentDidMount() {
    this._handleUsers();
  }
  _handleUsers = async () => {
    const users = await getUsers();

    this.props.GETUSERSACTION(users);
  };
  _showUsers = () => {
    return this.props.users.map(({ email, name }, index) => (
      <tr index={index}>
        <td>{index + 1}</td>
        <td>{name}</td>
        <td>11-7-2014</td>
        <td>
          <span className="badge bg-success">Approved</span>
        </td>
        <td>
          This user was approved by <b>Anil</b>
        </td>
        <td className="align-middle">
          <div className="progress progress-xs">
            <div
              className="progress-bar bg-success"
              style={{ width: "100%" }}
            />
          </div>
        </td>
      </tr>
    ));
  };
  render() {
    return (
      <AdminLayoutHoc
        contentTitle={"Users"}
        contentTitleButton={
          <Link href="/add-user">
            <button type="button" className="btn btn-outline-success btn-sm">
              <i className="fa fa-user-plus fa-fw" /> Add a new user
            </button>
          </Link>
        }
        url={this.props.url}
      >
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Current active users</h3>
                <div className="card-tools">
                  <div
                    className="input-group input-group-sm"
                    style={{ width: "150px" }}
                  >
                    <input
                      type="text"
                      name="table_search"
                      className="form-control float-right"
                      placeholder="Search"
                    />
                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default">
                        <i className="fa fa-search" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-body table-responsive p-0">
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>ID</th>
                      <th>User</th>
                      <th>Date</th>
                      <th>Status</th>
                      <th>Reason</th>
                      <th>Progress</th>
                    </tr>

                    {this._showUsers()}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </AdminLayoutHoc>
    );
  }
}

const mapState = state => {
  return {
    ...state.users
  };
};

export default connect(
  mapState,
  { GETUSERSACTION }
)(Users);
