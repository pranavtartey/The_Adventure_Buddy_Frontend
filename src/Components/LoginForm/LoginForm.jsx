import { useContext, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import loginImage from "./login1.png"
import { SchoolLoginContext } from "../../Context/SchoolLoginContext";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import styles from "./LoginForm.module.css"
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
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-customColor text-4xl sm:text-6xl font-semibold">Welcome Back</h1>
        <h4 className="text-base text-greycolor sm:text-1xl font-medium">YOUR ADVENTURE START HERE</h4>
      </div>
      <div className="w-full flex flex-col justify-around lg:flex-row p-5  " >
        <div className="   flex justify-around items-start  mt-5  mt-0">

          <img src={loginImage} alt="" />
        </div>
        <form className="mt-20  lg:w-2/5 " onSubmit={submitHandler}>


          <div className="mb-5">
            <label className="font-medium text-sm" htmlFor="email">Email</label>
            <input
              className="w-full h-8 outline-none rounded-lg px-2 drop-shadow-xl bg-contactBorderBg border-2 border-solid border-customColor"
              type="email"
              name="email"
              id="email"
              value={inputValue.email}
              onChange={handleChange}
            />
          </div>


          <div className=" mb-5">
            <label className="font-medium text-sm" htmlFor="password">Password</label>
            <input
              className="w-full h-8 outline-none rounded-lg px-2 drop-shadow-xl bg-contactBorderBg border-2 border-solid border-customColor"
              type="password"
              name="password"
              id="password"
              value={inputValue.password}
              onChange={handleChange}
            />
          </div>

          <div >
            <button className="w-full h-8 rounded-lg focus:ring-white bg-blue-500 text-white text-sm">Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
