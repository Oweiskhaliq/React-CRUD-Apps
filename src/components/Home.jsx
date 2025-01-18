import axios from "axios";
import React, { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";
import ModelBox from "./ModelBox";

const Home = () => {
  const { setShow, users, addUser } = useContext(UserContext);
  const [userId, setUserId] = useState();
  const [action, setAction] = useState();
  return (
    <>
      <Link
        to={"/React-CRUD-Apps/user-form"}
        onClick={() => addUser}
        className="btn btn-success float-end mt-5 p-2 "
      >
        Add new user
      </Link>

      <table className="container table table-striped caption-top table-bordered">
        <caption>
          Manage <b>Users</b>
        </caption>
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td className="d-flex flex-row bd-highlight p-2">
                <button
                  // to={"/React-CRUD-Apps/user-form"}
                  className="btn btn-success text-center"
                  onClick={() => {
                    setShow(true);
                    setUserId(user.id);
                    setAction("update");
                  }}
                >
                  <FaRegEdit size={20} color="white" />
                </button>
                <button
                  className="btn btn-danger text-center"
                  onClick={() => {
                    setShow(true);
                    setUserId(user.id);
                    setAction("delete");
                  }}
                >
                  <MdDelete size={20} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {action === "delete" ? (
        <ModelBox
          title={"Delete  user."}
          body_text={"Are you sure, want to delete? "}
          btn_text={"Delete"}
          userId={userId}
          action={action}
        />
      ) : (
        <ModelBox
          title={"Sure want to Edit?"}
          body_text={"Are you sure, want to make changes? "}
          btn_text={"Yes Update"}
          userId={userId}
          action={action}
        />
      )}
    </>
  );
};

export default Home;
