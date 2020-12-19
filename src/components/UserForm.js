import React, { useState, useEffect } from "react";

const UserForm = (props) => {
  const initialFieldValues = {
    fullName: "",
    password: "",
    mobile: "",
    email: "",
    address: "",
    gender: "",
    salary: "",
  };

  const [values, setValues] = useState(initialFieldValues);

  useEffect(() => {
    if (props.currentId == "") setValues({ ...initialFieldValues });
    else
      setValues({
        ...props.contactObjects[props.currentId],
      });
  }, [props.currentId, props.contactObjects]);

  const handleInputChange = (e) => {
    var { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    props.addOrEdit(values);
  };

  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          name="fullName"
          placeholder="Username"
          value={values.fullName}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-key" aria-hidden="true"></i>
          </div>
        </div>
        <input
          className="form-control"
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="form-row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-user-circle-o" aria-hidden="true"></i>
            </div>
          </div>
          <input
            type="radio"
            className="form-control mt-2"
            id="male"
            name="gender"
            value="male"
            onChange={handleInputChange}
          />
          <label for="male" className="mt-1">
            Male
          </label>
          <input
            type="radio"
            className="form-control mt-2"
            id="female"
            name="gender"
            value="female"
            onChange={handleInputChange}
          />
          <label for="female" className="mt-1">
            Female
          </label>
          <input
            type="radio"
            className="form-control mt-2"
            id="other"
            name="gender"
            value="other"
            onChange={handleInputChange}
          />
          <label for="other" className="mt-1">
            Other
          </label>
        </div>
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fa fa-money"></i>
            </div>
          </div>
          <input
            className="form-control"
            name="salary"
            placeholder="Salary"
            value={values.salary}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-mobile-alt"></i>
            </div>
          </div>

          <input
            className="form-control"
            name="mobile"
            placeholder="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
          </div>
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            value={values.email}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
          </div>
        </div>
        <input
          className="form-control"
          name="address"
          placeholder="Address"
          value={values.address}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value={props.currentId == "" ? "Save" : "Update"}
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
};

export default UserForm;
