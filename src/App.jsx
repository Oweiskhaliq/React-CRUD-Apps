import "./App.css";

import { Toaster } from "react-hot-toast";
import Home from "./components/Home";
import UserFrom from "./components/UserFrom";
import { Outlet } from "react-router-dom";
import UserContextProvider from "./contexts/userContextProvider.jsx";

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
