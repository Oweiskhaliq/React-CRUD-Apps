import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import UserFrom from "../components/UserFrom";

const router = createBrowserRouter([
  {
    path: "/React-CRUD-Apps",
    element: <App />,
    children: [
      {
        path: "/React-CRUD-Apps",
        element: <Home />,
      },
      {
        path: "/React-CRUD-Apps/user-form",
        element: <UserFrom />,
      },
    ],
  },
]);

export default router;
