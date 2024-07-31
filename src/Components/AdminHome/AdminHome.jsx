import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";
import { AdminLoginContext } from "../../Context/AdminLoginContext";

const AdminHome = () => {
  const navigate = useNavigate();
  const { adminLoginState } = useContext(AdminLoginContext);

  const logoutHandler = () => {
    const logoutAdmin = async () => {
      await axios.get(
        "http://localhost:8080/the_adventure_buddy/admin/logout-admin"
      );
    };
    logoutAdmin();
    Cookies.remove("AdminAuthorization");
    navigate("/admin-login");
  };
  return adminLoginState ? (
    <>
      <button onClick={logoutHandler}>Logout</button>
      <p>This is your admin home page...</p>
    </>
  ) : (
    <p>You are not authorized to access this page</p>
  );
};

export default AdminHome;
