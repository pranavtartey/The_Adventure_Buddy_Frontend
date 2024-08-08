import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styles from "./SchoolRegisterForm.module.css";
import image from "./logo.png";
// import SchoolUniqueIdFrom from "./SchoolUniqueIdForm/SchoolUniqueIdForm";

const SchoolRegisterForm = () => {
  const navigate = useNavigate();
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const [inputValue, setInputValue] = useState({
    name: "",
    address: "",
    phoneNumber: "",
    state: "",
    city: "",
    pincode: "",
    email: "",
    password: "",
    uniqueCode: "",
  });
  const uniqueCodeHandler = async (event) => {
    event.preventDefault();
    // toSet(true);
    try {
      const response = await axios.post(
        `http://localhost:8080/the_adventure_buddy/public/school-unique-id-code`,
        { uniqueCode: inputValue.uniqueCode }
      );
      if (response.data.isValid) {
        setShowRegisterForm(true);
      }
      console.log("Hello from the unique code form");
      console.log(response.data);
      // toSet(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target);
    setInputValue((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  //   const printHandler = (event) => {
  //     event.preventDefault();
  //     window.print();
  //   };

  const submitHandler = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      "http://localhost:8080/the_adventure_buddy/public/create-school",
      inputValue,
      { withCredentials: true }
    );
    console.log(response.data.message);
    navigate("/login");
  };

  return (
    <>
      {!showRegisterForm ? (
        <>
          <h1>Unique Code</h1>
          <form onSubmit={uniqueCodeHandler}>
            <label htmlFor="uniqueCode">Form unique code: </label>
            <br />
            <input
              type="text"
              name="uniqueCode"
              id="uniqueCode"
              value={inputValue.uniqueCode}
              onChange={handleChange}
            />
            <br />
            <button>Submit</button>
          </form>
        </>
      ) : (
        <>
          <div className="flex justify-center items-center m-20  ">
            <div className=" bg-[url('bg.jpg')] p-2 m-1">
              <div className="flex items-center space-x-8 p-4 shrink-0">
                <img src={image} alt="" />
                <button className="px-2 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 m-2">
                  Signup
                </button>
                <button className="px-3  py-1 bg-blue-500 text-white rounded hover:bg-blue-600 focus:ring-2 focus:ring-blue-400">
                  Login
                </button>
              </div>

              <h1 className="text-3xl font-semibold text-center ">
                Create Your Account
              </h1>
              <form className="grid gap-2" onSubmit={submitHandler}>
                <label htmlFor="name"></label>
                <input
                  className="rounded px-2 w-96  shadow"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="School Name"
                  value={inputValue.name}
                  onChange={handleChange}
                />

                <label htmlFor="address"></label>
                <input
                  className="rounded px-2 w-96  shadow"
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Address"
                  value={inputValue.address}
                  onChange={handleChange}
                />

                <label htmlFor="state"></label>
                <input
                  className="rounded px-2 w-96 shadow "
                  type="text"
                  name="state"
                  id="state"
                  placeholder="State"
                  value={inputValue.state}
                  onChange={handleChange}
                />
                <label htmlFor="phoneNumber"></label>
                <input
                  className="rounded px-2 w-96 shadow"
                  type="tel"
                  name="phoneNumber"
                  id="phoneNumber"
                  placeholder="Phone Number"
                  value={inputValue.phoneNumber}
                  onChange={handleChange}
                />

                <label htmlFor="city"></label>
                <input
                  className="rounded px-2 w-96 shadow "
                  type="text"
                  name="city"
                  placeholder="City"
                  id="city"
                  value={inputValue.city}
                  onChange={handleChange}
                />

                <label htmlFor="email"></label>
                <input
                  className="rounded px-2 w-96 shadow "
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  value={inputValue.email}
                  onChange={handleChange}
                />

                <label htmlFor="password"></label>
                <input
                  className="rounded px-2 w-96 shadow "
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  value={inputValue.password}
                  onChange={handleChange}
                />

                <label htmlFor="pincode"></label>
                <input
                  className="rounded px-2 w-96 shadow "
                  type="number"
                  placeholder="Pincode"
                  name="pincode"
                  id="pincode"
                  value={inputValue.pincode}
                  onChange={handleChange}
                />

                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default SchoolRegisterForm;
