import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home";
import UserFrom from "../components/UserFrom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "user-form",
        element: <UserFrom />,
      },
    ],
  },
]);

export default router;
