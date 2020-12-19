import React, { useState, useEffect } from "react";
import ContactForm from "./UserForm";
import firebaseDb from "../firebase";

const User = () => {
  const [currentId, setCurrentId] = useState("");
  const [contactObjects, setContactObjects] = useState({});

  useEffect(() => {
    firebaseDb.child("User").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setContactObjects({
          ...snapshot.val(),
        });
      }
    });
  }, []);

  const addOrEdit = (obj) => {
    alert("Success...");
    if (currentId == "")
      firebaseDb.child("User").push(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    else
      firebaseDb.child(`User/${currentId}`).set(obj, (err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
  };

  const onDelete = (id) => {
    if (window.confirm("Are you sure to delete this record?")) {
      firebaseDb.child(`User/${id}`).remove((err) => {
        if (err) console.log(err);
        else setCurrentId("");
      });
    }
  };

  return (
    <>
      <div style={{}}>
        <div className="container">
          <h1 className="text-center">User Registration</h1>
        </div>
      </div>

      <div className="col-md-8" style={{ marginLeft: "15%" }}>
        <ContactForm
          {...{ currentId, contactObjects, addOrEdit }}
        ></ContactForm>
      </div>
      <div className="col-md-12">
        <table className="table table-borderless table-stripped">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Password</th>
              <th>Gender</th>
              <th>Salary</th>
              <th>Mobile</th>
              <th>Email</th>
              <th>Address</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(contactObjects).map((key) => (
              <tr key={key} className="bg-light">
                <td>{contactObjects[key].fullName}</td>
                <td>{contactObjects[key].password}</td>
                <td>{contactObjects[key].gender}</td>
                <td>{contactObjects[key].salary}</td>
                <td>{contactObjects[key].mobile}</td>
                <td>{contactObjects[key].email}</td>
                <td>{contactObjects[key].address}</td>
                <td className="bg-light">
                  <a
                    className="btn text-primary"
                    onClick={() => {
                      setCurrentId(key);
                    }}
                  >
                    <i className="fas fa-pencil-alt"></i>
                  </a>
                  <a
                    className="btn text-danger"
                    onClick={() => {
                      onDelete(key);
                    }}
                  >
                    <i className="far fa-trash-alt"></i>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default User;
