import React from "react";
import { useFormik } from "formik";

function CreateUsers() {
  const formik = useFormik({
    initialValues: {
      name: "",
      position: "",
      office: "",
      age: 0,
      date: "",
      salary: 0,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  console.log(formik.values);

  return (
    <>
      <h1 className="bg-primary text-white text-center">User Details Form</h1>

      <div className="container">
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <label className="fw-bolder mb-3 ">Name : </label>
              <input
                type={"text"}
                class="form-control"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Position : </label>
              <input
                type={"text"}
                class="form-control"
                name="position"
                onChange={formik.handleChange}
                value={formik.values.position}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Office : </label>
              <input
                type={"text"}
                class="form-control"
                name="office"
                onChange={formik.handleChange}
                value={formik.values.office}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">Age : </label>
              <input
                type={"number"}
                class="form-control"
                name="age"
                onChange={formik.handleChange}
                value={formik.values.age}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3">StartDate : </label>
              <input
                type={"date"}
                class="form-control"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.date}
              />
            </div>
            <div className="col-lg-6">
              <label className="fw-bolder mb-3 form-label">Salary : </label>
              <input
                type={"number"}
                class="form-control"
                name="salary"
                onChange={formik.handleChange}
                value={formik.values.salary}
              />
            </div>

            <button type={"submit"} className="btn btn-primary mt-3">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default CreateUsers;
