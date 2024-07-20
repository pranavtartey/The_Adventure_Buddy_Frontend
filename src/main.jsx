import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./Components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Activity from "./Components/Activity/Activity";
import Safety from "./Components/Safety/Safety";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Register from "./Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>This is my error element</p>,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "activity",
        element: <Activity />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "safety",
        element: <Safety />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
