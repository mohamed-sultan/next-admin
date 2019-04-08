import "../ styles/styles.scss";
export default () => {
  return (
    <React.Fragment>
      <div
        className=" bg-info"
        style={{
          width: "30vw",
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
            />
          </div>
          <div style={{ marginTop: "40px" }} className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Check me out
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
          >
            Submit
          </button>
        </form>
      </div>
    </React.Fragment>
  );
};
