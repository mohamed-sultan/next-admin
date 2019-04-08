import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";

export default class Index extends React.Component {
  render() {
    return (
      <AdminLayoutHoc contentTitle={"Home"} url={this.props.url}>
        <h1>awesome</h1>
      </AdminLayoutHoc>
    );
  }
}
