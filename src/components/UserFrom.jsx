import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";

const UserFrom = () => {
  const { editUserId, setNewUser, newUser, addUser, saveEditUser } =
    useContext(UserContext);
  const navigate = useNavigate();
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (editUserId) {
      saveEditUser();
    } else {
      addUser();
    }
    navigate("/");
  };

  return (
    <div className="mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title text-center mb-4">
                {editUserId ? "Update user" : "Register new user."}
              </h5>
              <form onSubmit={handlerSubmit}>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={newUser.name}
                    placeholder="Enter your name"
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="username" className="form-label">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    value={newUser.username}
                    placeholder="Choose a username"
                    onChange={(e) =>
                      setNewUser({ ...newUser, username: e.target.value })
                    }
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={newUser.email}
                    placeholder="Enter your email"
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  {editUserId ? "Update user" : "Create user"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserFrom;
