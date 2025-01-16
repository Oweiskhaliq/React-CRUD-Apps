import axios from "axios";
import React, { useContext } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import UserContext from "../contexts/UserContext";

const Home = () => {
  const { users, addUser, deleteUser, findUserById } = useContext(UserContext);

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
                <Link
                  to={"/React-CRUD-Apps/user-form"}
                  className="btn btn-success text-center"
                  onClick={() => findUserById(user.id)}
                >
                  <FaRegEdit size={20} color="white" />
                </Link>
                <button
                  className="btn btn-danger text-center"
                  onClick={() => deleteUser(user.id)}
                >
                  <MdDelete size={20} color="white" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Home;
