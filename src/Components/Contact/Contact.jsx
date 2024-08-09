import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "./contact.png"
// import { MdOutlineLocationOn } from "react-icons/md";
// import { BiSolidPhoneCall } from "react-icons/bi";
// import { CiMail } from "react-icons/ci";
import styles from "./Contact.module.css"
const Contact = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    mobilenumber: "",
    query: "",
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
    await axios.post(
      `http://localhost:8080/the_adventure_buddy/public/query`,
      inputValue
    );
    setTimeout(navigate("/"), 5000);
  };
  const style = { color: "#2093BF", fontSize: "1.5em" }







  return (
    <>
      <div className="flex justify-center items-center flex-col gap-3">
        <h1 className="text-customColor text-4xl sm:text-6xl font-semibold">Get in touch</h1>
        <h4 className="text-base text-greycolor sm:text-1xl font-medium">How can we support you? Just let us know!</h4>
      </div>
      <div id="contactImg" className="w-full flex flex-col justify-around lg:flex-row p-5  " >
        <div className="   flex justify-around items-start  mt-5  mt-0">
          <img className={styles.contactImg} src={image} alt="" />


        </div>
        <form className="mt-20  lg:w-2/5 " onSubmit={submitHandler}>
          <div className=" mb-5">
            <label className="font-medium text-sm" htmlFor="name">Name</label>
            <input
              className="w-full h-8 outline-none rounded-lg px-2 drop-shadow-xl bg-contactBorderBg border-2 border-solid border-customColor"
              type="text"
              name="name"
              id="name"
              value={inputValue.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-5">
            <label className="font-medium text-sm" htmlFor="mobilenumber">Mobile Number</label>
            <input
              className="w-full h-8 outline-none rounded-lg px-2 drop-shadow-xl bg-contactBorderBg border-2 border-solid border-customColor"
              type="number"
              name="mobilenumber"
              id="mobilenumber"
              value={inputValue.mobilenumber}
              onChange={handleChange}
            />
          </div>

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

          <div className="mb-5">
            <label className="font-medium text-sm" htmlFor="query">Message</label>
            <input
              className="w-full h-8 outline-none rounded-lg px-2 drop-shadow-xl bg-contactBorderBg border-2 border-solid border-customColor"
              type="text"
              name="query"
              id="query"
              value={inputValue.query}
              onChange={handleChange}
            />
          </div>

          <button className="w-full h-8 rounded-lg focus:ring-white bg-blue-500 text-white text-sm">Submit</button>
        </form>

      </div >
      

    </>
  );
};

export default Contact;
