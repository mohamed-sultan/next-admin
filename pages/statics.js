import AdminLayoutHoc from "../components/Layout/AdminLayoutHoc";
import "../ styles/styles.scss";

export default class Index extends React.Component {
  render() {
    return (
      <AdminLayoutHoc
        contentTitle={"الاحصائيات"}
        contentTitleButton={<i className="fa fa-free-code-camp" />}
        url={this.props.url}
      >
        <div className="card " style={{ padding: "10px" }}>
          <div class="card-header font-weight-bold">احصائيات حالا</div>
          <div class="row">
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box bg-success">
                <span class="info-box-icon bg-aqua">
                  <i class="fa fa-envelope-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">الرسائل</span>
                  <span class="info-box-number">1,410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-success">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">الاعضاء</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-danger">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">المستخدمين</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-dark">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">المتواجدين</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-info">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">العملاء</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-warning">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">الكل</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-secondary">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">النشطاء</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <div class="info-box  bg-primary">
                <span class="info-box-icon bg-green">
                  <i class="fa fa-flag-o" />
                </span>
                <div class="info-box-content">
                  <span class="info-box-text">الزوار</span>
                  <span class="info-box-number">410</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayoutHoc>
    );
  }
}
