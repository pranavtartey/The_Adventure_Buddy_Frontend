import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <h1>Get in touch</h1>
      <h4>How can we support you? Just let us know!</h4>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={inputValue.name}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="mobilenumber">Mobile Number</label>
        <input
          type="number"
          name="mobilenumber"
          id="mobilenumber"
          value={inputValue.mobilenumber}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={inputValue.email}
          onChange={handleChange}
        />
        <br />
        <label htmlFor="query">Message</label>
        <input
          type="text"
          name="query"
          id="query"
          value={inputValue.query}
          onChange={handleChange}
        />
        <br />
        <button>Submit</button>
      </form>
    </>
  );
};

export default Contact;
