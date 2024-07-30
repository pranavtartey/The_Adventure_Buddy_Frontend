import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { SchoolLoginContext } from "../../Context/SchoolLoginContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { schoolLoginState, schoolLoginDispatch } =
    useContext(SchoolLoginContext);
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState({
    email: "",
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
        `http://localhost:8080/the_adventure_buddy/public/login-school`,
        inputValue,
        {
          withCredentials: true,
        }
      );
      Cookies.set("SchoolAuthorization", response.data, {
        expires: 7,
        secure: true,
      });
      console.log(Cookies.get("SchoolAuthorization"));
      const decodedToken = jwtDecode(Cookies.get("SchoolAuthorization"));
      console.log(decodedToken);
      schoolLoginDispatch({
        type: "isSchoolLoggedin",
        payload: decodedToken.schoolId,
      });
      navigate("/school-admin");
    } catch (error) {
      console.log("Something went wrong", error);
      navigate("/login");
    }
    // console.log(inputValue);
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={inputValue.email}
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

export default LoginForm;
