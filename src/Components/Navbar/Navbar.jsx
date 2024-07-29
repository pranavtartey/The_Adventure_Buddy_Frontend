import styles from "./Navbar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const loginHandler = () => {
    navigate("/login");
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
          to="/schoolregister"
        >
          School Register
        </NavLink>
        <button onClick={loginHandler} className="login-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
