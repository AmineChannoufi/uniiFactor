import axios from "axios";
import { Axios } from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "./Admin.css";
import { ToastContainer, toast } from "react-toastify";

import Dashboard from "./../assets/dashboard.png";
import RowDetails from "./RowDetails";

export default function Admin() {
  const [data, setData] = useState([]);
  useEffect(async () => {
    await axios.get("http://localhost:3001/demande").then((res) => {
      setData(res.data);
    });
  });

  const nav = useNavigate();

  // useEffect(() => {
  //   Axios.get("http://localhost:3001/login").then((res) => {
  //     if (res.data.loggedIn === true) {
  //       // setLoginStatus(res.data.user[0].name);
  //       alert ('hello')
  //     }
  //   });
  // }, []);

  const logout = () => {
    // e.preventDefault();
    localStorage.clear();
    nav("/login");
  };
  const deleteContact = (id) => {
    if (window.confirm("are you sure to delete this user ?")) {
      console.log(id);
      axios.delete(`http://localhost:3001/delete/demande/${id}`);
      toast.success("contact deleted successfully");
      // setTimeout(()=>loadData(),500)
    }
  };
  return (
    <div style={{ marginTop: "150px" }}>
     <h1>Admin dashboard</h1>

      <table className="styled-table">
        <thead>
          <tr>
            <th style={{ textAlign: "center" }}>Num</th>

            <th style={{ textAlign: "center" }}>adherent</th>
            <th style={{ textAlign: "center" }}>ident</th>
            <th style={{ textAlign: "center" }}>rib</th>
            <th style={{ textAlign: "center" }}>ca</th>
            <th style={{ textAlign: "center" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.id}>
                <th scope="row">{index + 1}</th>
                <td>{item.adherent}</td>
                <td>{item.ident}</td>
                <td>{item.rib}</td>
                <td>{item.ca}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button
                    className="btn btn-delete"
                    onClick={() => deleteContact(item.id)}
                  >
                    Delete
                  </button>
                  <Link to={`/View/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
