import { useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { SchoolLoginContext } from "../../Context/SchoolLoginContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { schoolLoginState, schoolLoginDispatch } =
    useContext(SchoolLoginContext);

  const loginHandler = () => {
    navigate("/login");
  };

  const logoutHandler = async () => {
    await axios.get(
      "http://localhost:8080/the_adventure_buddy/public/logout-school"
    );
    Cookies.remove("SchoolAuthorization");
    schoolLoginDispatch({ type: "isSchoolLoggedin", payload: false });
    console.log("School is logged out");
    navigate("/");
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.navbar_content}>
        <NavLink
          className={(event) => {
            if (!event.isActive) return "underline";
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/activity"
        >
          Activity
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/safety"
        >
          Safety
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/contact"
        >
          Contact
        </NavLink>
        <NavLink
          className={(event) => {
            if (event.isActive) return "underline";
          }}
          to="/school-register"
        >
          School Register
        </NavLink>
        {schoolLoginState ? (
          <button onClick={logoutHandler}>Logout</button>
        ) : (
          <button onClick={loginHandler} className="login-button">
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
