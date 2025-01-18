import "./App.css";

import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import UserFrom from "./components/UserFrom";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { Button } from "react-bootstrap";
import ModelBox from "./components/ModelBox";
import UserContextProvider from "./contexts/UserContextProvider";

function App() {
  return (
    <>
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
      <Toaster />
    </>
  );
}

export default App;
