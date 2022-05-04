import React from "react";

function UserEdit() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-lg-6">
            <label className="fw-bolder mb-3 ">Name : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="Enter your name"
              required
            ></input>
          </div>
          <div className="col-lg-6">
            <label className="fw-bolder mb-3">Position : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="Your Position in Company"
              required
            ></input>
          </div>
          <div className="col-lg-6">
            <label className="fw-bolder mb-3">Office : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="Enter your Office Name"
              required
            ></input>
          </div>
          <div className="col-lg-6">
            <label className="fw-bolder mb-3">Age : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="Enter your Age"
              required
            ></input>
          </div>
          <div className="col-lg-6">
            <label className="fw-bolder mb-3">StartDate : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="StartDate of your work"
              required
            ></input>
          </div>
          <div className="col-lg-6">
            <label className="fw-bolder mb-3 form-label">Salary : </label>
            <input
              type={"text"}
              class="form-control"
              name="name"
              placeholder="Enter your salary"
              required
            ></input>
          </div>

          <button type={"submit"} className="btn btn-primary mt-3">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default UserEdit;
