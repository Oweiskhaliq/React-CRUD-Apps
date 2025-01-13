import React, { useEffect, useState } from "react";
import userContext from "./UserContext";
import axios from "axios";
import toast from "react-hot-toast";

const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", username: "", email: "" });
  const [editUserId, setEditUserId] = useState(null);

  const loadUsers = async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );
    const user = response.data;
    localStorage.setItem("users", JSON.stringify(user));
    toast.success("Data fetched and saved in local storage.");
  };

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    if (storedUsers.length === 0) {
      loadUsers();
    }
    setUsers(storedUsers);
  }, []);

  // Add user
  const addUser = () => {
    const updatedUsers = [...users, { id: Date.now(), ...newUser }];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setNewUser({ name: "", username: "", email: "" });
    toast.success("New user created successfully.");
  };

  // Delete user
  const deleteUser = (id) => {
    const updatedUsers = users.filter((user) => user.id !== id);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    toast.success("User Deleted Successfully.");
  };

  // Find user by ID for editing
  const findUserById = (id) => {
    const findUser = users.find((user) => user.id === id);
    setNewUser({
      name: findUser.name,
      username: findUser.username,
      email: findUser.email,
    });
    setEditUserId(id);
    toast.success("User data fetched successfully  for updating.");
  };

  // Save edited user
  const saveEditUser = () => {
    const updatedUsers = users.map((user) =>
      user.id === editUserId ? { ...user, ...newUser } : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setUsers(updatedUsers);
    setEditUserId(null);
    setNewUser({ name: "", username: "", email: "" });
    toast.success("User data updated successfuly.");
  };
  return (
    <userContext.Provider
      value={{
        users,
        addUser,
        deleteUser,
        findUserById,
        saveEditUser,
        editUserId,
        setEditUserId,
        newUser,
        setNewUser,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
