import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import Link from "next/link";
import { connect } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

import "../ styles/styles.scss";
import { getUsers } from "../api";
import { GETUSERSACTION } from "../redux/actions/getUsers";
import localization from "../localization/index";

class Users extends React.Component {
  _handelDeleteUser = id => {
    const { GETUSERSACTION, users } = this.props;
    GETUSERSACTION(users.filter(t => t._id !== id));
    toast.success(localization.userDeleted, {
      position: toast.POSITION.TOP_CENTER,
      className: "notify"
    });
  };
  componentDidMount() {
    this._handleUsers();
  }
  _handleUsers = async () => {
    const users = await getUsers();
    this.props.GETUSERSACTION(users);
  };
  _showUsers = () => {
    return this.props.users.map(({ email, name, _id }, index) => (
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
        <td
          className="align-middle"
          onClick={() => this._handelDeleteUser(_id)}
        >
          <i
            className="fa fa-trash bg-success text-primary p-2 ml-4"
            aria-hidden="false"
          />
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
        <ToastContainer />

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
                      <th className="pl-5">Reason</th>
                      <th>Delete User</th>
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
