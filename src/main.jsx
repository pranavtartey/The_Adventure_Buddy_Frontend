import React, { lazy } from "react";
import * as ReactDOM from "react-dom/client";
// import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
const Home = lazy(() => import("./Components/Home/Home"));
const Activity = lazy(() => import("./Components/Activity/Activity"));
const Safety = lazy(() => import("./Components/Safety/Safety"));
const About = lazy(() => import("./Components/About/About"));
const Contact = lazy(() => import("./Components/Contact/Contact"));
const Register = lazy(() => import("./Components/Register/Register"));
const SchoolRegisterForm = lazy(() =>
  import("./Components/SchoolRegisterForm/SchoolRegisterForm")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <p>This is my error element</p>,
    children: [
      {
        index: true,
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
      {
        path: "schoolregister",
        element: <SchoolRegisterForm />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
