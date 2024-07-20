import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className = {styles.navbar_content}>
        <NavLink
          className={(event) => {
            if (!event.isActive) return "underline";
          }}
          to="/home"
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
        <button className="login-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
