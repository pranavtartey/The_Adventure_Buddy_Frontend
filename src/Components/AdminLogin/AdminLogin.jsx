import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { AdminLoginContext } from "../../Context/AdminLoginContext";

const AdminLogin = () => {
  const {  adminLoginState, adminLoginDispatch } = useContext(AdminLoginContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      // await axios.post(
      //   `http://192.168.2.124:8080/the_adventure_buddy/public/login-school`,
      //   inputValue
      // );
      // debugger;
      const response = await axios.post(
        `http://localhost:8080/the_adventure_buddy/admin/login-admin`,
        inputValue,
        {
          withCredentials: true,
        }
      );
      Cookies.set("AdminAuthorization", response.data, {
        expires: 7,
        secure: true,
      });
      console.log(Cookies.get("AdminAuthorization"));
      const decodedToken = jwtDecode(Cookies.get("AdminAuthorization"));
      console.log(decodedToken);
      adminLoginDispatch({
        type: "isAdminLoggedin",
        payload: decodedToken.userId,
      });
      navigate("/admin-home");
    } catch (error) {
      console.log("Something went wrong", error);
      navigate("/admin-login");
    }
    // console.log(inputValue);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={inputValue.username}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={inputValue.password}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default AdminLogin;
